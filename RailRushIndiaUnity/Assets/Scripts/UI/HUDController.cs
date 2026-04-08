using RailRushIndia.Core;
using RailRushIndia.Systems;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace RailRushIndia.UI
{
    public class HUDController : MonoBehaviour
    {
        [SerializeField] private TrainController trainController;
        [SerializeField] private MissionManager missionManager;

        [Header("Labels")]
        [SerializeField] private TMP_Text speedText;
        [SerializeField] private TMP_Text distanceText;
        [SerializeField] private TMP_Text coinsText;
        [SerializeField] private TMP_Text missionText;
        [SerializeField] private TMP_Text timerText;
        [SerializeField] private Slider speedSlider;

        private int missionTarget;

        private void OnEnable()
        {
            if (missionManager != null)
            {
                missionManager.StartMission(new MissionDefinition
                {
                    missionType = MissionType.ReachStation,
                    targetValue = 5,
                    rewardCoins = 100,
                    timeLimit = 180f
                });
            }
        }

        private void Update()
        {
            if (trainController == null || GameManager.Instance == null)
            {
                return;
            }

            float speed = trainController.CurrentSpeedKmph;
            speedText.text = $"{speed:0} km/h";
            distanceText.text = $"{GameManager.Instance.DistanceMeters:0} m";
            coinsText.text = GameManager.Instance.Coins.ToString();

            if (speedSlider != null)
            {
                speedSlider.value = Mathf.InverseLerp(0f, 250f, speed);
            }
        }

        public void OnMissionProgress(int progress, int target)
        {
            missionTarget = target;
            missionText.text = $"Mission: {progress}/{target}";
        }

        public void OnTimerChanged(float seconds)
        {
            int mins = Mathf.FloorToInt(seconds / 60f);
            int secs = Mathf.FloorToInt(seconds % 60f);
            timerText.text = $"{mins:00}:{secs:00}";
        }

        public void OnMissionCompleted(int rewardCoins)
        {
            GameManager.Instance.AddCoins(rewardCoins);
            missionText.text = $"Mission Complete! +{rewardCoins}";
        }
    }
}
