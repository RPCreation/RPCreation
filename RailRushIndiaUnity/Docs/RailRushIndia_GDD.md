# Rail Rush India — Game Design Document (GDD)

## 1. Game Overview
**Title:** Rail Rush India  
**Genre:** Hybrid Train Simulation + Arcade + Endless Runner  
**Primary Platform:** Android (mid-range devices first)  
**Secondary Platform:** PC (optional), Web (future)  
**Target Session Length:** 3–12 minutes  
**Audience:** Casual and core mobile players in India (ages 10+)

### 1.1 Vision
Create a fast, visually rich train experience grounded in Indian rail aesthetics. The game should combine realistic train behavior (weight, braking distance, momentum) with arcade pacing (quick rewards, mission bursts, high-intensity hazards).

### 1.2 Core Pillars
1. **Indian Identity:** Signals, stations, tea stalls, signboards, train styling.
2. **Accessible Depth:** Simple controls; deep mastery through speed, timing, and route decisions.
3. **Short-Session Fun:** Immediate action with strong progression loop.
4. **Performance First:** Stable 45–60 FPS on common Android devices.

---

## 2. Core Gameplay Loop
**Start → Select Train → Select Mode/Map → Play Run → Collect + Complete Objective → Rewards → Upgrade/Unlock → Repeat**

### 2.1 Player Controls
- **Accelerate** (press/hold)
- **Brake** (press/hold)
- **Horn** (tap)
- **Switch Track** at junctions (left/right)
- Optional: camera toggle (third-person/first-person)

### 2.2 Moment-to-Moment Play
- Maintain safe speed based on visibility and upcoming signal state.
- Read and react to signal lights + junction prompts.
- Avoid collisions with trains and track hazards.
- Collect coins, fuel boosts, and power-ups.
- Reach destination or survive as long as possible depending on mode.

---

## 3. Game Modes

## 3.1 Career Mode
- Structured chapters across environments.
- Mission types:
  - Reach station on time.
  - Carry passenger quota.
  - Deliver cargo without damage.
  - Maintain punctuality with speed limits.
- Star-based completion (1–3 stars):
  - Finish objective
  - On-time bonus
  - Safety bonus (no collisions)

## 3.2 Endless Mode
- Procedural/infinite track segments.
- Difficulty ramps every distance tier (speed pressure, obstacle density, signal complexity).
- Objective: Max distance + score + coin collection.

## 3.3 Time Challenge
- Fixed route, countdown timer.
- Clock extensions at checkpoints.
- Heavy emphasis on optimized acceleration + clean track switching.

---

## 4. Environments (India-based)
Each biome uses modular tiles and station prefabs.

1. **Metro City (Mumbai/Delhi inspired)**
   - Dense buildings, overhead wires, crowded platforms.
   - Hazards: level crossing vehicles, close-signal reaction windows.

2. **Village Plains**
   - Farms, small halts, cattle crossings.
   - Hazards: animals on track, broken fencing.

3. **Mountain Route**
   - Tunnels, bridges, steep gradients.
   - Hazards: fog pockets, falling debris segments.

4. **Desert (Rajasthan inspired)**
   - Sand tones, sparse stations, heat haze.
   - Hazards: reduced traction on sandy track events.

5. **Forest Corridor**
   - Dense greenery, curved visibility-limited track.
   - Hazards: fallen branches, wildlife crossings.

### Local Visual Details
- Hindi/English station signboards.
- Tea stalls, benches, platform vendors.
- Indian railway style signal posts and gantries.

---

## 5. Train Roster & Stats

### 5.1 Train Types
1. Passenger (balanced)
2. Freight (high mass, slow acceleration)
3. Metro (quick acceleration, lower top speed)
4. High-Speed (Vande Bharat inspired; high top speed, higher handling demand)

### 5.2 Core Stats
- **Top Speed**
- **Acceleration**
- **Brake Power**
- **Handling/Stability**
- **Fuel Efficiency** (for fuel-limited mode variants)

### 5.3 Upgrade Tracks (per train)
- Engine (acceleration)
- Brake System (stopping distance)
- Suspension/Stability (reduced sway/camera shake)
- Coin Magnet duration
- Boost efficiency

---

## 6. Hazards, Pickups, and Power-Ups

### 6.1 Hazards
- AI trains on adjacent/same track.
- Broken track section warnings.
- Crossing vehicles.
- Animal crossings.
- Fallen object barriers.

### 6.2 Pickups
- **Coins** (primary soft currency)
- **Fuel Boost** (+fuel/time extension in applicable mode)
- **Power-ups:**
  - Shield (1 hit protection)
  - Coin Magnet
  - Slow-Time (short tactical window)

---

## 7. Economy & Monetization (India-friendly)

