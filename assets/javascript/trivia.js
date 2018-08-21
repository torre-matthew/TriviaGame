// Get all questions into their own object with appropriate properties.
    // Question
    // Anwer choices
let question = [
    "Since 2006, Pixar has released at least one film per year. In 2014 however, that was not the case. Which film's delay caused this?",
    "question 2",
    "question 3",
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
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
    ["Correct", "Incorrect", "Incorrect", "Incorrect"],
];


// Building the area in html for the question to be presented.
let divs = $("<div>"); 
let p = $("<p>"); 

let qColDiv = divs.attr("class", "col");
let qContDiv = divs.attr("id","question");
let qContText = p.text(question[0]);

qContDiv.append(qContText);
qColDiv.append(qContDiv);




function twoSeconds () {

$(".question-area").append(qColDiv);

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


setTimeout(twoSeconds, 1000 * 2);