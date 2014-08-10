function simpleAnswerQuestions(questionName,answer,scoreUnit) {
  Question.call(this,questionName,answer,scoreUnit);
}

simpleAnswerQuestions.prototype = Object.create(Question.prototype);
simpleAnswerQuestions.prototype.constructor = simpleAnswerQuestions;

simpleAnswerQuestions.prototype.calculate = function(){

  var simpleAnswer = document.getElementsByName(this.questionName);

  if(simpleAnswer[0].value === this.answer){
    return this.scoreUnit;
  }

  return 0;
};
