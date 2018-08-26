
// Get all questions into their own object with appropriate properties.
    // Question
    // Anwer choices
let question = [
"Since 2006, Pixar has released at least one film per year. In 2014 however, that was not the case. Which film's delay caused this?",
"On what planet was Wal-e stranded at the begining of Wal-e?",
"In the 2012 film 'Brave,' eating magic cake turns Merida's mom into what?",
"Flik and his fellow ants are bullied by who in the 1998 Pixar film 'A Bug's Life.'",
"What animated feature film was Pixar's first release in 1995?",
"While on their way to find Nemo, Marlin and Dory almost become whale food! What kind of whale carries the two to Port Jackson?",
"What is the name of the girl in Inside Out?",
"What is the name of this menacing shark in Finding Nemo?",
"Which emotion is associated with Riley Anderson's earliest memory of broccoli?",
"What does Bomb Voyage say in French about Incrediboy's super outfit?",
"In 'Monster's Inc,' who's job is it to get screams?",
"What is Miguel's grandmother's name?",
"In 'Cars', what color was Mater before he turned rusty?",
];

let choices = [
["The Good Dinosaur", "Inside Out", "Monster's University", "Finding Dory"],
["Mars", "Jupiter", "Earth", "Saturn"],
["A Witch", "A Bear", "A Goat", "A Donkey"],
["Flies", "Wasps", "Lotus", "Grasshoppers"],
["Toy Story", "Cars", "A Bug's Life", "Finding Nemo"],
["Beluga Whale", "Humpback Whale", "Killer Whale", "Blue Whale"],
["Boo", "Riley", "Merida", "Colette"],
["Bruce", "Woody", "Roger", "Keith"],
["Sadness", "Joy", "Anger", "Disgust"],
["It's Tragic", "It's Ridiculous", "It's Laughable", "It's Amateur"], 
["Scarers", "Yellers", "Screamers", "Monsters"],
["Mama Tia", "Abuelita Elena", "Mama Imelda", "Abuelita Coco"],
["Red", "Yellow", "Baby Blue", "Purple"],
];

let correctChoice = [
"The Good Dinosaur",
"Earth",
"A Bear",
"Grasshoppers",
"Toy Story",
"Blue Whale",
"Riley",
"Bruce",
"Disgust",
"It's Ridiculous",
"Scarers",
"Abuelita Elena",
"Baby Blue",
];

let correctChoiceImage = [
    "<img src='assets/images/gooddino.gif'>", 
    "<img src='assets/images/wale.gif'>",
    "<img src='assets/images/bravemotherbear.gif'>",
    "<img src='assets/images/antsgrasshoppers.gif'>",
    "<img src='assets/images/toystory.gif'>",
    "<img src='assets/images/findingnemo.gif'>",
    "<img src='assets/images/riley.gif'>",
    "<img src='assets/images/bruce.gif'>",
    "<img src='assets/images/disgust.gif'>",
    "<img src='assets/images/bombvoyage.jpg'>",
    "<img src='assets/images/scarers.gif'>",
    "<img src='assets/images/abuelitaelena.gif'>",
    "<img src='assets/images/materbabyblue.jpg'>", 
];

let perQuestionTime = 20;
let questionCount = 0;
let countDown;
let correct = 0;
let incorrect = 0;;
let notAnswered = 0;
let userSelection;


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
    
    $(".timer-area").append("<div class='col'>" + "<p id='timer'>" + perQuestionTime + "</p>" + "</div>");
    $(".question-area").append(qColDiv);
    $(".choice-area1").append(qChoiceOneCol, qChoiceTwoCol);
    $(".choice-area2").append(qChoiceThreeCol, qChoiceFourCol);    
}

// Welcom Screen
function serveInitialState() {
    $(".intro-text").append("<div class='col'>" + "<p id='welcome'> Pixar has given us so many great movies over the years. Test your knowledge of all things Pixar with this trivia challenge." + "</p>" + "</div>");                         
    $(".ins").append("<div class='col'>" + "<p id='game-ins'> You'll have 20 seconds per questions to answer 13 questions. Good Luck!" + "</p>" + "</div>");
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
    setTimeout(actionsBasedOnCount,1000*3);
}

// When the user gets the answer wrong, this builds the experience they'll see before being moved on to the next question.
function wrongAnswerExperience () {
    $(".result-display").append("<div class='col'>" + "<p id='correct'> Sorry, that's incorrect." + "</p>" + "</div>");
    $(".result-image").append("<div class='col'>" + correctChoiceImage[questionCount] + "</div>");
    $(".result-text").append("<div class='col'>" + "<p id='correct'> We were looking for: " + correctChoice[questionCount] + "</p>" + "</div>");
    setTimeout(actionsBasedOnCount,1000*6);

}

// When the user runs out of time, this builds the experience they'll see before being moved on to the next question.
function outOfTimeExperience () {
    $(".result-display").append("<div class='col'>" + "<p id='correct'> Sorry, time's up!" + "</p>" + "</div>");
    $(".result-image").append("<div class='col'>" + correctChoiceImage[questionCount] + "</div>");
    $(".result-text").append("<div class='col'>" + "<p id='correct'> We were looking for: " + correctChoice[questionCount] + "</p>" + "</div>");
    setTimeout(actionsBasedOnCount,1000*6);
}

function actionsBasedOnTime () {
    countDown = setInterval(countDownLogic, 1000);    
    
    function countDownLogic () {
        if (perQuestionTime > 0) {
            perQuestionTime--;
            $("#timer").text(perQuestionTime);
            
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

function actionsBasedOnCount() {
    console.log(userSelection === correctChoice[questionCount]);
    if (questionCount < (question.length - 1)) {
        questionCount++;
        console.log("Question Count: " + questionCount);
        console.log("Array length: " + question.length);
        $(".row").empty();
        serveQuestion();
        perQuestionTime = 20;
        actionsBasedOnTime();
    }else {
        $(".row").empty();
        serveEndState();
    }
}


serveInitialState();

$(document).on("click", ".btn", function (event){
    $(".row").empty();
    questionCount = 0;
    serveQuestion();
    actionsBasedOnTime();
});

$(document).on("click", ".choice", function (event){
    userSelection = $(this).text();
    
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
        
});

$(document).on("click", ".play-again", function (event){
    questionCount = 0;
    perQuestionTime = 20;
    correct = 0;
    incorrect = 0;
    notAnswered = 0;
    $(".row").empty();
    serveQuestion();
});
    