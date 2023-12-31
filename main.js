const text = document.getElementById('text');
const slider = document.getElementById('slider');
const colorPicker = document.getElementById('head');
const colorPicker2 = document.getElementById('stroke');
const colorPicker3 = document.getElementById('gradient');
const body = document.querySelector('body');

let currentFontSize = 11.5; // 10vw as the initial font size
let fontSizeChanged = false; // Flag to track if font size has been changed

function increaseFontSize() {
  currentFontSize += 1;
  text.style.fontSize = `${currentFontSize}vw`;
  fontSizeChanged = true; // Update the flag when font size changes
}

function decreaseFontSize() {
  currentFontSize -= 1;
  text.style.fontSize = `${currentFontSize}vw`;
  fontSizeChanged = true; // Update the flag when font size changes
}

document.getElementById('increaseFontSize').addEventListener('click', increaseFontSize);
document.getElementById('decreaseFontSize').addEventListener('click', decreaseFontSize);

// function setFontFamilyBasedOnMousePosition(e) {
//   const rect = text.getBoundingClientRect();
//   const textCenterX = rect.left + rect.width / 2;
//   const textCenterY = rect.top + rect.height / 2;
//   const xPos = e.clientX;
//   const yPos = e.clientY;
//   const fontCenter = 'stardew, Arial, sans-serif'; // Change 'stardew' to your font family

//   if (!fontSizeChanged) {
//     // Check if font size has not changed by the buttons
//     if (xPos > rect.left && xPos < rect.right && yPos > rect.top * .1 && yPos < rect.bottom) {
//       // text.style.marginTop = '21.5vh';
//       text.style.fontSize = '10vw';
//       // text.style.marginRight = '0vw';      
//     } else if (Math.abs(xPos - textCenterX) > Math.abs(yPos - textCenterY)) {
//       // text.style.marginTop = '21.3vh';
//       // text.style.marginRight = '5.5vw';      
//     } else {
//       // text.style.marginTop = '18vh';
//       // text.style.fontSize = '10.25vw';
//       // text.style.marginRight = '0vw';      
//     }
//   } else {
//     if (xPos > rect.left && xPos < rect.right && yPos > rect.top * .2 && yPos < rect.bottom) {
//       // text.style.marginTop = '21vh';
//       // text.style.marginLeft = '0';
//       // text.style.marginRight = '0vw';        
//     } else if (Math.abs(xPos - textCenterX) > Math.abs(yPos - textCenterY)) {
//       // text.style.marginRight = '6vw';      
//       // text.style.marginTop = '21vh';
//     } else {
//       // text.style.marginTop = '18vh';
//     }
//   }
// }


// // Event listener for mouse movement
// document.addEventListener('mousemove', setFontFamilyBasedOnMousePosition);

colorPicker.addEventListener("input", watchColorPicker, false);

function watchColorPicker(event) {
  text.style.color = event.target.value;
}

colorPicker2.addEventListener("input", watchColorPicker2, false);

function watchColorPicker2(event) {
  text.style.WebkitTextStrokeColor = event.target.value;
}

colorPicker3.addEventListener("input", watchColorPicker3, false);

function watchColorPicker3(event) {
  body.style.background = `linear-gradient(white, ${event.target.value})`;
}

