const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');


const createTimerAnimator = () => {
  let intervalId;
  let remainingSeconds;

  return (seconds) => {
    clearInterval(intervalId);

    remainingSeconds = seconds;

    const updateTimer = () => {
      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      timerEl.textContent = `${hours
        .toString()
        .padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        timerEl.textContent =
          "Время вышло! Увидимся на собеседовании!";
      }
    };

    updateTimer();

    intervalId = setInterval(updateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/g, '');

});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});
