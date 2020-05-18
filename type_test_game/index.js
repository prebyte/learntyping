
const initGame = function () {
    window.LoadGameManager.init();
    window.ScoreManager.init();
    window.RunningGameManager.init();
};

initGame();

const boundFn = window.LoadGameManager.start.bind(window.LoadGameManager);
$(".playBtn").click(boundFn);
