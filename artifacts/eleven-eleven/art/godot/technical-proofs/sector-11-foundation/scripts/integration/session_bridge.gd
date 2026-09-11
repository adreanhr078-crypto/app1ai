class_name FoundationSessionBridge
extends Node

signal command_completed(command_id: String, result: Dictionary)

@export var test_fixture_enabled := true
var _handled: Dictionary = {}

func submit(command: Dictionary) -> Dictionary:
	if not test_fixture_enabled:
		return {"status": "BLOCKED", "reason": "NO_AUTHORITATIVE_SESSION"}
	if command.get("sessionId") != "FOUNDATION_TEST_ONLY":
		return {"status": "BLOCKED", "reason": "TEST_FIXTURE_SCOPE"}
	var command_id := String(command.get("commandId", ""))
	if command_id.is_empty():
		return {"status": "REJECTED", "reason": "MISSING_COMMAND_ID"}
	if _handled.has(command_id):
		return _handled[command_id]
	var result := {
		"status": "TEST_ONLY_ACCEPTED",
		"commandId": command_id,
		"authority": "FIXTURE_NOT_PRODUCTION",
		"reward": null,
		"progression": null,
	}
	_handled[command_id] = result
	command_completed.emit(command_id, result)
	return result

