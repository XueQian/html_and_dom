function SimpleAnswerQuestions(questionName,answer,scoreUnit) {
  Question.call(this,questionName,answer,scoreUnit);
}

SimpleAnswerQuestions.prototype = Object.create(Question.prototype);
SimpleAnswerQuestions.prototype.constructor = SimpleAnswerQuestions;

SimpleAnswerQuestions.prototype.calculate = function(){

  var simpleAnswer = document.getElementsByName(this.questionName);

  if(simpleAnswer[0].value === this.answer){
    console.log(this.scoreUnit+".............SimpleAnswerQuestions");
    return this.scoreUnit;
  }

  return 0;
};
