import Notiflix from 'notiflix';
const form = document.querySelector('.form');
form.addEventListener('submit', formSubmit);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function formSubmit(ev) {
  ev.preventDefault();

  const amount = ev.currentTarget.amount.valueAsNumber;
  const step = ev.currentTarget.step.valueAsNumber;
  let delay = ev.currentTarget.delay.valueAsNumber;

  for (let e = 1; e <= amount; e++) {
    createPromise(e, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
  ev.currentTarget.reset();
}
