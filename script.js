let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right-answer": 3
    },
    {
        "question": "Wer führte Regie bei dem Film 1917?",
        "answer_1": "Tom Jones",
        "answer_2": "Aschenputtel",
        "answer_3": "Bernhard & Bianka",
        "answer_4": "Sam Mendes",
        "right-answer": 4
    },
    {
        "question": "Wer backt gern Brot?",
        "answer_1": "Helge Schneider",
        "answer_2": "Marvin Gaye",
        "answer_3": "Dein Bäcker des Vertrauens",
        "answer_4": "Maus & Elefant",
        "right-answer": 3
    },
    {
        "question": "Wie heißt der tiefste Meeresgraben?",
        "answer_1": "K2",
        "answer_2": "Boxgraben",
        "answer_3": "Marianengraben",
        "answer_4": "Pinatubo",
        "right-answer": 3
    },
    {
        "question": "Welche Gurke lebt in 4000 Meter Tiefe?",
        "answer_1": "Essiggurke",
        "answer_2": "Seegurke",
        "answer_3": "Senfgurke",
        "answer_4": "geschmorte Gurke",
        "right-answer": 2
    },
];


let rightQuestions = 0;
let currentQuestion = 0; //aktuelle Frage, die beim Laden der Seite aufgerufen wird. In diesem Fall die nullte Frage.
let audio_success = new Audio('sounds/right.mp3');
let audio_wrong = new Audio('sounds/falsch.mp3');
let audio_win = new Audio('sounds/fanfare.mp3');
let audio_new = new Audio('sounds/new.mp3');


function init() {
    document.getElementById('all-questions').innerHTML = questions.length; // Zeigt direkt beim Laden an, wieviele Fragen vorhanden sind. Anhand der Länge des Arrays.
    
    showQuestion(); // Diese Funktion ruft die direkt die erste(nullte) Frage auf.
}


function showQuestion() { // Funktionsaufruf der Frage
    if  (gameIsOver()) { 
        showEndScreen();
    } else { // normaler Funktionsaufruf geht weiter
        updateProgressBar();
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return (currentQuestion >= questions.length) // ist die Höchstfragenzahl erreicht, erscheint ein Endbildschirm.
}


function updateProgressBar() {
    let percent = (currentQuestion) / questions.length; // teil die aktuelle Frage durch die Gesamtzahl der Fragen.
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML =`${percent} %`;
        document.getElementById('progress-bar').style =`width: ${percent}%`;
}


function updateToNextQuestion() {
        let question = questions[currentQuestion];
        document.getElementById('question-number').innerHTML = currentQuestion + 1; // diese Zeile sorgt dafür, dass die Zahl der aktuellen Frage angezeigt wird.
        document.getElementById('questionText').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function showEndScreen() {
        document.getElementById('endScreen').style = ''; // blendet den Endsrceen Container ein 
        document.getElementById('questionBody').style = 'display: none'; // blendet den Fragen Container aus
        document.getElementById('amount-of-questions').innerHTML = questions.length;// diese Zeile greift die Länge des Arrays ab um sie im Endscreen als Zahl auszugeben
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/laurel.png';
        audio_win.play();
        updateProgressBar();
}


function answer(selection) {
    let question = questions[currentQuestion];//aktuelle Frage (in dem Fall die nullte Frage)
    let selectedQuestionNumber = selection.slice(-1);// diese Zeile greift auf den letzten Buchstaben der Antwort zu um ihn mit if oder else später abzugleichen
    let idOfRightAnswer = `answer_${question['right-answer']}`;//liest die jeweils richtige Antwort aus um sie dann in Zeile 66 anzuwenden.

    if(selectedQuestionNumber == question['right-answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        audio_success.play();
        rightQuestions++;
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');//ruft beim klicken der falschen Antwort gleichzeitig die richtige Antwort auf.
        audio_wrong.play();
    }
        document.getElementById('next-button').disabled = false; // setzt den Button auf klickbar
}


function nextQuestion() {
    currentQuestion++; // erhöht die Variable let currentQuestion um 1 ( Zeile 30)
    document.getElementById('next-button').disabled = true; // setzt den Button auf nicht klickbar.

    resetAnswerButtons(); // ruft die Funktion resetAnswerButtons auf. 
    showQuestion(); // Funktion aus Zeile 40  wird erneut aufgerufen.
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}


function restartGame() {
    document.getElementById('header-image').src = 'img/education.jpg';// ändert das BIld wieder um in den Anfangsbildschirm.
    document.getElementById('questionBody').style = ''; // Questionbody einblenden
    document.getElementById('endScreen').style = 'display: none'; // Endscreen ausblenden
    rightQuestions = 0;// der Wert wird überschrieben
    currentQuestion = 0;
    init();
    audio_new.play();
}