function displayWorkout(response) {
  console.log("workout plan generated:");

  new Typewriter("#workout-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "|",
  });
}

function generateWorkout(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "tf6b10721ee3fc0cdao3e7c56700ab34";

  let prompt = instructionsInput.value;

  let context = `
You are a certified fitness coach and movement instructor.

When a user asks "How to do a burpee"  exercise:

- Give a clear step-by-step breakdown
- Include proper form cues
- Mention breathing technique
- Share common mistakes
- Provide beginner and advanced variations if relevant

Your goal is to design a workout of their choice that is effective, safe, and engaging.
Respond confidently and helpfully.
Format the response in clean HTML with headings and bullet points.
`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating workout plan...");
  console.log("prompt:", prompt);
  console.log("context:", context);

  axios.get(apiUrl).then(displayWorkout);
}

let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
