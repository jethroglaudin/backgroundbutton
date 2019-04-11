const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ["yellow", "red", "green", "#3b5998", "blue", "orange", "#82ba84", "#baaa82", "rgb(103, 53, 168)"];

colorBtn.addEventListener('click',changeColor);

function changeColor() {
  let random = Math.floor(Math.random()* colors.length)
  bodyBcg.style.backgroundColor = colors[random];
}
