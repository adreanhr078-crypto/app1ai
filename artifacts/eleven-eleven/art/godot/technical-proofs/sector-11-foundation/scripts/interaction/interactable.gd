class_name FoundationInteractable
extends Area3D

signal requested(command: Dictionary)

@export var interaction_id := ""
@export var prompt_ar := "افحص"
@export var prompt_en := "Inspect"
@export var requires_authority := false

func _ready() -> void:
	add_to_group("foundation_interactable")
	collision_layer = 4
	collision_mask = 0

func prompt(locale: String) -> String:
	return prompt_ar if locale.begins_with("ar") else prompt_en

func request_interaction(session_id := "FOUNDATION_TEST_ONLY") -> Dictionary:
	var command := {
		"schemaVersion": 1,
		"commandId": "%s-%s" % [interaction_id, Time.get_ticks_usec()],
		"sessionId": session_id,
		"roomId": "sector-11-foundation",
		"eventId": "request_%s" % interaction_id.replace("opening-", ""),
		"requiresAuthority": requires_authority,
	}
	requested.emit(command)
	return command

