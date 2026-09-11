extends Node

const FoundationInput = preload("res://config/input_map.gd")
const FoundationTests = preload("res://scripts/tests/foundation_contract_test.gd")

func _ready() -> void:
	FoundationInput.ensure_actions()
	if "--foundation-tests" in OS.get_cmdline_user_args():
		await get_tree().process_frame
		await get_tree().physics_frame
		var failures: Array[String] = FoundationTests.run(self)
		if failures.is_empty():
			print("FOUNDATION_TESTS_PASS")
			get_tree().quit(0)
		else:
			for failure in failures:
				push_error("FOUNDATION_TEST_FAILURE: %s" % failure)
			get_tree().quit(1)
	elif DisplayServer.get_name() == "headless":
		await get_tree().process_frame
		print("FOUNDATION_SMOKE_OK")
		get_tree().quit(0)

