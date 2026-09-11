class_name FoundationFrameProbe
extends Node

var frame_count := 0
var elapsed := 0.0
var worst_frame_ms := 0.0

func _process(delta: float) -> void:
	frame_count += 1
	elapsed += delta
	worst_frame_ms = maxf(worst_frame_ms, delta * 1000.0)

func snapshot() -> Dictionary:
	return {
		"frames": frame_count,
		"elapsedSeconds": elapsed,
		"averageFps": frame_count / elapsed if elapsed > 0.0 else 0.0,
		"worstFrameMs": worst_frame_ms,
		"renderer": RenderingServer.get_video_adapter_name(),
	}

