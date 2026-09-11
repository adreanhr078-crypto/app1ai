"""Build the provisional animated Echo used by the opening-room vertical slice.

The asset stays deliberately bounded: one human rig, rigid bone-bound meshes,
five authored clips, no textures, and no gameplay authority.
"""

import math
import os
import sys

import bpy
from mathutils import Vector


FPS = 24


def args():
    values = sys.argv[sys.argv.index("--") + 1 :] if "--" in sys.argv else []
    if not values:
        raise RuntimeError("Expected output .glb path")
    return os.path.abspath(values[0])


def material(name, color, roughness=0.72, metallic=0.0, emission=None):
    mat = bpy.data.materials.new(name)
    mat.diffuse_color = color
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    bsdf.inputs["Base Color"].default_value = color
    bsdf.inputs["Roughness"].default_value = roughness
    bsdf.inputs["Metallic"].default_value = metallic
    if "Specular IOR Level" in bsdf.inputs:
        bsdf.inputs["Specular IOR Level"].default_value = 0.22
    if emission:
        bsdf.inputs["Emission Color"].default_value = emission
        bsdf.inputs["Emission Strength"].default_value = 2.4
    return mat


def smooth_and_bevel(obj, bevel=0.0):
    if obj.type == "MESH":
        for polygon in obj.data.polygons:
            polygon.use_smooth = True
    if bevel > 0:
        modifier = obj.modifiers.new("Soft anime silhouette", "BEVEL")
        modifier.width = bevel
        modifier.segments = 3
        bpy.context.view_layer.objects.active = obj
        bpy.ops.object.modifier_apply(modifier=modifier.name)


def bind_to_bone(obj, rig, bone_name):
    world = obj.matrix_world.copy()
    obj.parent = rig
    obj.parent_type = "BONE"
    obj.parent_bone = bone_name
    obj.matrix_world = world


def uv_part(name, location, scale, mat, rig, bone, segments=24, rings=16):
    bpy.ops.mesh.primitive_uv_sphere_add(
        segments=segments,
        ring_count=rings,
        location=location,
    )
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)
    smooth_and_bevel(obj)
    bind_to_bone(obj, rig, bone)
    return obj


def rounded_box(name, location, scale, mat, rig, bone, bevel=0.06):
    bpy.ops.mesh.primitive_cube_add(size=1, location=location)
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)
    smooth_and_bevel(obj, bevel)
    bind_to_bone(obj, rig, bone)
    return obj


def cone_part(name, location, scale, rotation, mat, rig, bone):
    bpy.ops.mesh.primitive_cone_add(
        vertices=16,
        radius1=0.11,
        radius2=0.018,
        depth=0.44,
        location=location,
        rotation=rotation,
    )
    obj = bpy.context.object
    obj.name = name
    obj.scale = scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    obj.data.materials.append(mat)
    smooth_and_bevel(obj)
    bind_to_bone(obj, rig, bone)
    return obj


def add_bone(edit_bones, name, head, tail, parent=None):
    bone = edit_bones.new(name)
    bone.head = head
    bone.tail = tail
    if parent:
        bone.parent = edit_bones[parent]
    return bone


