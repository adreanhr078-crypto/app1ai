class_name FoundationHUD
extends CanvasLayer

@export var interaction_probe_path: NodePath
@onready var objective: Label = $SafeFrame/Objective
@onready var prompt: Label = $SafeFrame/Prompt
@onready var status: Label = $SafeFrame/Status
var locale := "ar"

func _ready() -> void:
	locale = TranslationServer.get_locale()
	if locale.begins_with("ar"):
		objective.text = "الهدف: افحص ثلاث إشارات داخل القطاع 11"
		objective.layout_direction = Control.LAYOUT_DIRECTION_RTL
		prompt.layout_direction = Control.LAYOUT_DIRECTION_RTL
	else:
		objective.text = "OBJECTIVE: Inspect three signals in Sector 11"
	var probe := get_node_or_null(interaction_probe_path) as InteractionProbe
	if probe:
		probe.focus_changed.connect(_on_focus_changed)
		probe.command_requested.connect(_on_command_requested)

func _on_focus_changed(target: FoundationInteractable) -> void:
	prompt.text = "" if not target else "[E] %s" % target.prompt(locale)

func _on_command_requested(command: Dictionary) -> void:
	status.text = "TEST COMMAND: %s" % command.get("eventId", "")

