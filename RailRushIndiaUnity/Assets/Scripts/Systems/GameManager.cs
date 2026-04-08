using RailRushIndia.Core;
using UnityEngine;
using UnityEngine.SceneManagement;

namespace RailRushIndia.Systems
{
    public class GameManager : MonoBehaviour
    {
        public static GameManager Instance { get; private set; }

        [SerializeField] private TrainController playerTrain;
        [SerializeField] private int coins;
        [SerializeField] private float distanceMeters;
        [SerializeField] private bool gameRunning;

        public int Coins => coins;
        public float DistanceMeters => distanceMeters;

        private Vector3 lastPosition;

        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }

            Instance = this;
            DontDestroyOnLoad(gameObject);
        }

        private void Start()
        {
            if (playerTrain != null)
            {
                lastPosition = playerTrain.transform.position;
            }
            gameRunning = true;
        }

        private void Update()
        {
            if (!gameRunning || playerTrain == null)
            {
                return;
            }

            float delta = Vector3.Distance(playerTrain.transform.position, lastPosition);
            distanceMeters += delta;
            lastPosition = playerTrain.transform.position;

            if (playerTrain.IsCrashed)
            {
                gameRunning = false;
            }
        }

        public void AddCoins(int amount)
        {
            coins = Mathf.Max(0, coins + amount);
        }

        public void RestartCurrentScene()
        {
            Scene scene = SceneManager.GetActiveScene();
            SceneManager.LoadScene(scene.name);
        }
    }
}
