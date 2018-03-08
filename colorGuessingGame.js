let num = 6;
let colors = generateRandomColors(num);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
let h1 = document.querySelector(`h1`);
let messageDisplay = document.querySelector(`#message`);
let resetBtn = document.querySelector(`#resetBtn`);
let easyBtn = document.querySelector(`#easyBtn`);
let hardBtn = document.querySelector(`#hardBtn`);

easyBtn.addEventListener(`click`, function() {
  easyBtn.classList.add(`selected`);
  hardBtn.classList.remove(`selected`);
  document.querySelector(`#hide`).classList.add(`hidden`);
  num = 3;
  colors = generateRandomColors(num);
  //pick a new color from the array
  pickedColor = pickColor();
  //change display color to match the new color
  colorDisplay.textContent = pickedColor;
  //change colors of the squares
  for (i = 0; i < colors.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = `steelblue`;
  messageDisplay.textContent = ``;
  resetBtn.textContent = `New Colors`;
});

hardBtn.addEventListener(`click`, function() {
  hardBtn.classList.add(`selected`);
  easyBtn.classList.remove(`selected`);
  document.querySelector(`#hide`).classList.remove(`hidden`);
  num = 6;
  colors = generateRandomColors(num);
  //pick a new color from the array
  pickedColor = pickColor();
  //change display color to match the new color
  colorDisplay.textContent = pickedColor;
  //change colors of the squares
  for (i = 0; i < colors.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = `steelblue`;
  messageDisplay.textContent = ``;
  resetBtn.textContent = `New Colors`;
});

resetBtn.addEventListener(`click`, function() {
  messageDisplay.textContent = ``;
  this.textContent = `New Colors`;
  //generate random colors
  colors = generateRandomColors(num);
  //pick a new color from the array
  pickedColor = pickColor();
  //change display color to match the new color
  colorDisplay.textContent = pickedColor;
  //change colors of the squares
  for (i = 0; i < colors.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = `steelblue`;
});

function newColors() {
  for (i = 0; i < colors.length; i++) {
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add event listeners to squares
    squares[i].addEventListener(`click`, function() {
      //grab color of clicked square and compare to var pickedColor
      let clickedColor = this.style.backgroundColor;

      // console.log(clickedColor, pickedColor);
      if (clickedColor === pickedColor) {
        resetBtn.textContent = `Play again?`;
        h1.style.backgroundColor = clickedColor;
        messageDisplay.textContent = `Correct!`;
        changeColors(clickedColor);
      } else {
        resetBtn.textContent = `Play again?`;
        this.style.backgroundColor = `#232323`;
        messageDisplay.textContent = `Try again`;
      }
    });
  }
}
newColors();

function changeColors(color) {
  // loop through all squares

  for (i = 0; i < colors.length; i++) {
    //change each square color to match the correct one
    squares[i].style.backgroundColor = color;
  }
}

//setting up the wwinning color
function pickColor() {
  let randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

//number of colors generator
function generateRandomColors(numbr) {
  //make an array
  let arr = [];
  //repeat num times
  for (i = 0; i < num; i++) {
    //get random color and push into array
    // arr.push(randomColors());
    arr[i] = randomColors();
  }
  //return the array
  return arr;
}

//random colors generator
function randomColors() {
  //generate a random red 0 - 255
  let r = Math.floor(Math.random() * 256);

  //generate a random green 0 - 255
  let g = Math.floor(Math.random() * 256);

  //generate a random blue 0 - 255
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
