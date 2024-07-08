const text = document.getElementById('text');
const tester = document.querySelector('.tester')
const slider = document.getElementById('slider');
const colorPicker = document.getElementById('head');
const colorPicker2 = document.getElementById('stroke');
const colorPicker3 = document.getElementById('gradient');
const body = document.querySelector('body');
const stroke = document.getElementById('stroke')
const fontsize = document.getElementById('fontsize');
const mode = document.getElementById('mode');
const modeButton = document.getElementById('mode-button');
const info = document.querySelector('.info');
const chars = document.querySelector('.chars')
const about = document.getElementById('about-header');
const subheaders = document.querySelectorAll('.subheader');
const a = document.querySelector('a')
const introtext = document.getElementById('intro-text');

let currentFontSize = 112; // 10vw as the initial font size
let fontSizeChanged = false; // Flag to track if font size has been changed

function increaseFontSize() {
  currentFontSize += 16;
  text.style.fontSize = `${currentFontSize}px`;
  fontSizeChanged = true; // Update the flag when font size changes
  fontsize.innerHTML = '';
  fontsize.innerHTML = `${currentFontSize}px`;
}

function decreaseFontSize() {
  if (currentFontSize == 0){
    text.style.fontSize = `0px`;
    fontsize.innerHTML = '';
    fontsize.innerHTML = `${currentFontSize}px`;
    currentFontSize -= 0;
  } else {
    currentFontSize -= 16;
    text.style.fontSize = `${currentFontSize}px`;
    fontSizeChanged = true; // Update the flag when font size changes
    fontsize.innerHTML = '';
    fontsize.innerHTML = `${currentFontSize}px`;
  }
 
}

document.getElementById('increaseFontSize').addEventListener('click', increaseFontSize);
document.getElementById('decreaseFontSize').addEventListener('click', decreaseFontSize);

// Set the --stroke-rgb variable with RGB values
document.documentElement.style.setProperty('--stroke-rgb', hexToRgb(getComputedStyle(document.documentElement).getPropertyValue('--stroke')));

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
  document.documentElement.style.setProperty('--stroke', event.target.value);
  document.documentElement.style.setProperty('--stroke-rgb', hexToRgb(event.target.value));
}


colorPicker3.addEventListener("input", watchColorPicker3, false);

function watchColorPicker3(event) {
  document.documentElement.style.setProperty('--background', event.target.value);
  document.documentElement.style.setProperty('--background-rgb', hexToRgb(event.target.value));
  tester.style.background = `linear-gradient(white, ${event.target.value})`;
  // slider.style.boxShadow = `0px 0px 5px 4px rgba(${hexToRgb(event.target.value)}, .5)`;

}


mode.addEventListener("click", function(){
  info.classList.toggle('dark-modeText');
  chars.classList.toggle('dark-modeChars');
  about.classList.toggle("dark-modeHeader");
  mode.classList.toggle("dark-modeButton");
  subheaders.forEach(function(subheader){
  subheader.classList.toggle("dark-modeSubheader")
  })

  if (modeButton.textContent === "● DARK MODE") {
    modeButton.textContent = "● LIGHT MODE";
    // body.style.cursor = `url('cursor2.svg') 10 10, auto`;
    introtext.innerHTML = '';
    introtext.innerHTML = `
    <p id="intro-text" class="arial">
          The typeface was born from a curiosity about combining traditional design with technology, aiming to create an interplay between pixel and serif typography. Interested in how a grid and symbol could reimagine the nature of serifs, Stardew uses a flower-like pixel (<span class="pixel font"><img src="star3.png"></span>) to form its characters. The placement and varying repetition of this symbol on a grid reinforce the stress of serif typefaces. A different variation of the pixel (<span class="pixel font"><img src="star4.png"></span>) is used for the serifs, dots, and other aspects, creating a playful distinction. The serifs are also tapered, and the letters have a slightly tilted axis, resembling old-style serifs.
        </p>
    `
  } else if (modeButton.textContent === "● LIGHT MODE"){
    modeButton.textContent = "● DARK MODE";
    // body.style.cursor = `url('cursor.png') 10 10, auto`;
    introtext.innerHTML = '';
    introtext.innerHTML = `
    <p id="intro-text" class="arial">
    The typeface was born from a curiosity about combining traditional design with technology, aiming to create an interplay between pixel and serif typography. Interested in how a grid and symbol could reimagine the nature of serifs, Stardew uses a flower-like pixel (<span class="pixel font"><img src="star1.png"></span>) to form its characters. The placement and varying repetition of this symbol on a grid reinforce the stress of serif typefaces. A different variation of the pixel (<span class="pixel font"><img src="star.png"></span>) is used for the serifs, dots, and other aspects, creating a playful distinction. The serifs are also tapered, and the letters have a slightly tilted axis, resembling old-style serifs.
    </p>
    `
  }
})


// Function to convert hex color code to RGB
function hexToRgb(hex) {
  // Remove the hash sign if it exists
  hex = hex.replace(/^#/, '');

  // Parse the hexadecimal values for each color component
  var bigint = parseInt(hex, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return r + ',' + g + ',' + b;
}




