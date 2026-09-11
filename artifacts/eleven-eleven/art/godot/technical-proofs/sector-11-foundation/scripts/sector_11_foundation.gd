class_name Sector11Foundation
extends Node3D

const OBSIDIAN := Color("080b13")
const STEEL := Color("151c2a")
const IVORY := Color("d9d7ca")
const CYAN := Color("35c7d9")
const CRIMSON := Color("c51f42")
const VIOLET := Color("7049d8")

func _ready() -> void:
	_build_environment()
	_build_architecture()
	_build_interactables()

func _build_environment() -> void:
	var world := WorldEnvironment.new()
	world.name = "Sector11WorldEnvironment"
	var environment := Environment.new()
	environment.background_mode = Environment.BG_COLOR
	environment.background_color = Color("03050a")
	environment.ambient_light_source = Environment.AMBIENT_SOURCE_COLOR
	environment.ambient_light_color = Color("172039")
	environment.ambient_light_energy = 0.42
	environment.tonemap_mode = Environment.TONE_MAPPER_FILMIC
	world.environment = environment
	add_child(world)

	_add_light("Key_Cyan", Vector3(-3.8, 4.8, 1.5), CYAN, 8.5, 9.0)
	_add_light("Rim_Violet", Vector3(4.2, 3.2, -2.8), VIOLET, 6.0, 7.5)
	_add_light("Signal_Crimson", Vector3(0.0, 2.2, -4.2), CRIMSON, 3.8, 5.2)

func _build_architecture() -> void:
	var visuals := Node3D.new()
	visuals.name = "VisualGeometry"
	add_child(visuals)
	var collisions := Node3D.new()
	collisions.name = "CollisionGeometry"
	add_child(collisions)

	_add_box("Floor", Vector3(0, -0.18, 0), Vector3(14, 0.35, 10), _material("FloorWet", STEEL, 0.23, 0.62), visuals, collisions)
	_add_box("BackWall", Vector3(0, 2.35, -5.0), Vector3(14, 4.7, 0.28), _material("WallObsidian", OBSIDIAN, 0.08, 0.55), visuals, collisions)
	_add_box("LeftWall", Vector3(-7.0, 2.35, 0), Vector3(0.28, 4.7, 10), _material("WallLeft", OBSIDIAN, 0.08, 0.55), visuals, collisions)
	_add_box("RightWall", Vector3(7.0, 2.35, 0), Vector3(0.28, 4.7, 10), _material("WallRight", OBSIDIAN, 0.08, 0.55), visuals, collisions)
	_add_box("CeilingFrame", Vector3(0, 4.65, 0), Vector3(14, 0.18, 10), _material("Ceiling", Color("050812"), 0.12, 0.7), visuals, collisions)

	_add_box("CentralDais", Vector3(0, 0.12, -0.8), Vector3(3.7, 0.24, 3.1), _material("Dais", Color("10192a"), 0.4, 0.45), visuals, collisions)
	_add_box("ObservationGlass", Vector3(0, 2.1, -4.7), Vector3(5.8, 3.4, 0.08), _material("GlassSignal", Color(0.03, 0.16, 0.22, 0.34), 0.0, 0.08, CYAN, 0.35), visuals, null)
	for index in range(-5, 6):
		var color := CRIMSON if index == 0 else CYAN
		_add_box("FloorSignal_%02d" % (index + 5), Vector3(index * 1.15, 0.015, 3.9), Vector3(0.72, 0.025, 0.055), _material("Signal_%02d" % index, color.darkened(0.28), 0.0, 0.25, color, 2.3), visuals, null)
	for side in [-1.0, 1.0]:
		_add_box("CableTrench_%s" % side, Vector3(4.8 * side, 0.03, -0.2), Vector3(0.85, 0.06, 7.8), _material("CableTrench", Color("060910"), 0.05, 0.85), visuals, null)

func _build_interactables() -> void:
	_add_interactable("opening-clock", Vector3(-2.4, 1.25, -4.45), "اضبط الإشارة", "Tune signal", false, CYAN)
	_add_interactable("opening-photo", Vector3(2.3, 1.05, -4.42), "افحص الذاكرة", "Inspect memory", false, VIOLET)
	_add_interactable("opening-door", Vector3(0, 1.25, 4.72), "اطلب فتح البوابة", "Request door access", true, CRIMSON)

func _add_interactable(id: String, position: Vector3, ar: String, en: String, authority: bool, color: Color) -> void:
	var area := FoundationInteractable.new()
	area.name = id
	area.interaction_id = id
	area.prompt_ar = ar
	area.prompt_en = en
	area.requires_authority = authority
	area.position = position
	var shape := CollisionShape3D.new()
	var box := BoxShape3D.new()
	box.size = Vector3(1.15, 1.8, 0.55)
	shape.shape = box
	area.add_child(shape)
	var mesh := MeshInstance3D.new()
	var quad := BoxMesh.new()
	quad.size = Vector3(1.05, 1.6, 0.22)
	mesh.mesh = quad
	mesh.material_override = _material("%sMaterial" % id, color.darkened(0.72), 0.12, 0.32, color, 1.8)
	area.add_child(mesh)
	add_child(area)

func _add_box(name: String, position: Vector3, size: Vector3, mat: Material, visual_parent: Node3D, collision_parent: Node3D) -> void:
	var mesh_instance := MeshInstance3D.new()
	mesh_instance.name = name
	var mesh := BoxMesh.new()
	mesh.size = size
	mesh_instance.mesh = mesh
	mesh_instance.material_override = mat
	mesh_instance.position = position
	visual_parent.add_child(mesh_instance)
	if collision_parent:
		var body := StaticBody3D.new()
		body.name = "%sCollision" % name
		body.collision_layer = 1 | 8
		body.position = position
		var collision := CollisionShape3D.new()
		var shape := BoxShape3D.new()
		shape.size = size
		collision.shape = shape
		body.add_child(collision)
		collision_parent.add_child(body)

func _add_light(name: String, position: Vector3, color: Color, energy: float, range_value: float) -> void:
	var light := OmniLight3D.new()
	light.name = name
	light.position = position
	light.light_color = color
	light.light_energy = energy
	light.omni_range = range_value
	light.shadow_enabled = true
	add_child(light)

func _material(name: String, color: Color, metallic: float, roughness: float, emission := Color.BLACK, emission_energy := 0.0) -> StandardMaterial3D:
	var mat := StandardMaterial3D.new()
	mat.resource_name = name
	mat.albedo_color = color
	mat.metallic = metallic
	mat.roughness = roughness
	if emission_energy > 0.0:
		mat.emission_enabled = true
		mat.emission = emission
		mat.emission_energy_multiplier = emission_energy
	return mat

