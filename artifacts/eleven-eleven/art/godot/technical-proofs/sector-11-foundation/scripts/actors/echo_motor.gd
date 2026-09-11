class_name EchoMotor
extends CharacterBody3D

@export var walk_speed := 3.4
@export var run_speed := 6.2
@export var acceleration := 18.0
@export var deceleration := 24.0
@export var turn_speed := 11.0
@export var floor_snap := 0.35
@export var gravity_scale := 1.0

var _animation_player: AnimationPlayer
var _active_animation := ""
var _test_input := Vector2.ZERO
var _test_sprint := false
var _use_test_input := false

func _ready() -> void:
	floor_snap_length = floor_snap
	_animation_player = _find_animation_player(self)
	_play_animation("IDLE")

func _physics_process(delta: float) -> void:
	var input_vector := _test_input if _use_test_input else Input.get_vector(
		"move_left", "move_right", "move_forward", "move_back"
	)
	var sprinting := _test_sprint if _use_test_input else Input.is_action_pressed("sprint")
	var camera := get_viewport().get_camera_3d()
	var forward := Vector3.FORWARD
	var right := Vector3.RIGHT
	if camera:
		forward = -camera.global_basis.z
		right = camera.global_basis.x
		forward.y = 0.0
		right.y = 0.0
		forward = forward.normalized()
		right = right.normalized()
	var direction := (right * input_vector.x + forward * -input_vector.y).normalized()
	var target_speed := run_speed if sprinting else walk_speed
	var desired := direction * target_speed
	var rate := acceleration if direction != Vector3.ZERO else deceleration
	velocity.x = move_toward(velocity.x, desired.x, rate * delta)
	velocity.z = move_toward(velocity.z, desired.z, rate * delta)
	if not is_on_floor():
		velocity.y -= ProjectSettings.get_setting("physics/3d/default_gravity", 9.8) * gravity_scale * delta
	else:
		velocity.y = minf(velocity.y, 0.0)
	if direction != Vector3.ZERO:
		rotation.y = lerp_angle(rotation.y, atan2(-direction.x, -direction.z), minf(1.0, turn_speed * delta))
	move_and_slide()
	_update_animation(direction, sprinting)

func set_test_input(input_vector: Vector2, sprinting := false) -> void:
	_use_test_input = true
	_test_input = input_vector.limit_length(1.0)
	_test_sprint = sprinting

func clear_test_input() -> void:
	_use_test_input = false
	_test_input = Vector2.ZERO
	_test_sprint = false

func play_interact() -> void:
	_play_animation("INTERACT")

func current_animation() -> String:
	return _active_animation

func _update_animation(direction: Vector3, sprinting: bool) -> void:
	if direction == Vector3.ZERO and Vector2(velocity.x, velocity.z).length() < 0.15:
		_play_animation("IDLE")
	elif sprinting:
		_play_animation("RUN")
	else:
		_play_animation("WALK")

func _play_animation(requested: String) -> void:
	if _active_animation == requested:
		return
	_active_animation = requested
	if not _animation_player:
		return
	var match_name := ""
	for candidate: StringName in _animation_player.get_animation_list():
		if String(candidate).to_upper().split("|")[-1] == requested:
			match_name = String(candidate)
			break
	if match_name.is_empty():
		return
	_animation_player.play(match_name, 0.16)

func _find_animation_player(node: Node) -> AnimationPlayer:
	if node is AnimationPlayer:
		return node
	for child in node.get_children():
		var found := _find_animation_player(child)
		if found:
			return found
	return null

