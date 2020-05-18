window.ScoreManager = {
    currentScore: 0,
    $currentScoreContainer: null,
    init: function () {
        this.currentScore = 0;
        this.$currentScoreContainer = $(".currentScore");
    },
    raiseScore: function () {
        this.currentScore++;
        this.showCurrentScore();
    },
    reset: function () {
        this.currentScore = 0;
        $(".gameOver .scoreIndicator").text("Your score is " + score);
        this.showCurrentScore();
    },
    showCurrentScore: function () {
        this.$currentScoreContainer.text("score: " + this.currentScore);
    }
};