def build_rig():
    bpy.ops.object.armature_add(enter_editmode=True, location=(0, 0, 0))
    rig = bpy.context.object
    rig.name = "Echo_Rig"
    edit = rig.data.edit_bones
    edit.remove(edit[0])

    add_bone(edit, "root", (0, 0, 0), (0, 0, 0.18))
    add_bone(edit, "hips", (0, 0, 0.78), (0, 0, 0.98), "root")
    add_bone(edit, "spine_01", (0, 0, 0.98), (0, 0, 1.20), "hips")
    add_bone(edit, "spine_02", (0, 0, 1.20), (0, 0, 1.46), "spine_01")
    add_bone(edit, "neck", (0, 0, 1.46), (0, 0, 1.56), "spine_02")
    add_bone(edit, "head", (0, 0, 1.56), (0, 0, 1.79), "neck")

    for side, sign in (("L", 1), ("R", -1)):
        add_bone(edit, f"upper_arm.{side}", (0.19 * sign, 0, 1.40), (0.50 * sign, 0, 1.23), "spine_02")
        add_bone(edit, f"lower_arm.{side}", (0.50 * sign, 0, 1.23), (0.66 * sign, 0, 0.94), f"upper_arm.{side}")
        add_bone(edit, f"hand.{side}", (0.66 * sign, 0, 0.94), (0.72 * sign, -0.01, 0.82), f"lower_arm.{side}")
        add_bone(edit, f"thigh.{side}", (0.12 * sign, 0, 0.80), (0.14 * sign, 0, 0.43), "hips")
        add_bone(edit, f"shin.{side}", (0.14 * sign, 0, 0.43), (0.13 * sign, 0, 0.12), f"thigh.{side}")
        add_bone(edit, f"foot.{side}", (0.13 * sign, 0, 0.12), (0.13 * sign, -0.17, 0.06), f"shin.{side}")
        add_bone(edit, f"toe.{side}", (0.13 * sign, -0.17, 0.06), (0.13 * sign, -0.29, 0.055), f"foot.{side}")

    bpy.ops.object.mode_set(mode="OBJECT")
    return rig


def build_meshes(rig):
    skin = material("Echo_Skin_Warm", (0.73, 0.49, 0.38, 1))
    skin_shadow = material("Echo_Skin_Shadow", (0.36, 0.20, 0.18, 1))
    hair = material("Echo_Hair_Obsidian", (0.012, 0.016, 0.025, 1), roughness=0.48)
    jacket = material("Echo_Jacket_Obsidian", (0.018, 0.026, 0.040, 1), roughness=0.62, metallic=0.08)
    jacket_edge = material("Echo_Jacket_Edge", (0.055, 0.095, 0.125, 1), roughness=0.5, metallic=0.12)
    shirt = material("Echo_Shirt_Ivory", (0.68, 0.67, 0.60, 1), roughness=0.86)
    shoe = material("Echo_Shoes", (0.02, 0.024, 0.03, 1), roughness=0.55)
    eye = material("Echo_Eyes_Cyan", (0.02, 0.14, 0.18, 1), roughness=0.2, emission=(0.08, 0.72, 0.86, 1))
    tattoo = material("Echo_EX011_Tattoo", (0.02, 0.32, 0.38, 1), roughness=0.5, emission=(0.02, 0.34, 0.40, 1))

    rounded_box("Echo_Jacket_Torso", (0, 0.015, 1.22), (0.50, 0.24, 0.57), jacket, rig, "spine_02", 0.12)
    rounded_box("Echo_Shirt_Insert", (0, -0.232, 1.29), (0.22, 0.025, 0.36), shirt, rig, "spine_02", 0.02)
    rounded_box("Echo_Jacket_Hem", (0, 0.02, 0.91), (0.45, 0.25, 0.14), jacket_edge, rig, "hips", 0.055)
    rounded_box("Echo_Hips", (0, 0, 0.78), (0.34, 0.22, 0.18), jacket, rig, "hips", 0.07)
    uv_part("Echo_Neck", (0, 0, 1.50), (0.12, 0.11, 0.15), skin, rig, "neck")
    uv_part("Echo_Head", (0, -0.01, 1.68), (0.245, 0.215, 0.285), skin, rig, "head", 32, 20)
    uv_part("Echo_Ear_L", (0.235, -0.01, 1.68), (0.035, 0.025, 0.07), skin_shadow, rig, "head", 16, 10)
    uv_part("Echo_Ear_R", (-0.235, -0.01, 1.68), (0.035, 0.025, 0.07), skin_shadow, rig, "head", 16, 10)
    uv_part("Echo_Eye_L", (0.083, -0.205, 1.71), (0.045, 0.018, 0.026), eye, rig, "head", 16, 10)
    uv_part("Echo_Eye_R", (-0.083, -0.205, 1.71), (0.045, 0.018, 0.026), eye, rig, "head", 16, 10)
    rounded_box("Echo_Hair_Cap", (0, 0.015, 1.86), (0.255, 0.22, 0.17), hair, rig, "head", 0.09)

    hair_spikes = [
        ((0.17, -0.02, 1.98), (0.8, 0.8, 1.15), (0.20, 0.25, -0.35)),
        ((0.02, -0.08, 2.02), (0.9, 0.8, 1.25), (-0.15, 0.05, 0.08)),
        ((-0.14, -0.02, 1.99), (0.85, 0.8, 1.15), (-0.18, -0.25, 0.26)),
        ((0.22, 0.07, 1.91), (0.75, 0.7, 1.0), (0.28, 0.22, -0.48)),
        ((-0.22, 0.06, 1.90), (0.75, 0.7, 1.0), (-0.28, -0.22, 0.48)),
    ]
    for index, (loc, scale, rotation) in enumerate(hair_spikes):
        cone_part(f"Echo_Hair_Spike_{index + 1:02d}", loc, scale, rotation, hair, rig, "head")

    # Direct-skin Canon identifier binding. The compact geometric mark remains
    # separate from clothing and can later receive the final approved decal.
    rounded_box("SkinTattoo_EX011", (0.118, -0.088, 1.51), (0.038, 0.009, 0.055), tattoo, rig, "neck", 0.005)

    for side, sign in (("L", 1), ("R", -1)):
        uv_part(f"Echo_UpperArm_{side}", (0.36 * sign, 0, 1.27), (0.13, 0.14, 0.33), jacket, rig, f"upper_arm.{side}")
        uv_part(f"Echo_LowerArm_{side}", (0.58 * sign, -0.005, 1.02), (0.105, 0.115, 0.30), jacket_edge, rig, f"lower_arm.{side}")
        uv_part(f"Echo_Hand_{side}", (0.69 * sign, -0.012, 0.84), (0.09, 0.085, 0.13), skin, rig, f"hand.{side}", 20, 12)
        uv_part(f"Echo_Thigh_{side}", (0.12 * sign, 0.01, 0.59), (0.16, 0.18, 0.35), jacket, rig, f"thigh.{side}")
        uv_part(f"Echo_Shin_{side}", (0.13 * sign, 0.01, 0.27), (0.13, 0.15, 0.30), jacket_edge, rig, f"shin.{side}")
        rounded_box(f"Echo_Foot_{side}", (0.13 * sign, -0.105, 0.07), (0.15, 0.28, 0.11), shoe, rig, f"foot.{side}", 0.05)


