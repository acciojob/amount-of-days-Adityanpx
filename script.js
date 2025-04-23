//your JS code here. If required.
function daysOfAYear(year) {
  // Convert to number (defensive coding)
  year = Number(year);

  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;
  } else {
    return 365;
  }
}

// Prompt the user
let input = prompt("Enter a valid year between 1 and 9999:");

// Parse and check the range
let year = parseInt(input);

if (!isNaN(year) && year >= 1 && year <= 9999) {
  alert(`The year ${year} has ${daysOfAYear(year)} days.`);
} else {
  alert("Please enter a valid year between 1 and 9999.");
}
