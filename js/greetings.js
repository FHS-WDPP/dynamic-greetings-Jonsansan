/**
 * The core logic function that determines the time of day and updates the display.
 *
 * @format
 */

const d = new Date();

console.log(d.getHours());
const h = d.getHours();
if (h < 12) {
  document.body.classList.toggle("morning-div");
} else if (h < 18) {
  document.body.classList.toggle("afternoon-div");
} else {
  document.body.classList.toggle("evening-div");
}
