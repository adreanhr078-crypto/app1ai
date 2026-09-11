import os
import time
from google import genai
from google.genai import types
from dotenv import load_dotenv

def main():
    load_dotenv(os.path.expanduser("~/.env"))
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY not found in environment or .env file.")
        return

    client = genai.Client(http_options=types.HttpOptions(timeout=1200000), api_key=api_key)
    ref_vid_path = "artifacts/eleven-eleven/art/production/part-1-opening-cinematic-candidate-v3/ref_trimmed.mp4"
    
    # Upload reference
    print(f"Uploading {ref_vid_path}...")
    ref_file = client.files.upload(file=ref_vid_path)
    print(f"Uploaded {ref_file.name}. State: {ref_file.state.name}")
    
    while ref_file.state.name == "PROCESSING":
        time.sleep(2)
        ref_file = client.files.get(name=ref_file.name)
        print(f"State: {ref_file.state.name}")
        
    if ref_file.state.name != "ACTIVE":
        print(f"File failed: {ref_file.state.name}")
        return

    # Turn 1
    prompt1 = "[# References <VIDEO_REF_0>@Video1] A premium anime cinematic shot of Echo walking towards a futuristic high-tech laboratory door. Obsidian structure, neon cyan and pale ivory accents. Use Video1 as a style reference. No text, no UI."
    print("Generating Turn 1 (0-10s)...")
    res1 = client.interactions.create(
        model="gemini-omni-1.1-flash",
        input=[
            {"type": "video", "uri": ref_file.uri, "mime_type": "video/mp4"},
            {"type": "text", "text": prompt1}
        ],
        response_format={"type": "video", "delivery": "uri", "resolution": "1080p", "aspect_ratio": "16:9"}
    )
    print(f"Turn 1 Interaction ID: {res1.id}")
    
    # Download Turn 1 for debug
    import requests
    r1 = requests.get(res1.output_video.uri, stream=True)
    with open("artifacts/eleven-eleven/art/production/part-1-opening-cinematic-candidate-v3/turn1.mp4", "wb") as f:
        for chunk in r1.iter_content(chunk_size=1024*1024):
            f.write(chunk)
            
    # Turn 2
    prompt2 = "Extend this video. The scene continues. Echo enters the lab and steps into a neural-transfer chair. Close up of his face showing intense but non-gory strain. No text."
    print("Generating Turn 2 (10-20s)...")
    res2 = client.interactions.create(
        model="gemini-omni-1.1-flash",
        previous_interaction_id=res1.id,
        input=[{"type": "text", "text": prompt2}],
        response_format={"type": "video", "delivery": "uri"}
    )
    print(f"Turn 2 Interaction ID: {res2.id}")
    
    r2 = requests.get(res2.output_video.uri, stream=True)
    with open("artifacts/eleven-eleven/art/production/part-1-opening-cinematic-candidate-v3/turn2.mp4", "wb") as f:
        for chunk in r2.iter_content(chunk_size=1024*1024):
            f.write(chunk)

    # Turn 3
    prompt3 = "Extend this video. The scene continues. A digital clock rapidly glitches and stops exactly at 11:11. The laboratory environment dissolves into digital fractures and violet memory corruption. No text."
    print("Generating Turn 3 (20-30s)...")
    res3 = client.interactions.create(
        model="gemini-omni-1.1-flash",
        previous_interaction_id=res2.id,
        input=[{"type": "text", "text": prompt3}],
        response_format={"type": "video", "delivery": "uri"}
    )
    print(f"Turn 3 Interaction ID: {res3.id}")
    
    r3 = requests.get(res3.output_video.uri, stream=True)
    with open("artifacts/eleven-eleven/art/production/part-1-opening-cinematic-candidate-v3/turn3.mp4", "wb") as f:
        for chunk in r3.iter_content(chunk_size=1024*1024):
            f.write(chunk)

    # Turn 4
    prompt4 = "Extend this video. The scene continues. Echo wakes up inside the digital 11:11 system. A clean, premium anime environment. He opens his eyes, looking at his surroundings. A hard, clean cut to a playable escape room view in third-person perspective. No text."
    print("Generating Turn 4 (30-40s)...")
    res4 = client.interactions.create(
        model="gemini-omni-1.1-flash",
        previous_interaction_id=res3.id,
        input=[{"type": "text", "text": prompt4}],
        response_format={"type": "video", "delivery": "uri"}
    )
    print(f"Turn 4 Interaction ID: {res4.id}")
    
    r4 = requests.get(res4.output_video.uri, stream=True)
    with open("artifacts/eleven-eleven/art/production/part-1-opening-cinematic-candidate-v3/master_original.mp4", "wb") as f:
        for chunk in r4.iter_content(chunk_size=1024*1024):
            f.write(chunk)

    print("Generation complete!")

if __name__ == '__main__':
    main()
