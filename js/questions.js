function loadQuestions() {
  var questions = [
                    new GapFillingQuestions('gapFilling1',['统一建模语言'],[5]),
                    new GapFillingQuestions('gapFilling2',['封装性','继承性','多态性'],[5,5,5]),

                    new SelectQuestions('select1','B',10),
                    new SelectQuestions('select2','A',10),

                    new MultiSelectQuestions('multiSelect1','ABD',10),
                    new MultiSelectQuestions('multiSelect2','ABC',10),

                    new JudgeQuestions('judge1','X',10),
                    new JudgeQuestions('judge2','V',10),

                    new SimpleAnswerQuestions('simpleAnswer','答案',20)
                  ];
  return questions;
}
