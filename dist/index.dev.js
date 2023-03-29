"use strict";

var inputEl = document.querySelector('input');
var buttonEl = document.querySelector('button');
var timerEl = document.querySelector('span');

var createTimerAnimator = function createTimerAnimator() {
  var intervalId;
  var remainingSeconds;
  return function (seconds) {
    clearInterval(intervalId);
    remainingSeconds = seconds;

    var updateTimer = function updateTimer() {
      var hours = Math.floor(remainingSeconds / 3600);
      var minutes = Math.floor(remainingSeconds % 3600 / 60);
      var seconds = remainingSeconds % 60;
      timerEl.textContent = "".concat(hours.toString().padStart(2, "0"), ":").concat(minutes.toString().padStart(2, "0"), ":").concat(seconds.toString().padStart(2, "0"));
      remainingSeconds--;

      if (remainingSeconds < 0) {
        clearInterval(intervalId);
        timerEl.textContent = "Время вышло! Увидимся на собеседовании!";
      }
    };

    updateTimer();
    intervalId = setInterval(updateTimer, 1000);
  };
};

var animateTimer = createTimerAnimator();
inputEl.addEventListener('input', function () {
  inputEl.value = inputEl.value.replace(/\D/g, '');
});
buttonEl.addEventListener('click', function () {
  var seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = '';
});