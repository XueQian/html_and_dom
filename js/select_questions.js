function SelectQuestions(questionName, answer, scoreUnit) {
    Question.call(this, questionName, answer, scoreUnit);
}

SelectQuestions.prototype = Object.create(Question.prototype);
SelectQuestions.prototype.constructor = SelectQuestions;

SelectQuestions.prototype.calculateScore = function () {

    var select = document.getElementsByName(this.questionName);

    var myanswer = '';
    for (var i = 0; i < 4; i++) {
        if (select[i].checked) {
            myanswer += select[i].value;
        }
    }

    if (myanswer === this.answer) {

        return this.scoreUnit;
    }

    return 0;
}
