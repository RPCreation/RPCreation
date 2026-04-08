using RailRushIndia.Gameplay;
using UnityEngine;

namespace RailRushIndia.Core
{
    public class PlayerInputController : MonoBehaviour
    {
        [SerializeField] private TrainController trainController;
        [SerializeField] private TrackSwitchController trackSwitchController;

        private void Update()
        {
            if (trainController == null)
            {
                return;
            }

            float throttle = Input.GetKey(KeyCode.W) || Input.GetKey(KeyCode.UpArrow) ? 1f : 0f;
            float brake = Input.GetKey(KeyCode.S) || Input.GetKey(KeyCode.DownArrow) ? 1f : 0f;

            trainController.SetThrottle(throttle);
            trainController.SetBrake(brake);

            if (Input.GetKeyDown(KeyCode.Space))
            {
                trainController.TriggerHorn();
            }

            if (trackSwitchController != null)
            {
                if (Input.GetKeyDown(KeyCode.A) || Input.GetKeyDown(KeyCode.LeftArrow))
                {
                    trackSwitchController.SwitchLeft();
                }

                if (Input.GetKeyDown(KeyCode.D) || Input.GetKeyDown(KeyCode.RightArrow))
                {
                    trackSwitchController.SwitchRight();
                }
            }
        }
    }
}
