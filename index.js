const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

let timerId = null;

const getRandomColor = () => {
  const mappedColors = colors.map((color) => color);

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  refs.body.style.backgroundColor = mappedColors[randomIntegerFromInterval(0, colors.length)];
};

const startChangeColor = () => {
  timerId = setInterval(getRandomColor, 1000);
  refs.start.disabled = true;
}

const stopChangeColor = () => {
  clearInterval(timerId);
  refs.start.disabled = false;
}

refs.start.addEventListener('click', startChangeColor)
refs.stop.addEventListener('click', stopChangeColor)

