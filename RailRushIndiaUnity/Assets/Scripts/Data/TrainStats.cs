using UnityEngine;

namespace RailRushIndia.Data
{
    [CreateAssetMenu(menuName = "RailRushIndia/Train Stats", fileName = "TrainStats")]
    public class TrainStats : ScriptableObject
    {
        [Header("Identity")]
        public string trainId = "passenger_basic";
        public string displayName = "Passenger Express";

        [Header("Base Movement")]
        [Range(20f, 320f)] public float maxSpeedKmph = 120f;
        [Range(1f, 40f)] public float acceleration = 10f;
        [Range(1f, 50f)] public float brakePower = 18f;
        [Range(0.1f, 2.5f)] public float handling = 1f;

        [Header("Upgrade Multipliers Per Level")]
        public float speedPerLevel = 0.03f;
        public float accelerationPerLevel = 0.05f;
        public float brakePerLevel = 0.05f;

        public float GetMaxSpeed(int level) => maxSpeedKmph * (1f + speedPerLevel * level);
        public float GetAcceleration(int level) => acceleration * (1f + accelerationPerLevel * level);
        public float GetBrakePower(int level) => brakePower * (1f + brakePerLevel * level);
    }
}
