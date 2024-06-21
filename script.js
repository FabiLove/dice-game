const image1 = document.querySelectorAll("img")[0];
const image2 = document.querySelectorAll("img")[1];
const btnReset = document.querySelectorAll("button")[0];

resetDice();

btnReset.addEventListener("click", resetDice);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function resetDice() {
  const randomNumber1 = getRandomInt(5) + 1;
  const randomNumber2 = getRandomInt(5) + 1;
  image1.setAttribute("src", `./cubiki/Property 1=Variant${randomNumber1}.svg`);
  image2.setAttribute("src", `./cubiki/Property 1=Variant${randomNumber2}.svg`);
}
console.log(getRandomInt(5) + 1);
