function fetchAndDisplayUTCTime() {
  const timeElement = document.querySelector(".time");
  const utcTime = new Date().getTime();
  timeElement.innerHTML = `UTC Time: ${utcTime}`;
}

function fetchAndDisplayDayOfWeek() {
  const dayOfWeekElement = document.querySelector(".dayOfTheWeek");
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayOfWeek = new Date().getDay();
  const dayName = daysOfWeek[currentDayOfWeek];
  dayOfWeekElement.innerHTML = `Day of the Week: ${dayName}`;
}

function updateDateTime() {
  fetchAndDisplayUTCTime();
  fetchAndDisplayDayOfWeek();
}

updateDateTime();

setInterval(updateDateTime, 1000);
