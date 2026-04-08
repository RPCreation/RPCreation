using System.Collections;
using UnityEngine;

namespace RailRushIndia.Gameplay
{
    /// <summary>
    /// Handles smooth lane switching between parallel tracks at junction windows.
    /// Attach to train root.
    /// </summary>
    public class TrackSwitchController : MonoBehaviour
    {
        [SerializeField] private float laneWidth = 4.2f;
        [SerializeField] private float switchDuration = 0.45f;
        [SerializeField] private int currentLane;
        [SerializeField] private int minLane = -1;
        [SerializeField] private int maxLane = 1;

        private bool isSwitching;

        public void SwitchLeft() => TrySwitch(currentLane - 1);
        public void SwitchRight() => TrySwitch(currentLane + 1);

        private void TrySwitch(int targetLane)
        {
            if (isSwitching)
            {
                return;
            }

            targetLane = Mathf.Clamp(targetLane, minLane, maxLane);
            if (targetLane == currentLane)
            {
                return;
            }

            StartCoroutine(SwitchLaneRoutine(targetLane));
        }

        private IEnumerator SwitchLaneRoutine(int targetLane)
        {
            isSwitching = true;

            Vector3 start = transform.position;
            Vector3 right = transform.right;
            float laneDelta = (targetLane - currentLane) * laneWidth;
            Vector3 end = start + right * laneDelta;

            float elapsed = 0f;
            while (elapsed < switchDuration)
            {
                elapsed += Time.deltaTime;
                float t = Mathf.SmoothStep(0f, 1f, elapsed / switchDuration);
                transform.position = Vector3.Lerp(start, end, t);
                yield return null;
            }

            transform.position = end;
            currentLane = targetLane;
            isSwitching = false;
        }
    }
}
