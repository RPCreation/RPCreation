using RailRushIndia.Core;
using UnityEngine;
using UnityEngine.Events;

namespace RailRushIndia.Gameplay
{
    public class CollisionHandler : MonoBehaviour
    {
        [SerializeField] private TrainController trainController;
        [SerializeField] private LayerMask hazardMask;
        [SerializeField] private float detectionRadius = 1.3f;
        [SerializeField] private Transform detectionPoint;

        [Header("Events")]
        [SerializeField] private UnityEvent onCrash;
        [SerializeField] private UnityEvent<int> onCoinCollected;
        [SerializeField] private UnityEvent onFuelCollected;

        private void Update()
        {
            if (trainController == null || trainController.IsCrashed || detectionPoint == null)
            {
                return;
            }

            Collider[] hits = Physics.OverlapSphere(detectionPoint.position, detectionRadius, hazardMask, QueryTriggerInteraction.Ignore);
            if (hits.Length > 0)
            {
                trainController.CrashTrain();
                onCrash?.Invoke();
            }
        }

        private void OnTriggerEnter(Collider other)
        {
            if (other.CompareTag("Coin"))
            {
                onCoinCollected?.Invoke(1);
                Destroy(other.gameObject);
            }
            else if (other.CompareTag("Fuel"))
            {
                onFuelCollected?.Invoke();
                Destroy(other.gameObject);
            }
            else if (other.CompareTag("Obstacle") || other.CompareTag("Train"))
            {
                trainController.CrashTrain();
                onCrash?.Invoke();
            }
        }

#if UNITY_EDITOR
        private void OnDrawGizmosSelected()
        {
            if (detectionPoint == null)
            {
                return;
            }

            Gizmos.color = Color.red;
            Gizmos.DrawWireSphere(detectionPoint.position, detectionRadius);
        }
#endif
    }
}
