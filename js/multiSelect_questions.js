function MultiSelectQuestions(questionName, answer, scoreUnit) {
    Question.call(this, questionName, answer, scoreUnit);
}

MultiSelectQuestions.prototype = Object.create(Question.prototype);
MultiSelectQuestions.prototype.constructor = MultiSelectQuestions;

MultiSelectQuestions.prototype.calculateScore = function () {

    var selects = $("input[name|="+this.questionName+"]");

    var trueValue = '';

    _.forEach(selects, function (item) {
        if (item.checked) {
            trueValue += item.value;
        }
    });

    if (trueValue === this.answer) {

        return this.scoreUnit;
    }

    return 0;
}
