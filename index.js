
const tableRef = document.querySelector('#timer-1');
const elements = document.querySelectorAll('#timer-1 span')
const daysRef = elements[0];
const hoursRef = elements[2];
const minutesRef = elements[4];
const secondsRef = elements[6];
const targetDate = new Date('Apr 15, 2021');

const CountdownTimer = {
  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      const { days, hours, mins, secs } = timeTransfer(deltaTime);
      updateClock({ days, hours, mins, secs })
    }, 1000);
  }
};

CountdownTimer.start()

function pad(value) {
  return String(value).padStart(2, '0')
};
function timeTransfer(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
  return { days, hours, mins, secs }
};
function updateClock({ days, hours, mins, secs }) {
  daysRef.textContent = `${days}`;
  hoursRef.textContent = `${hours}`;
  minutesRef.textContent = `${mins}`;
  secondsRef.textContent = `${secs}`;
};