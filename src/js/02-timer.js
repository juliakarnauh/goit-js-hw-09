import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-days]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
const div = document.querySelector('.timer')

let userSelectedDates = null;
let timerId = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      Notiflix.Notify.warning('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      btnStart.disabled = false;
      userSelectedDates = selectedDates[0];
    }
  },
};
flatpickr('input', options);
btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    const today = new Date();
    const diff = userSelectedDates - today;
    if (diff >= 0) {
      const diffTime = convertMs(diff);
      days.textContent = `${diffTime.days}`;
      hours.textContent = `${diffTime.hours}`;
      minutes.textContent = `${diffTime.minutes}`;
      seconds.textContent = `${diffTime.seconds}`;
    }
  }, 1000);
});
function addZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addZero(Math.floor(ms / day));

  const hours = addZero(Math.floor((ms % day) / hour));

  const minutes = addZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
input.style.border = '2px solid #4093ff'
div.style.display = 'flex'
div.style.gap = '20px'
btnStart.style.border = '2px solid #4093ff'
