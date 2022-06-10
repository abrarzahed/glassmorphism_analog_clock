//  Dom elements selections
let clockHour = document.getElementById("hour");
let clockMinute = document.getElementById("minute");
let clockSeconds = document.getElementById("seconds");

// Setting clock
let set_clock = setInterval(() => {
  let date_now = new Date();
  let hours = date_now.getHours();
  let minutes = date_now.getMinutes();
  let seconds = date_now.getSeconds();

  let calc_hours = hours * 30 + minutes / 2;
  let calc_minutes = minutes * 6 + seconds / 10;
  let calc_seconds = seconds * 6;

  // dynamic style
  clockHour.style.transform = `rotate(${calc_hours}deg)`;
  clockMinute.style.transform = `rotate(${calc_minutes}deg)`;
  clockSeconds.style.transform = `rotate(${calc_seconds}deg)`;
}, 1000);
