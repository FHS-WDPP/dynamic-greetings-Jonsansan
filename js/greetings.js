/**
 * The core logic function that determines the time of day and updates the display.
 *
 * @format
 */

const d = new Date();
const h = d.getHours();

// Get all div elements first 
const morningDiv = document.getElementById("morning-div");
const afternoonDiv = document.getElementById("afternoon-div");
const nightDiv = document.getElementById("night-div");

// Hide all divs first 
morningDiv.classList.add("d-none");
afternoonDiv.classList.add("d-none");
nightDiv.classList.add("d-none");

// Show the appropriate div based on time of day :D 
if (h < 12) {
  morningDiv.classList.remove("d-none");
} else if (h < 18) {
  afternoonDiv.classList.remove("d-none");
} else {
  nightDiv.classList.remove("d-none");
}
