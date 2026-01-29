function generateWorkout(event) {
  event.preventDefault();

let workoutelement=document.querySelector("#workout-output");


new Typewriter("#workout-output", {
  strings: "`To do a burpee, start standing, squat down, place hands on the floor, kick feet back to a plank, do a push-up (optional), jump feet forward, then jump up explosively, landing softly to repeat. Focus on keeping your core tight, back straight, and engaging your whole body for this full-body cardio and strength move, with variations available for all fitness levels.",
  autoStart: true,
  deplay: 50,
  cursor: "|",
});
}
let workoutFormElement = document.querySelector("#workout-generator-form");
workoutFormElement.addEventListener("submit", generateWorkout);
