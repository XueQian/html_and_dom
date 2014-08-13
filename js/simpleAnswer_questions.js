function SimpleAnswerQuestions(questionName, answer, scoreUnit) {
    Question.call(this, questionName, answer, scoreUnit);
}

SimpleAnswerQuestions.prototype = Object.create(Question.prototype);
SimpleAnswerQuestions.prototype.constructor = SimpleAnswerQuestions;

SimpleAnswerQuestions.prototype.calculateScore = function () {

   // var simpleAnswer = document.getElementsByName(this.questionName);
    var simpleAnswer = $("input[name|="+this.questionName+"]");

    if (simpleAnswer.value === this.answer) {

        return this.scoreUnit;
    }

    return 0;
};
