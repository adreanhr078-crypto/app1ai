"""Render deterministic review angles for a character GLB."""

import argparse
import math
import os
import sys

import bpy
from mathutils import Vector


def script_args():
    return sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []


def parse_args():
    parser = argparse.ArgumentParser()
    parser.add_argument("--input", required=True)
    parser.add_argument("--output-dir", required=True)
    return parser.parse_args(script_args())


def point_camera(camera, target):
    camera.rotation_euler = (Vector(target) - camera.location).to_track_quat("-Z", "Y").to_euler()


def main():
    args = parse_args()
    source = os.path.abspath(args.input)
    output = os.path.abspath(args.output_dir)
    os.makedirs(output, exist_ok=True)

    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=source)
    scene = bpy.context.scene
    scene.render.engine = "BLENDER_EEVEE"
    scene.render.resolution_x = 768
    scene.render.resolution_y = 768
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.film_transparent = False
    scene.render.fps = 24
    if scene.world is None:
        scene.world = bpy.data.worlds.new("ReviewWorld")
    scene.world.color = (0.002, 0.005, 0.009)

    rig = next(obj for obj in scene.objects if obj.type == "ARMATURE")
    if rig.animation_data:
        idle = bpy.data.actions.get("IDLE")
        if idle:
            rig.animation_data.action = idle
    scene.frame_set(18)

    bpy.ops.mesh.primitive_plane_add(size=20, location=(0, 0, -0.012))
    floor = bpy.context.object
    mat = bpy.data.materials.new("ReviewFloor")
    mat.diffuse_color = (0.008, 0.017, 0.025, 1)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = mat.diffuse_color
    bsdf.inputs["Roughness"].default_value = 0.38
    bsdf.inputs["Metallic"].default_value = 0.24
    floor.data.materials.append(mat)

    bpy.ops.object.camera_add(location=(2.8, -5.2, 2.25))
    camera = bpy.context.object
    camera.data.lens = 58
    point_camera(camera, (0, 0, 1.08))
    scene.camera = camera

    lights = [
        ((-2.8, -3.4, 4.4), (0.38, 0.82, 1.0), 1050, 3.2),
        ((3.0, -1.2, 3.1), (0.55, 0.24, 0.9), 720, 2.6),
        ((0.4, 2.4, 3.8), (0.95, 0.78, 0.56), 880, 2.2),
    ]
    for index, (location, color, energy, size) in enumerate(lights):
        bpy.ops.object.light_add(type="AREA", location=location)
        light = bpy.context.object
        light.name = f"ReviewLight_{index + 1}"
        light.data.energy = energy
        light.data.color = color
        light.data.shape = "DISK"
        light.data.size = size
        point_camera(light, (0, 0, 1.1))

    for name, angle in (("front", 0), ("three-quarter", math.radians(-38)), ("side", math.radians(-90)), ("back", math.pi)):
        rig.rotation_euler.z = angle
        scene.render.filepath = os.path.join(output, f"echo-v2-{name}.png")
        bpy.ops.render.render(write_still=True)
        print(f"RENDERED={scene.render.filepath}")


if __name__ == "__main__":
    main()
