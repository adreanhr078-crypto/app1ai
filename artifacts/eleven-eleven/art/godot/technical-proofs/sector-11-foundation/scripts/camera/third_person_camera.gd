class_name ThirdPersonCameraRig
extends Node3D

@export var target_path: NodePath
@export var follow_height := 1.35
@export var follow_smoothing := 12.0
@export var mouse_sensitivity := 0.0024
@export var stick_speed := 2.2
@export var min_pitch := deg_to_rad(-48.0)
@export var max_pitch := deg_to_rad(38.0)
@export var reduced_motion := false

@onready var yaw_pivot: Node3D = $Yaw
@onready var pitch_pivot: Node3D = $Yaw/Pitch
var _target: Node3D
var _yaw := 0.0
var _pitch := deg_to_rad(-10.0)

func _ready() -> void:
	add_to_group("foundation_camera")
	_target = get_node_or_null(target_path) as Node3D
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _unhandled_input(event: InputEvent) -> void:
	if event is InputEventMouseMotion and not reduced_motion:
		_yaw -= event.relative.x * mouse_sensitivity
		_pitch = clampf(_pitch - event.relative.y * mouse_sensitivity, min_pitch, max_pitch)
	if event.is_action_pressed("camera_recenter"):
		recenter()
	if event.is_action_pressed("pause"):
		Input.mouse_mode = Input.MOUSE_MODE_VISIBLE if Input.mouse_mode == Input.MOUSE_MODE_CAPTURED else Input.MOUSE_MODE_CAPTURED

func _process(delta: float) -> void:
	if not _target:
		return
	var desired := _target.global_position + Vector3.UP * follow_height
	global_position = desired if reduced_motion else global_position.lerp(desired, 1.0 - exp(-follow_smoothing * delta))
	var look := Input.get_vector("look_left", "look_right", "look_up", "look_down") if InputMap.has_action("look_left") else Vector2.ZERO
	_yaw -= look.x * stick_speed * delta
	_pitch = clampf(_pitch - look.y * stick_speed * delta, min_pitch, max_pitch)
	yaw_pivot.rotation.y = _yaw
	pitch_pivot.rotation.x = _pitch

func recenter() -> void:
	if _target:
		_yaw = _target.rotation.y
	_pitch = deg_to_rad(-10.0)

