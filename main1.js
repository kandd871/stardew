document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('text');
  const slider = document.getElementById('slider');
  let weight = 50; // Default weight until the slider is used
  const fontsize = document.getElementById('fontsize');
  const width = document.getElementById('widthmeter');
  const weightmeter = document.getElementById('weightmeter')

  // Flag to track whether the cursor has been moved
  let cursorMoved = false;

  // Event listener for mousemove to track cursor position
  document.addEventListener('mousemove', function (e) {
    if (!cursorMoved) {
      // Initial font size change when the cursor is first moved
      textElement.style.fontSize = '112px';
      textElement.style.marginTop = '37vh';
      fontsize.innerHTML = '';
      fontsize.innerHTML = `128px`;
      cursorMoved = true;
    }

    // Get the percentage of cursor position from left to right
    const percentage = (e.clientX / window.innerWidth) * 100;

    // Map the percentage to the range of font width (0 to 100)
    const fontWidth = Math.round((percentage / 100) * 100);

    // Update the font width and weight based on cursor position
    textElement.style.fontVariationSettings = `'wdth' ${fontWidth}, 'wght' ${weight}`;
    width.innerHTML = '';
    width.innerHTML = `WIDTH: ${fontWidth}`
    weightmeter.innerHTML = '';
    weightmeter.innerHTML = `WEIGHT: ${weight}`

  });

  // Event listener for slider input
  slider.addEventListener('input', function (e) {
    weight = e.target.value; // Update the weight variable
  });

  // Handle placeholder visibility
            textElement.addEventListener('focus', function () {
                if (textElement.innerText.trim() === 'this is...\nstardew!\ntype away.') {
                    textElement.innerText = '';
                    // textElement.classList.remove('placeholder');
                }
            });

            // textElement.addEventListener('blur', function () {
            //     if (textElement.innerText.trim() === '') {
            //         textElement.innerHTML = 'this is...<br>stardew!<br>type away.';
            //         textElement.classList.add('placeholder');
            //     }
            // });

            // textElement.addEventListener('input', function () {
            //     if (textElement.innerText.trim() === '') {
            //         textElement.classList.add('placeholder');
            //     } else {
            //         textElement.classList.remove('placeholder');
            //     }
            // });
});
