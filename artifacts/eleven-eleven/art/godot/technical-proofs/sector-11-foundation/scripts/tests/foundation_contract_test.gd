class_name FoundationContractTest
extends RefCounted

static func run(root: Node) -> Array[String]:
	var failures: Array[String] = []
	for action in ["move_left", "move_right", "move_forward", "move_back", "sprint", "interact", "pause", "camera_recenter"]:
		if not InputMap.has_action(action):
			failures.append("missing input action: %s" % action)
	var echo := root.get_node_or_null("FoundationWorld/EchoPrototype") as EchoMotor
	var camera := root.get_node_or_null("FoundationWorld/ThirdPersonCameraRig") as ThirdPersonCameraRig
	var probe := root.get_node_or_null("FoundationWorld/InteractionProbe") as InteractionProbe
	var room := root.get_node_or_null("FoundationWorld/Sector11Foundation")
	if not echo:
		failures.append("EchoPrototype missing")
	if not camera:
		failures.append("ThirdPersonCameraRig missing")
	if not probe:
		failures.append("InteractionProbe missing")
	if not room:
		failures.append("Sector11Foundation missing")
	var ids: Array[String] = []
	for node in root.get_tree().get_nodes_in_group("foundation_interactable"):
		var interactable := node as FoundationInteractable
		if interactable:
			ids.append(interactable.interaction_id)
	for required in ["opening-clock", "opening-photo", "opening-door"]:
		if required not in ids:
			failures.append("missing interactable: %s" % required)
	var door := root.get_node_or_null("FoundationWorld/Sector11Foundation/opening-door") as FoundationInteractable
	if door and not door.requires_authority:
		failures.append("opening door must require authority")
	var bridge := root.get_node_or_null("SessionBridge") as FoundationSessionBridge
	if bridge:
		var command := {
			"commandId": "idempotency-proof",
			"sessionId": "FOUNDATION_TEST_ONLY",
		}
		var first := bridge.submit(command)
		var second := bridge.submit(command)
		if first != second or first.get("reward") != null or first.get("progression") != null:
			failures.append("authority fixture is not idempotent and reward-free")
	else:
		failures.append("SessionBridge missing")
	return failures

