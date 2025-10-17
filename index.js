const form = document.getElementById("work-schedule-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const startTime = document.getElementById("start-time").value;
  const breakDuration = document.getElementById("break-duration").value;
  const workDuration = document.getElementById("work-duration").value;

  const exitTime = calculateExitTime(startTime, breakDuration, workDuration);
  displayExitTime(exitTime);
});

function calculateExitTime(startTime, breakDuration, workDuration) {
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [breakHours, breakMinutes] = breakDuration.split(":").map(Number);
  const workMinutes = parseInt(workDuration, 10) * 60;

  const totalMinutes = startMinutes + breakMinutes + workMinutes;

  const exitHours =
    (startHours + breakHours + Math.floor(totalMinutes / 60)) % 24;
  const exitMinutes = totalMinutes % 60;

  return `${exitHours.toString().padStart(2, "0")}:${exitMinutes
    .toString()
    .padStart(2, "0")}.`;
}

function displayExitTime(exitTime) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `Seu horário de saída é: ${exitTime}`;
}
