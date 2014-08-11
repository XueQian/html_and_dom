function JudgeQuestions(questionName,answer,scoreUnit){
  Question.call(this,questionName,answer,scoreUnit);
}

JudgeQuestions.prototype = Object.create(Question.prototype);
JudgeQuestions.prototype.constructor = JudgeQuestions;

JudgeQuestions.prototype.calculateScore = function() {

  var judge = document.getElementsByName(this.questionName);

  var myanswer = '';
  for(var i = 0; i < 2;i++){
    if(judge[i].checked){
      myanswer += judge[i].value;
    }
  }

  if(myanswer === this.answer){
  
    return this.scoreUnit;
  }
  return 0;
}
