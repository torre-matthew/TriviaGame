// Get all questions into their own object with appropriate properties.
    // Question
    // Anwer choices
let question = [
    "Since 2006, Pixar has released at least one film per year. In 2014 however, that was not the case. Which film's delay caused this?",
    "On what planet was Wal-e stranded at the begining of Wal-e?",
    "In the 2012 film 'Brave,' eating magic cake turns Merida's mom into what?",
    "question 4",
    "question 5",
    "question 6",
    "question 7",
    "question 8",
    "question 9",
    "question 10",
];

let choices = [
    ["The Good Dinosaur", "Inside Out", "Monster's University", "Finding Dory"],
    ["Earth", "Jupiter", "Mars", "Saturn"],
    ["Bear", "Witch", "Goat", "Donkey"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
];

let perQuestionTime = 15;


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

function perQuestionCountDown () {
        $(".timer-area").text(perQuestionTime);
        perQuestionTime--;
        if (perQuestionTime > 0) {
        $(".timer-area").text(perQuestionTime); 
    }else {
        $(".timer-area").text("Times up");
        setTimeout(serveSecondQuestion, 1000*1);
    }
}

// function resetTimer () {
//     perQuestionTime;
// }


function serveFirstQuestion () {
qContext = p.text(question[0]);
qChoiceOneText = choiceOneDiv.text(choices[0][0]);
qChoiceTwoText = choiceTwoDiv.text(choices[0][1]);
qChoiceThreeText = choiceThreeDiv.text(choices[0][2]);
qChoiceFourText = choiceFourDiv.text(choices[0][3]); 

$(".question-area").append(qColDiv);
$(".choice-area1").append(qChoiceOneCol, qChoiceTwoCol);
$(".choice-area2").append(qChoiceThreeCol, qChoiceFourCol);

}

function serveSecondQuestion () {

qContText = p.text(question[1]);
qChoiceOneText = choiceOneDiv.text(choices[1][0]);
qChoiceTwoText = choiceTwoDiv.text(choices[1][1]);
qChoiceThreeText = choiceThreeDiv.text(choices[1][2]);
qChoiceFourText = choiceFourDiv.text(choices[1][3]);

$(".question-area").append(qColDiv);
$(".choice-area1").append(qChoiceOneCol, qChoiceTwoCol);
$(".choice-area2").append(qChoiceThreeCol, qChoiceFourCol);
    
}


// Function that will reveal the first question when user selects to start the game.

// Start a timer when the game starts that gives 30 seconds to answer the question
    // If the question isn't answered in 30 seconds, 
        // tell them they are out of time, show the correct answer automatically.
        // record that as an unanswered question
    // If the select the correct answer
        // tell them it's corrrect with some other cute content,
        // record that as an answered question with either correct or incorrrect. 
        // move them on to the next question with timer.
    // If the select the wrong answer, 
        // tell them it's wrong, 
        // show them the right answer
        // record that as incorrect 
        // move them on to the next question with a timer.


// After the last question, show their results
    // Correctly Answered questions
    // Incorrect
    // Unanswered


    serveFirstQuestion();
    setInterval(perQuestionCountDown, 1000);