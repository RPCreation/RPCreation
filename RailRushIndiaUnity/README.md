# Rail Rush India (Unity Starter)

This repository section contains a starter Unity architecture for **Rail Rush India**, an Android-first 3D train simulation + arcade game.

## Suggested Unity Version
- Unity 2022.3 LTS or newer (URP)

## Folder Structure
- `Assets/Scenes` — main menu, garage, gameplay scenes
- `Assets/Scripts/Core` — train motion and player input
- `Assets/Scripts/Gameplay` — collisions, track switching, pickups
- `Assets/Scripts/Systems` — mission/game/economy controllers
- `Assets/Scripts/UI` — HUD binding and updates
- `Assets/Scripts/Data` — ScriptableObject configs
- `Assets/Prefabs` — trains, hazards, stations, pickups
- `Assets/Art` — environment assets by biome
- `Assets/Audio` — SFX and BGM
- `Docs` — GDD and planning docs

## Core Scripts Included
1. `TrainController` — speed, brake, horn, forward movement
2. `PlayerInputController` — keyboard/mobile input bridge
3. `TrackSwitchController` — lane switching at junctions
4. `CollisionHandler` — crash and pickup logic
5. `MissionManager` — mission progress and completion/failure
6. `GameManager` — global run state and distance/coins
7. `HUDController` — speed/distance/coin/mission HUD update
8. `TrainStats` — train stat data model with upgrade scaling

## Quick Setup Steps
1. Create a `Gameplay` scene with a train prefab and track meshes.
2. Add `TrainController`, `TrackSwitchController`, `CollisionHandler`, and `PlayerInputController` to the train root.
3. Create a `GameManager` object in scene and assign train reference.
4. Create UI Canvas with TMP labels and bind to `HUDController`.
5. Create `TrainStats` asset and assign it in `TrainController`.
6. Define layers/tags: `Obstacle`, `Train`, `Coin`, `Fuel`.

## Android Optimization Checklist
- Enable URP renderer with mobile quality profile.
- Use LOD Groups for train/environment meshes.
- Use object pooling for hazards and pickups.
- Keep shadow cascades low or disabled on low-end profile.
- Bake static lighting for stations and props.

