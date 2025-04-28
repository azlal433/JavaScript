var questions = [
    {
        question: "What is the capital city of Pakistan?",
        option1: "Karachi",
        option2: "Lahore",
        option3: "Islamabad",
        correctOption: "Islamabad",
    },
    {
        question: "Who was the founder of Pakistan?",
        option1: "Allama Iqbal",
        option2: "Quaid-e-Azam Muhammad Ali Jinnah",
        option3: "Liaquat Ali Khan",
        correctOption: "Quaid-e-Azam Muhammad Ali Jinnah",
    },
    {
        question: "When did Pakistan gain independence?",
        option1: "14th August 1947",
        option2: "23rd March 1940",
        option3: "1st July 1948",
        correctOption: "14th August 1947",
    },
    {
        question: "Which is the national language of Pakistan?",
        option1: "Punjabi",
        option2: "Urdu",
        option3: "Sindhi",
        correctOption: "Urdu",
    },
    {
        question: "Which is the largest province of Pakistan by area?",
        option1: "Sindh",
        option2: "Punjab",
        option3: "Balochistan",
        correctOption: "Balochistan",
    },
    {
        question: "What is the national sport of Pakistan?",
        option1: "Cricket",
        option2: "Hockey",
        option3: "Football",
        correctOption: "Hockey",
    },
    {
        question: "Which mountain is the highest peak in Pakistan?",
        option1: "K2",
        option2: "Nanga Parbat",
        option3: "Mount Everest",
        correctOption: "K2",
    },
    {
        question: "What is the currency of Pakistan?",
        option1: "Rupee",
        option2: "Dinar",
        option3: "Riyal",
        correctOption: "Rupee",
    },
];


var htmlques = document.getElementById('ques');
var htmlopt1 = document.getElementById('opt1');
var htmlopt2 = document.getElementById('opt2');
var htmlopt3 = document.getElementById('opt3');
var index = 0;
var getBtn = document.getElementById('btn');
var score = 0;
var selectedAnswers = [];
var timer;
var time = 120; 

function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    startTimer();
    nextQuestion();
}

function startTimer() {
    timer = setInterval(function () {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
        document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--;
        if (time < 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

function nextQuestion() {
    var getInputs = document.getElementsByName('quiz');
    for (var i = 0; i < getInputs.length; i++) {
        getInputs[i].checked = false;
    }

    if (index >= questions.length) {
        endQuiz();
    } else {
        htmlques.innerText = questions[index].question;
        htmlopt1.innerText = questions[index].option1;
        htmlopt2.innerText = questions[index].option2;
        htmlopt3.innerText = questions[index].option3;


        document.getElementById('option1').value = questions[index].option1;
        document.getElementById('option2').value = questions[index].option2;
        document.getElementById('option3').value = questions[index].option3;

        getBtn.disabled = true; 
    }
}

function btnWork() {
    getBtn.disabled = false; 
}

function endQuiz() {
    clearInterval(timer);

    Swal.fire({
        title: "Quiz End!",
        html: `
            <h3>Your Score: ${score}/${questions.length}</h3>
            <button onclick="matchAnswers()" style="padding: 10px 20px; margin-top: 20px; background-color: #3085d6; color: white; border: none; border-radius: 5px; cursor: pointer;">Match Your Answers</button>
        `,
        showConfirmButton: false,
    });
}

function matchAnswers() {
    var html = `
    <h2 style="text-align:center; color:#3085d6;">Match Your Answers</h2>
    <div style="display:flex; justify-content:space-around; margin-top:20px;">

      <div>
        <h3 style="color:green;">Your Answers</h3>
        <ul style="list-style:none; padding:0;">`;

    for (var i = 0; i < selectedAnswers.length; i++) {
        let color = selectedAnswers[i] === questions[i].correctOption ? 'green' : 'red';
        html += `<li style="margin-bottom:8px; color:${color};"><b>${i+1}.</b> ${selectedAnswers[i]}</li>`;
    }

    html += `</ul>
      </div>

      <div>
        <h3 style="color:blue;">Correct Answers</h3>
        <ul style="list-style:none; padding:0;">`;

    for (var i = 0; i < questions.length; i++) {
        html += `<li style="margin-bottom:8px;"><b>${i+1}.</b> ${questions[i].correctOption}</li>`;
    }

    html += `</ul>
      </div>
    </div>`;

    Swal.fire({
       
        html: html,
        width: 800,
        heightAuto: true,
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "Restart Quiz",
        reverseButtons: true,
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.cancel) {
            restartQuiz();
        }
    });
}


   

function restartQuiz() {
    index = 0;
    score = 0;
    selectedAnswers = [];
    time = 120;
    document.getElementById('startScreen').style.display = 'block';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('timer').innerText = '';
}

document.getElementById('btn').addEventListener('click', function () {
    var options = document.getElementsByName('quiz');
    var selectedValue = '';

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedValue = options[i].value;
        }
    }

    selectedAnswers.push(selectedValue || "No Answer");

    if (selectedValue === questions[index].correctOption) {
        score++;
    }

    index++;
    nextQuestion();
});
