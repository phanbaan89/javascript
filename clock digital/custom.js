const newYears = "1 jan 2021";
const dd = document.querySelector("#days");
const hh = document.querySelector("#hours");
const mm = document.querySelector("#min");
const sc = document.querySelector("#sec");
function countDown() {
  const newYearsDate = new Date(newYears);
  const currentdate = new Date();
  const totalSeconds = (newYearsDate - currentdate) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds % 60);

  dd.innerHTML = days;
  hh.innerHTML = formatTime(hours);
  mm.innerHTML = formatTime(min);
  sc.innerHTML = formatTime(sec);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
setInterval(countDown, 1000);