### 7.1 Soft Currency
- Coins earned in all runs.
- Bonus multipliers for ad watch and streaks.

### 7.2 Suggested Price Bands (INR)
- Basic train unlock: **₹0 (default free)**
- Advanced train bundle: **₹199 – ₹499**
- Cosmetic skins: **₹49 – ₹149**

### 7.3 Ad Strategy
- Rewarded ads:
  - Continue after crash (1 per run)
  - Double rewards post-run
  - Daily bonus booster
- Interstitials capped and frequency-limited (avoid session fatigue).

### 7.4 Optional IAP
- Coin packs, no mandatory paywall.
- Cosmetic-only premium tracks recommended for fair play.

---

## 8. Progression & Difficulty

### 8.1 Progression
- Unlock maps by chapter completion and player level.
- Unlock train classes via mission milestones or purchase.
- Upgrade caps increase with player level.

### 8.2 Difficulty Scaling
- Dynamic modifiers:
  - Obstacle spawn rate
  - AI train frequency
  - Signal complexity (amber/red patterns)
  - Reaction time at junctions

### 8.3 Meta Systems
- Daily rewards calendar
- Achievements (distance, safety streak, perfect station arrivals)
- Leaderboards (distance, weekly coin score)

---

## 9. Camera & Presentation
- **Default:** Third-person follow camera with damping.
- **Optional:** First-person driver cabin mode.
- **Cinematic transitions:** Start of mission, station arrival, near-miss highlight.
- **Camera shake:** Scales with speed/track quality and mitigated by stability upgrades.

---

## 10. Visual & Audio Direction

### 10.1 Graphics
- Stylized-realistic 3D.
- Mobile-optimized materials and baked lighting where possible.
- Dynamic cycle options:
  - Day
  - Sunset
  - Night
- Weather presets:
  - Rain
  - Fog
  - Clear

### 10.2 VFX
- Wheel motion blur hints
- Smoke/electric spark trails depending on train type
- Junction switch dust/sparks

### 10.3 Audio
- Layered engine loops by speed bands
- Indian-style horn variants
- Rail friction and ambience loops per biome
- Light energetic background soundtrack

---

## 11. UI/UX

### 11.1 Main Menu
- Play
- Garage
- Shop
- Settings
- Events (future)

### 11.2 In-Game HUD
- Speed meter
- Distance counter
- Coin count
- Mission objective + progress
- Fuel/time bar (mode dependent)
- Pause button

### 11.3 UX Principles
- High-contrast readable UI for outdoor mobile play.
- One-thumb accessible control regions.
- Hindi/English localization-ready string table.

---

## 12. Technical Plan (Unity)

### 12.1 Engine Choice
**Unity (C#) + URP** for Android-first performance and faster iteration.

### 12.2 Systems Breakdown
- Train controller (physics-lite with spline/track constraints)
- Track lane graph + junction switching
- Spawn manager (hazards/pickups)
- Mission manager
- Economy manager (coins/rewards/upgrades)
- UI binding layer
- Save system (JSON/local persistent data)

### 12.3 Performance Targets
- 45 FPS minimum on mid-tier devices, 60 FPS on modern devices.
- LOD groups on trains and environment props.
- Occlusion culling + pooled spawners.
- Draw-call budgeting per tile.

---

## 13. Data Model (High-level)
- `TrainData` (ScriptableObject): base stats, upgrade multipliers, unlock state.
- `MissionData`: objective type, targets, reward bands.
- `EnvironmentData`: tile sets, weather weights, biome hazards.
- `PlayerProgress`: coins, unlocked trains, upgrades, achievements.

---

## 14. Live Ops & Retention
- Daily login rewards (7/14/30-day cycles).
- Weekly leaderboard reset.
- Time-limited weather event modifiers.
- Festival cosmetic bundles (non-pay-to-win).

---

## 15. MVP Scope (8–12 weeks)
1. Core driving and switching controls.
2. 2 environments (City + Village).
3. 2 trains (Passenger + Freight).
4. Career missions (10 levels) + Endless mode.
5. Coin economy + basic upgrades.
6. Rewarded ad integration placeholder.
7. Basic leaderboard backend hook interface.

---

## 16. Risk Register
- **Risk:** Track switching feels unfair at high speed.  
  **Mitigation:** Input buffer + clear junction UI telegraph.
- **Risk:** Low-end performance drop in city map.  
  **Mitigation:** Aggressive LOD + baked lighting profile.
- **Risk:** Economy feels grindy.  
  **Mitigation:** Early generous rewards + daily coin sources.

---

## 17. Success Metrics
- D1 retention > 35%
- Avg session > 6 min
- Crash-free rate > 99.2%
- Tutorial completion > 85%
- Rewarded ad opt-in > 25%

