function basicInfoChecker() {
  var classes = document.getElementById("classes");
  var studentNumber = document.getElementById("studentNumber");
  var name = document.getElementById("name");
  var scores = document.getElementById("score");

  var score = 0;
  score = calculateTotalScore();
  console.log(score+ ">>>>>>>>>>>>>");
  scores.value = score + '分';

  if(basicInfo(classes, studentNumber, name)){

    return false;
  }

  return false;
}

function basicInfo(classes, studentNumber, name) {
  if (name.value === '') {
    alert('姓名栏不能空！');

    return true;
  }
  if (studentNumber.value === '') {
    alert('学号栏不能空！');

    return true;
  }
  if (classes.value === '') {
    alert('班级栏不能空！');

    return true;
  }

  return false;
}

function calculateTotalScore() {
var questions = loadQuestions();

  var score = 0;
  _.forEach(questions, function(question) {
    score += question.calculateScore();

  });

  return score;
}
