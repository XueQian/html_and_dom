function SelectQuestions(questionName,answer,scoreUnit){
  Question.call(this,questionName,answer,scoreUnit);
}

SelectQuestions.prototype = Object.create(Question.prototype);
SelectQuestions.prototype.constructor = SelectQuestions;

SelectQuestions.prototype.calculateScore = function() {

  var select = document.getElementsByName(this.questionName);

  if(select[0].value === this.answer){
    console.log(this.scoreUnit+".............SelectQuestions");
    return this.scoreUnit;
  }

  return 0;
}
