const text = document.getElementById('text');
const slider = document.getElementById('slider');
const colorPicker = document.getElementById('head');
const colorPicker2 = document.getElementById('stroke');

let currentFontSize = 10; // 10vw as the initial font size
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

function setFontFamilyBasedOnMousePosition(e) {
  const rect = text.getBoundingClientRect();
  const textCenterX = rect.left + rect.width / 2;
  const textCenterY = rect.top + rect.height / 2;
  const xPos = e.clientX;
  const yPos = e.clientY;
  const fontAboveBelow = 'stardewstretch, Arial, sans-serif';
  const fontLeftRight = 'stardewstretch1, Arial, serif';
  const fontCenter = 'stardew, Arial, sans-serif'; // Change 'stardew' to your font family

  if (!fontSizeChanged) {
    // Check if font size has not changed by the buttons
    if (xPos > rect.left && xPos < rect.right && yPos > rect.top * .1 && yPos < rect.bottom) {
      text.style.fontFamily = fontCenter;
      text.style.marginTop = '21vh';
      text.style.fontSize = '10.5vw';
      text.style.marginRight = '0vw';      
    } else if (Math.abs(xPos - textCenterX) > Math.abs(yPos - textCenterY)) {
      text.style.fontFamily = fontLeftRight;
      text.style.marginTop = '21vh';
      text.style.marginRight = '6vw';      
      // text.style.fontSize = '9vw';
    } else {
      text.style.fontFamily = fontAboveBelow;
      text.style.marginTop = '18vh';
      // text.style.fontSize = '10vw';
      text.style.marginRight = '0vw';      
    }
  } else {
    if (xPos > rect.left && xPos < rect.right && yPos > rect.top * .2 && yPos < rect.bottom) {
      text.style.fontFamily = fontCenter;
      text.style.marginTop = '21vh';
      text.style.marginLeft = '0';
      text.style.marginRight = '0vw';        
    } else if (Math.abs(xPos - textCenterX) > Math.abs(yPos - textCenterY)) {
      text.style.fontFamily = fontLeftRight;
      text.style.marginRight = '6vw';      
      text.style.marginTop = '21vh';
    } else {
      text.style.fontFamily = fontAboveBelow;
      text.style.marginTop = '18vh';
    }
  }
}

slider.addEventListener('input', (e) => {
  const weight = e.target.value;
  const fontFamily = text.style.fontFamily; // Get current font family
  text.style.fontVariationSettings = `'wght' ${weight}`;
});

// Event listener for mouse movement
document.addEventListener('mousemove', setFontFamilyBasedOnMousePosition);

colorPicker.addEventListener("input", watchColorPicker, false);

function watchColorPicker(event) {
  text.style.color = event.target.value;
}

colorPicker2.addEventListener("input", watchColorPicker2, false);

function watchColorPicker2(event) {
  text.style.WebkitTextStrokeColor = event.target.value;
}
