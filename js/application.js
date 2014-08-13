$(document).ready(function () {
    var classes = $('#classes')[0];
    var studentNumber = $('#studentNumber')[0];
    var name = $('#name')[0];
    var scores = $('#scores')[0];
    var score_div = $('#score_div')[0];

    $('#btn').on('click', function () {

        if ($("#classes").val() === '' || $("#studentNumber").val() === '' || $("#name").val() === '') {
            $('#myModal').modal({keyboard: false});
            $('#classesdiv').addClass('has-error');
            $('#studentNumberdiv').addClass('has-error');
            $('#namediv').addClass('has-error');
        } else {
            $('#classesdiv').removeClass('has-error');
            $('#studentNumberdiv').removeClass('has-error');
            $('#namediv').removeClass('has-error');
        }
        var score = 0;
        score = calculateTotalScore();

        if (score !== 0) {
            $('#scorediv').addClass('text-danger');
            scores.innerHTML = score + '分';
        }
        return false;
    });

});


function calculateTotalScore() {
    var questions = loadQuestions();

    var score = 0;
    _.forEach(questions, function (question) {
        score += question.calculateScore();

    });

    return score;
}