def set_pose(rig, frame, values):
    for name, rotation in values.items():
        bone = rig.pose.bones[name]
        bone.rotation_mode = "XYZ"
        bone.rotation_euler = rotation
        bone.keyframe_insert("rotation_euler", frame=frame, group=name)


def action(rig, name, frame_end, poses):
    clip = bpy.data.actions.new(name)
    clip.use_fake_user = True
    rig.animation_data_create()
    rig.animation_data.action = clip
    for frame, values in poses:
        set_pose(rig, frame, values)
    clip.frame_start = 1
    clip.frame_end = frame_end
    return clip


def build_actions(rig):
    idle = action(rig, "IDLE", 60, [
        (1, {"spine_02": (0.015, 0, 0), "head": (-0.01, 0, 0), "upper_arm.L": (0.03, 0, 0.05), "upper_arm.R": (0.03, 0, -0.05)}),
        (30, {"spine_02": (-0.025, 0, 0), "head": (0.018, 0, -0.015), "upper_arm.L": (-0.01, 0, 0.035), "upper_arm.R": (-0.01, 0, -0.035)}),
        (60, {"spine_02": (0.015, 0, 0), "head": (-0.01, 0, 0), "upper_arm.L": (0.03, 0, 0.05), "upper_arm.R": (0.03, 0, -0.05)}),
    ])
    walk_poses = []
    for frame, phase in ((1, 0), (7, 1), (13, 2), (19, 3), (25, 4)):
        swing = math.sin(phase * math.pi / 2) * 0.52
        walk_poses.append((frame, {
            "spine_02": (0.02, 0, -swing * 0.035),
            "upper_arm.L": (-swing * 0.72, 0, 0.05),
            "upper_arm.R": (swing * 0.72, 0, -0.05),
            "thigh.L": (swing, 0, 0),
            "thigh.R": (-swing, 0, 0),
            "shin.L": (max(0, -swing) * 0.72, 0, 0),
            "shin.R": (max(0, swing) * 0.72, 0, 0),
        }))
    walk = action(rig, "WALK", 25, walk_poses)
    run_poses = []
    for frame, phase in ((1, 0), (5, 1), (10, 2), (14, 3), (19, 4)):
        swing = math.sin(phase * math.pi / 2) * 0.88
        run_poses.append((frame, {
            "spine_01": (0.18, 0, 0),
            "upper_arm.L": (-swing * 0.92, 0, 0.06),
            "upper_arm.R": (swing * 0.92, 0, -0.06),
            "lower_arm.L": (-0.35 + abs(swing) * 0.18, 0, 0),
            "lower_arm.R": (-0.35 + abs(swing) * 0.18, 0, 0),
            "thigh.L": (swing, 0, 0),
            "thigh.R": (-swing, 0, 0),
            "shin.L": (max(0, -swing) * 1.05, 0, 0),
            "shin.R": (max(0, swing) * 1.05, 0, 0),
        }))
    run = action(rig, "RUN", 19, run_poses)
    interact = action(rig, "INTERACT", 38, [
        (1, {"spine_02": (0, 0, 0), "head": (0, 0, 0), "upper_arm.R": (0, 0, -0.05), "lower_arm.R": (0, 0, 0)}),
        (15, {"spine_02": (0.07, 0, -0.08), "head": (-0.07, 0, 0.11), "upper_arm.R": (-0.95, -0.12, -0.20), "lower_arm.R": (-0.52, 0.05, 0)}),
        (27, {"spine_02": (0.04, 0, -0.04), "head": (-0.04, 0, 0.06), "upper_arm.R": (-0.72, -0.06, -0.12), "lower_arm.R": (-0.30, 0.02, 0)}),
        (38, {"spine_02": (0, 0, 0), "head": (0, 0, 0), "upper_arm.R": (0, 0, -0.05), "lower_arm.R": (0, 0, 0)}),
    ])
    wake = action(rig, "WAKEUP", 72, [
        (1, {"hips": (1.25, 0, 0), "spine_01": (-0.42, 0, 0), "spine_02": (-0.32, 0, 0), "head": (0.38, 0, 0), "upper_arm.L": (0.45, 0, 0.10), "upper_arm.R": (0.45, 0, -0.10)}),
        (28, {"hips": (0.72, 0, 0), "spine_01": (-0.18, 0, 0), "spine_02": (-0.12, 0, 0), "head": (0.15, 0, 0.08), "upper_arm.L": (0.20, 0, 0.08), "upper_arm.R": (0.20, 0, -0.08)}),
        (50, {"hips": (0.18, 0, 0), "spine_01": (0.06, 0, 0), "spine_02": (0.03, 0, 0), "head": (-0.08, 0, -0.05), "upper_arm.L": (0.04, 0, 0.05), "upper_arm.R": (0.04, 0, -0.05)}),
        (72, {"hips": (0, 0, 0), "spine_01": (0, 0, 0), "spine_02": (0, 0, 0), "head": (0, 0, 0), "upper_arm.L": (0.02, 0, 0.05), "upper_arm.R": (0.02, 0, -0.05)}),
    ])
    rig.animation_data.action = idle
    return [idle, walk, run, interact, wake]


def main():
    output = args()
    os.makedirs(os.path.dirname(output), exist_ok=True)
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.context.scene.render.fps = FPS
    rig = build_rig()
    build_meshes(rig)
    build_actions(rig)

    bpy.ops.object.select_all(action="SELECT")
    bpy.ops.export_scene.gltf(
        filepath=output,
        export_format="GLB",
        use_selection=True,
        export_animations=True,
        export_skins=True,
        export_morph=False,
        export_materials="EXPORT",
        export_cameras=False,
        export_lights=False,
        export_yup=True,
        export_apply=False,
    )
    bpy.ops.wm.save_as_mainfile(filepath=os.path.splitext(output)[0] + ".blend")
    print(f"ECHO_VERTICAL_SLICE_V2={output}")


if __name__ == "__main__":
    main()
