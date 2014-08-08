function Calculate(){

  var classes = document.getElementById("classes");
  var studentNumber = document.getElementById("studentNumber");
  var name = document.getElementById("name");
  var scores = document.getElementById("score");

  var score = 0;
  score = getScore1() + getScore2()+getScore3();
  //console.log('总成绩：'+score);
  scores.value = score + '分';

  if(basicInfo(classes, studentNumber, name)){

    return false;
  }

  return false;
}

function basicInfo(classes, studentNumber, name) {
  if (classes.value === '' || studentNumber.value === '' || name.value === ''){
    alert('姓名栏，学号栏，班级栏不能空！');

    return true;
  }

  return false;
}

function getAnswer(){

  return [{b:"统一建模语言",c:5},{b:"答案",c:20}];
}

function getScore1(){

  var list = getAnswer();
  var judgement = [document.getElementsByName("gapFilling1")[0],
                    document.getElementsByName("answer")[0]];

  var score = 0;
  for (var i = 0; i < list.length; i++){
    if (judgement[i].value === list[i].b){

      score += list[i].c;
    }
  }

  return score;
}

function getAnswergapFilling2(){

  return [{b:"封装性",c:5},{b:"继承性",c:5},
  {b:"多态性",c:5}];
}

function getAnswer2(selects){

  var result = '';

  for(var i = 0; i < selects.length; i++){
    if(selects[i].checked){

      result += selects[i].value;
    }
  }

  return result;

}

function getScore2(){

  var list = getAnswergapFilling2();
  var score = 0;
  judgement = document.getElementsByName("gapFilling2");

  for (var i = 0; i < list.length; i++){
    if (judgement.value === list[i].b){

      score += list[i].c;
    }
  }
  //console.log(score);
  return score;

}

function getAnswer1(){

  return [
    {b:"B",c:10},
    {b:"A",c:10},
    {b:"ABD",c:10},
    {b:"ABC",c:10},
    {b:"X",c:10},
    {b:"V",c:10}
  ];
}

function getScore3(){

  var list = getAnswer1();

  var judgementSelect = [document.getElementsByName("select1"),
                          document.getElementsByName("select2"),
                          document.getElementsByName("multiSelect1"),
                          document.getElementsByName("multiSelect2"),
                          document.getElementsByName("judge1"),
                          document.getElementsByName("judge2")];

  var score =0;

  for(var i = 0;i<list.length; i++){
    if(getAnswer2(judgementSelect[i]) === list[i].b){

      score += list[i].c;
    }
  }

  return score;

}
