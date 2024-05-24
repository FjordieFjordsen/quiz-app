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
];



let currentQuestion = 0;


function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    
    showQuestion();
}


function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {

}