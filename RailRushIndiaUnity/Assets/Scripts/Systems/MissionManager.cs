using UnityEngine;
using UnityEngine.Events;

namespace RailRushIndia.Systems
{
    public enum MissionType
    {
        ReachStation,
        CarryPassengers,
        TransportCargo,
        DistanceRun
    }

    [System.Serializable]
    public struct MissionDefinition
    {
        public MissionType missionType;
        public int targetValue;
        public int rewardCoins;
        public float timeLimit;
    }

    public class MissionManager : MonoBehaviour
    {
        [SerializeField] private MissionDefinition currentMission;
        [SerializeField] private int progress;
        [SerializeField] private float timer;
        [SerializeField] private bool missionActive;

        [Header("Events")]
        [SerializeField] private UnityEvent<int, int> onProgressChanged;
        [SerializeField] private UnityEvent<float> onTimerChanged;
        [SerializeField] private UnityEvent<int> onMissionCompleted;
        [SerializeField] private UnityEvent onMissionFailed;

        private void OnEnable()
        {
            StartMission(currentMission);
        }

        private void Update()
        {
            if (!missionActive || currentMission.timeLimit <= 0f)
            {
                return;
            }

            timer -= Time.deltaTime;
            onTimerChanged?.Invoke(Mathf.Max(timer, 0f));

            if (timer <= 0f)
            {
                missionActive = false;
                onMissionFailed?.Invoke();
            }
        }

        public void StartMission(MissionDefinition definition)
        {
            currentMission = definition;
            progress = 0;
            timer = currentMission.timeLimit;
            missionActive = true;
            onProgressChanged?.Invoke(progress, currentMission.targetValue);
        }

        public void AddProgress(int amount)
        {
            if (!missionActive)
            {
                return;
            }

            progress = Mathf.Min(progress + amount, currentMission.targetValue);
            onProgressChanged?.Invoke(progress, currentMission.targetValue);

            if (progress >= currentMission.targetValue)
            {
                missionActive = false;
                onMissionCompleted?.Invoke(currentMission.rewardCoins);
            }
        }
    }
}
