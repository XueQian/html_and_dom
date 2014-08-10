function loadQuestions() {
  var questions = [
                    new gapFillingQuestions('gapFilling1',['统一建模语言'],[5]),
                    new gapFillingQuestions('gapFilling2',['封装性','继承性','多态性'],[5,5,5]),

                    new selectQuestions('select1','B',10),
                    new selectQuestions('select2','A',10),

                    new multiSelectQuestions('multiSelect1','ABD',10),
                    new multiSelectQuestions('multiSelect2','ABC',10),

                    new judgeQuestions('judge1','X',10),
                    new judgeQuestions('judge2','V',10),

                    new simpleAnswerQuestions('simpleAnswer','答案',20)
                  ];
  return questions;
}
