/**
 * The core logic function that determines the time of day and updates the display.
 *
 * @format
 */

function updateGreeting() {
  // Get references to the three time-of-day element containers
  // Get a reference to the body tag for background color changes
  // 1. Hide all elements first (ensures only one is shown)
  // 2. Conditional Logic: Determine the time frame using if/else statements
  // Morning: 5 AM (inclusive) to 12 PM (exclusive) -> Hours 5 to 11
  // Show Morning
  // Afternoon: 12 PM (inclusive) to 6 PM (exclusive) -> Hours 12 to 17
  // Show Afternoon
  // Night: 6 PM (inclusive) to 4 AM (inclusive) -> Hours 18 to 4
  // Optional: Log the current time for debugging
}

// Run the function once when the script loads

// Optional: Run the function every 30 seconds (or more frequently) to update automatically
// Note: Students should understand this is for real-time changes
// setInterval(updateGreeting, 30000);

// Inject CSS for the slide-rotate-hor-top animation into the document so this file remains valid JavaScript
(function () {
  const css = `.slide-rotate-hor-top {
        -webkit-animation: slide-rotate-hor-top 0.5s steps(2, end) both;
        animation: slide-rotate-hor-top 0.5s steps(2, end) both;
    }`;
  const styleEl = document.createElement("style");
  styleEl.type = "text/css";
  styleEl.appendChild(document.createTextNode(css));
  document.head.appendChild(styleEl);
})();
