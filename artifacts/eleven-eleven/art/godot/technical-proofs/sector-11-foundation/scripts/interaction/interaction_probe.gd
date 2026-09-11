class_name InteractionProbe
extends Node3D

signal focus_changed(target: FoundationInteractable)
signal command_requested(command: Dictionary)

@export var actor_path: NodePath
@export var max_distance := 2.6
@export var facing_threshold := 0.12
var focused: FoundationInteractable

func _physics_process(_delta: float) -> void:
	var next := _best_candidate()
	if next != focused:
		focused = next
		focus_changed.emit(focused)
	if focused and Input.is_action_just_pressed("interact"):
		request_focused()

func request_focused() -> Dictionary:
	if not focused:
		return {}
	var command := focused.request_interaction()
	command_requested.emit(command)
	var actor := get_node_or_null(actor_path) as EchoMotor
	if actor:
		actor.play_interact()
	return command

func _best_candidate() -> FoundationInteractable:
	var actor := get_node_or_null(actor_path) as Node3D
	if not actor:
		return null
	var best: FoundationInteractable
	var best_score := -INF
	var forward := -actor.global_basis.z
	for node in get_tree().get_nodes_in_group("foundation_interactable"):
		var candidate := node as FoundationInteractable
		if not candidate:
			continue
		var offset := candidate.global_position - actor.global_position
		var distance := offset.length()
		if distance <= 0.001 or distance > max_distance:
			continue
		var facing := forward.dot(offset / distance)
		if facing < facing_threshold:
			continue
		var score := facing * 2.0 - distance / max_distance
		if score > best_score:
			best = candidate
			best_score = score
	return best

