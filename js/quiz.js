//stores the quiz questions after the page loads
let quizBank;

window.onload = startApplication;

async function startApplication()
{
    //load the quiz questions from the remote api
    let response = await fetch("https://the-trivia-api.com/api/questions?limit=50");
    quizBank = await response.json();
}
