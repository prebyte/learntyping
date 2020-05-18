window.RunningGameManager = {
    $runningGameDashboard: null,
    $currentMessage: null,
    $remainingAttempts: null,
    currentMessage: '',
    tickInterval: 2000,
    totalAttemptsAllowed: 16,
    attemptsRemaining: 0,
    runningGameIntervalHandler: null,
    allLetters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    init: function () {
        this.$runningGameDashboard = $(".runningGameDashboard");
        this.$currentMessage = $(".currentMessage");
        this.$remainingAttempts = $(".remaininigAttempts");
    },
    start: function () {
        this.attemptsRemaining = this.totalAttemptsAllowed;
        this.updateLetter();
        const boundUpdateLetterFn = this.updateLetter.bind(window.RunningGameManager);
        this.runningGameIntervalHandler = setInterval(boundUpdateLetterFn, this.tickInterval);
        const boundKeyPressFn = this.checkKeyPress.bind(window.RunningGameManager);
        document.addEventListener("keypress", boundKeyPressFn);
    },
    updateLetter: function () {
        const x = Math.ceil(Math.random() * 25);
        this.currentMessage = this.allLetters.charAt(x);
        this.$currentMessage.text(this.currentMessage);
        this.attemptsRemaining--;
        this.$remainingAttempts.text("Attempts Remaining: " + this.attemptsRemaining);
        if (this.attemptsRemaining === 0) {
            this.stopGame();
        }
    },
    stopGame: function () {
        clearInterval(this.runningGameIntervalHandler);
        document.removeEventListener("keypress", this.checkKeyPress);
        this.currentMessage = "Game Over";
        this.$currentMessage.text(this.currentMessage);
    },
    checkKeyPress: function (event) {
        const k = event.key;
        if (k.toUpperCase() === this.currentMessage) {
            window.ScoreManager.raiseScore();
        }
    }
};
