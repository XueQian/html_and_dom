function GapFillingQuestions(questionName, answer, scoreUnit) {
    Question.call(this, questionName, answer, scoreUnit);
}

GapFillingQuestions.prototype = Object.create(Question.prototype);
GapFillingQuestions.prototype.constructor = GapFillingQuestions;

GapFillingQuestions.prototype.calculateScore = function () {
    var blanks = document.getElementsByName(this.questionName);

    var score = 0;
    var gapFillingScore = this.scoreUnit;
    _.forEach(this.answer, function (item, index) {
        if (_.some(blanks, {'value': item})) {
            score += gapFillingScore[index];
        }
    });

    return score;
};
