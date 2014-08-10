function JudgeQuestions(questionName,answer,scoreUnit){
  Question.call(this,questionName,answer,scoreUnit);
}

JudgeQuestions.prototype = Object.create(Question.prototype);
JudgeQuestions.prototype.constructor = JudgeQuestions;

JudgeQuestions.prototype.calculateScore = function() {

  var judge = document.getElementsByName(this.questionName);

  if(judge[0].value === this.answer){
    return this.scoreUnit;
  }

  return 0;
}
