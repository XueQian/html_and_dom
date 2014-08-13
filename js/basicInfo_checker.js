function basicInfoChecker() {
    var classes = document.getElementById("classes");
    var studentNumber = document.getElementById("studentNumber");
    var name = document.getElementById("name");
    var scores = document.getElementById("score");
    var score_div = document.getElementById("scorediv");

//        var classes = $('#classes');
//        var studentNumber = $('#studentNumber');
//        var name = $('#name');
//        var scores = $('#scores');
//        var score_div = $('#score_div');



    var score = 0;
    score = calculateTotalScore();
    //score_div.style.color = 'red';
    console.log(score);
    scores.innerHTML = score + '分';

    if (basicInfo(classes, studentNumber, name)) {

        return false;
    }

    return false;
}

function basicInfo(classes, studentNumber, name) {

    if (classes.value === '') {
        document.getElementById("classesdiv").className = "has-error";
        if (studentNumber.value === '') {
            document.getElementById("studentNumberdiv").className = "has-error";
        } else {
            document.getElementById("studentNumberdiv").className = "has-success";
        }
        if (name.value === '') {
            document.getElementById("namediv").className = "has-error";
        } else {
            document.getElementById("namediv").className = "has-success";
        }
        alert('班级,学号，姓名不能为空！');
        return true;
    } else {
        document.getElementById("classesdiv").className = "has-success";
    }

    if (studentNumber.value === '') {
        document.getElementById("studentNumberdiv").className = "has-error";
        if (name.value === '') {
            document.getElementById("namediv").className = "has-error";
        } else {
            document.getElementById("namediv").className = "has-success";
        }
        alert('学号，姓名不能为空！');
        return true;
    } else {
        document.getElementById("studentNumberdiv").className = "has-success";
    }

    if (name.value === '') {
        document.getElementById("namediv").className = "has-error";
        alert('姓名不能为空！');
        return true;
    } else {
        document.getElementById("namediv").className = "has-success";
    }

    return false;

}

function calculateTotalScore() {
    var questions = loadQuestions();

    var score = 0;
    _.forEach(questions, function (question) {
        score += question.calculateScore();

    });

    return score;
}
