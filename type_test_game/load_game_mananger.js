window.LoadGameManager = {
    $loadGameDashboard: null,
    $gameReadyCounter: null,
    tickInterval: 1000,
    totalCount: 3,
    currentRemainingCount: 0,
    readyGameIntervalHandler: null,
    $restartButton: null,

    init: function () {
        this.$loadGameDashboard = $(".loadGameDashboard");
        this.$gameReadyCounter = $(".gameReadyCounter");
         this.$restartButton = $(".playAgain");
        console.log("a");
    },
    start: function () {
        $(".playBtn").addClass("hidden");
        this.$restartButton.removeClass("hidden");
        this.$restartButton.click( reset);
        this.currentRemainingCount = this.totalCount;
        const boundFn = this.updateCurrentRemainingCount.bind(window.LoadGameManager);
        this.readyGameIntervalHandler = setInterval(boundFn, this.tickInterval);
        this.showCurrentRemainingCount();
        this.$loadGameDashboard.removeClass("hidden");
    },
    updateCurrentRemainingCount: function () {
        console.info("load_game_manager: this: ", this);
        this.currentRemainingCount--;
        this.showCurrentRemainingCount();
        if (this.currentRemainingCount === 0) {
            clearInterval(this.readyGameIntervalHandler);
            this.$loadGameDashboard.addClass("hidden");
            this.currentRemainingCount = this.totalCount;
            window.RunningGameManager.start()
        }
    },
    showCurrentRemainingCount: function () {
        this.$gameReadyCounter.text("Your game starts in " + this.currentRemainingCount + " seconds");
    }
};
