function MultiSelectQuestions(questionName,answer,scoreUnit){
  Question.call(this,questionName,answer,scoreUnit);
}

MultiSelectQuestions.prototype = Object.create(Question.prototype);
MultiSelectQuestions.prototype.constructor = MultiSelectQuestions;

MultiSelectQuestions.prototype.calculateScore = function() {

  var selects = document.getElementsByName(this.questionName);

  var trueValue = '';

  _.forEach(selects, function(item) {
    if(item.checked){
      trueValue += item.value;
    }
  });

  if(trueValue === this.answer){
    console.log(this.scoreUnit+".............MultiSelectQuestions");
    return this.scoreUnit;
  }

  return 0;
}
