// "Since 2006, Pixar has released at least one film per year. In 2014 however, that was not the case. Which film's delay caused this?",
//     "On what planet was Wal-e stranded at the begining of Wal-e?",
//     "In the 2012 film 'Brave,' eating magic cake turns Merida's mom into what?",


// "The Good Dinosaur", "Inside Out", "Monster's University", "Finding Dory"],
//     ["Earth", "Jupiter", "Mars", "Saturn"],
//     ["Bear", "Witch", "Goat", "Donkey"],

// Get all questions into their own object with appropriate properties.
    // Question
    // Anwer choices
let question = [
    "question 1",
    "question 2",
    "question 3",
];

let choices = [
    ["Correct 1", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct 2", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct 3", "Incorrect", "Incorrect", "Incorrect"],
];

let correctChoice = [
    "Correct 1", 
    "Correct 2", 
    "Correct 3", 
];

let correctChoiceImage = [
    "<img src='assets/images/the-good-dinosaur.jpg'>", 
    "<img src='assets/images/the-good-dinosaur.jpg'>", 
    "<img src='assets/images/the-good-dinosaur.jpg'>", 
];

let perQuestionTime = 5;
let questionCount = 0;
let countDown;
let correct = 0;
let incorrect = 0;;
let notAnswered = 0;
let image;


// For building the question row div
let divs = $("<div>");
// For building the choice divs
let choiceOneDiv = $("<div>");
let choiceTwoDiv = $("<div>");
let choiceThreeDiv = $("<div>");
let choiceFourDiv = $("<div>");
// For building the column divs
let choiceOneColDiv = $("<div>");
let choiceTwoColDiv = $("<div>");
let choiceThreeColDiv = $("<div>");
let choiceFourColDiv = $("<div>");
// Four Building the question paragraph  
let p = $("<p>"); 


// Add a column class to the div in the row that the question will appear
let qColDiv = divs.addClass("col");
// Add an id for the same div. This id is important for styling.
let qContDiv = divs.attr("id","question");
// add the question text to the column
let qContText = p.text(question[0]);

// Add a col class for each of the columns that house an answer choice
let qChoiceOneCol = choiceOneColDiv.addClass("col");
let qChoiceTwoCol = choiceTwoColDiv.addClass("col");
let qChoiceThreeCol = choiceThreeColDiv.addClass("col");
let qChoiceFourCol = choiceFourColDiv.addClass("col");
// Add a class called choice for each of the columns that house an answer choice. This is important for styling.
let qChoiceOneDiv = choiceOneDiv.addClass("choice");
let qChoiceTwoDiv = choiceTwoDiv.addClass("choice");
let qChoiceThreeDiv = choiceThreeDiv.addClass("choice");
let qChoiceFourDiv = choiceFourDiv.addClass("choice");
// Add the choice text to each of the divs that hold an answer choice.
let qChoiceOneText = choiceOneDiv.text(choices[0][0]);
let qChoiceTwoText = choiceTwoDiv.text(choices[0][1]);
let qChoiceThreeText = choiceThreeDiv.text(choices[0][2]);
let qChoiceFourText = choiceFourDiv.text(choices[0][3]); 

// Append question text to the div that holds the question text.
qContDiv.append(qContText);
// append the div that holds the question text to the column that lives in the row that holds the question text.
qColDiv.append(qContDiv);

//Append the choice text to the div that holds each of the choices
qChoiceOneDiv.append(qChoiceOneText);
qChoiceTwoDiv.append(qChoiceTwoText);
qChoiceThreeDiv.append(qChoiceThreeText);
qChoiceFourDiv.append(qChoiceFourText);

//Append the div that holds each of the choices to the column that holds each of the choices.
qChoiceOneCol.append(qChoiceOneDiv);
qChoiceTwoCol.append(qChoiceTwoDiv);
qChoiceThreeCol.append(qChoiceThreeDiv);
qChoiceFourCol.append(qChoiceFourDiv);

// Function to display questions and choices.
function serveQuestion () {
    qContext = p.text(question[questionCount]);
    qChoiceOneText = choiceOneDiv.text(choices[questionCount][0]);
    qChoiceTwoText = choiceTwoDiv.text(choices[questionCount][1]);
    qChoiceThreeText = choiceThreeDiv.text(choices[questionCount][2]);
    qChoiceFourText = choiceFourDiv.text(choices[questionCount][3]); 
    
    $(".question-area").append(qColDiv);
    $(".choice-area1").append(qChoiceOneCol, qChoiceTwoCol);
    $(".choice-area2").append(qChoiceThreeCol, qChoiceFourCol);    
}

