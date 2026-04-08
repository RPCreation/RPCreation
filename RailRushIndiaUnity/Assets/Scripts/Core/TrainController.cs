using RailRushIndia.Data;
using UnityEngine;

namespace RailRushIndia.Core
{
    /// <summary>
    /// Arcade + simulation-lite train movement constrained to forward track motion.
    /// </summary>
    public class TrainController : MonoBehaviour
    {
        [SerializeField] private TrainStats stats;
        [SerializeField] private int upgradeLevel;
        [SerializeField] private float hornCooldown = 2f;
        [SerializeField] private AudioSource hornAudio;

        [Header("Runtime")]
        [SerializeField] private float currentSpeedKmph;
        [SerializeField] private bool isCrashed;

        public float CurrentSpeedKmph => currentSpeedKmph;
        public bool IsCrashed => isCrashed;

        private float hornTimer;
        private float throttleInput;
        private float brakeInput;

        private void Update()
        {
            if (isCrashed || stats == null)
            {
                currentSpeedKmph = Mathf.MoveTowards(currentSpeedKmph, 0f, 20f * Time.deltaTime);
                return;
            }

            HandleSpeed();
            MoveForward();
            hornTimer -= Time.deltaTime;
        }

        public void SetThrottle(float normalized)
        {
            throttleInput = Mathf.Clamp01(normalized);
        }

        public void SetBrake(float normalized)
        {
            brakeInput = Mathf.Clamp01(normalized);
        }

        public void TriggerHorn()
        {
            if (hornTimer > 0f || hornAudio == null)
            {
                return;
            }

            hornAudio.Play();
            hornTimer = hornCooldown;
        }

        public void CrashTrain()
        {
            isCrashed = true;
        }

        private void HandleSpeed()
        {
            float maxSpeed = stats.GetMaxSpeed(upgradeLevel);
            float acceleration = stats.GetAcceleration(upgradeLevel) * throttleInput;
            float braking = stats.GetBrakePower(upgradeLevel) * brakeInput;

            currentSpeedKmph += acceleration * Time.deltaTime * 10f;
            currentSpeedKmph -= braking * Time.deltaTime * 12f;
            currentSpeedKmph = Mathf.Clamp(currentSpeedKmph, 0f, maxSpeed);
        }

        private void MoveForward()
        {
            float speedMps = currentSpeedKmph / 3.6f;
            transform.position += transform.forward * speedMps * Time.deltaTime;
        }
    }
}
