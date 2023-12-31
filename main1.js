document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('text');
  const slider = document.getElementById('slider');
  let weight = 40; // Default weight until the slider is used

  // Flag to track whether the cursor has been moved
  let cursorMoved = false;

  // Event listener for mousemove to track cursor position
  document.addEventListener('mousemove', function (e) {
    if (!cursorMoved) {
      // Initial font size change when the cursor is first moved
      textElement.style.fontSize = '10vw';
       textElement.style.marginTop = '30vh';
      cursorMoved = true;
    }

    // Get the percentage of cursor position from left to right
    const percentage = (e.clientX / window.innerWidth) * 100;

    // Map the percentage to the range of font width (0 to 100)
    const fontWidth = Math.round((percentage / 100) * 100);

    // Update the font width and weight based on cursor position
    textElement.style.fontVariationSettings = `'wdth' ${fontWidth}, 'wght' ${weight}`;
  });

  // Event listener for slider input
  slider.addEventListener('input', function (e) {
    weight = e.target.value; // Update the weight variable
  });
});