// Welcom Screen
function serveInitialState() {
    $(".intro-text").append("<div class='col'>" + "<p id='welcome'> Pixar has given us so many great movies over the years. Test your knowledge of all things Pixar with this trivia challenge." + "</p>" + "</div>");                         
    $(".ins").append("<div class='col'>" + "<p id='game-ins'> You'll have 30 seconds per questions to answer 20 questions. Good Luck!" + "</p>" + "</div>");
    $(".start-game-area").append("<div class='col'>" + "<button type='button' class='btn btn-primary btn-lg'> Let's get to it!!" + "</button>" + "</div>");
}

function serveEndState() {
    $(".intro-text").append("<div class='col'>" + "<p id='welcome'> Here's how you did." + "</p>" + "</div>");                         
    $(".ins").append("<div class='col'>" + "<p id='results-summary'>" + correct + " Answered Correctly" + "</p>" + "<p id='results-summary'>" + incorrect + " Answered Incorrectly" + "</p>" + "<p id='results-summary'>" + notAnswered + " Unaswered" + "</p>" + "</div>");
    $(".start-game-area").append("<div class='col'>" + "<button type='button' class='btn btn-primary btn-lg play-again'> Play Again" + "</button>" + "</div>");
}

// When the user gets the answer correct, this builds the experience they'll see before being moved on to the next question.
function correctAnswerExperience() {
    $(".result-display").append("<div class='col'>" + "<p id='correct'> Correct!!" + "</p>" + "</div>");
    $(".result-image").append("<div class='col'>" + correctChoiceImage[questionCount] + "</div>");
    setTimeout(cycleThroughQuestions,1000*5);
}

// When the user gets the answer wrong, this builds the experience they'll see before being moved on to the next question.
function wrongAnswerExperience () {
    $(".result-display").append("<div class='col'>" + "<p id='correct'> Sorry, that's incorrect." + "</p>" + "</div>");
    $(".result-image").append("<div class='col'>" + correctChoiceImage[questionCount] + "</div>");
    $(".result-text").append("<div class='col'>" + "<p id='correct'> We were looking for: " + correctChoice[questionCount] + "</p>" + "</div>");
    setTimeout(cycleThroughQuestions,1000*5);

}

// When the user runs out of time, this builds the experience they'll see before being moved on to the next question.
function outOfTimeExperience () {
    $(".result-display").append("<div class='col'>" + "<p id='correct'> Sorry, time's up!" + "</p>" + "</div>");
    $(".result-image").append("<div class='col'>" + correctChoiceImage[questionCount] + "</div>");
    $(".result-text").append("<div class='col'>" + "<p id='correct'> We were looking for: " + correctChoice[questionCount] + "</p>" + "</div>");
    setTimeout(cycleThroughQuestions,1000*5);

}

function perQuestionCountDown () {
    countDown = setInterval(countDownLogic, 1000);    
    
    function countDownLogic () {
        if (perQuestionTime > 0) {
            $(".timer-area").text(perQuestionTime + " Seconds remaining");
            perQuestionTime--;
            
        }
        
        if (perQuestionTime === 0) {
            notAnswered++;
            $(".row").empty();
            outOfTimeExperience();
            clearInterval(countDown);
            console.log("Not Answered Count: " + notAnswered);
            
        }
    }
}

function cycleThroughQuestions() {
    if (questionCount < question.length) {
        questionCount++;
        $(".row").empty();
        serveQuestion();
        perQuestionTime = 5;
        perQuestionCountDown();
    }
    if (questionCount === question.length) {
        serveEndState();
    }
}


serveInitialState();

$(document).on("click", ".btn", function (event){
    $(".row").empty();
    questionCount = 0;
    serveQuestion();
    perQuestionCountDown();
    
    
    
});

$(document).on("click", ".choice", function (event){
    let userSelection = $(this).text();
    
    if (userSelection === correctChoice[questionCount]) {
        correct++;
        $(".row").empty();
        correctAnswerExperience();
        clearInterval(countDown);
        
        
    }else {
        incorrect++;
        $(".row").empty();
        wrongAnswerExperience();
        clearInterval(countDown);
    }
    
    console.log("Correct Count: " + correct);
    console.log("Incorrect Count: " + incorrect);
        
});

$(document).on("click", ".play-again", function (event){
    questionCount = 0;
    perQuestionTime = 5;
    correct = 0;
    incorrect = 0;
    notAnswered = 0;
    serveQuestion();
    perQuestionCountDown();
});

// Run out of time in the middle of the game
// Run out of time on last question
// Correct in the middle of the game
// Correct last question
// Wrong in the middle of the game
// Wrong on last question
    