
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

const demoText = document.getElementById('demoText');
const rgbDisplay = document.getElementById('rgbDisplay');

function updateColor() {
    const red = parseInt(redSlider.value);
    const green = parseInt(greenSlider.value);
    const blue = parseInt(blueSlider.value);
    
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
    
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    
    demoText.style.color = rgbColor;
    
    rgbDisplay.textContent = `RGB(${red}, ${green}, ${blue})`;
    
    
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    if (brightness < 50) {
        demoText.style.backgroundColor = '#f8f9fa';
    } else if (brightness > 200) {
        demoText.style.backgroundColor = '#343a40';
    } else {
        demoText.style.backgroundColor = '';
    }
}

redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

function handleKeyboard(event, slider) {
    if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
        slider.value = Math.min(parseInt(slider.value) + 5, 255);
        updateColor();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
        slider.value = Math.max(parseInt(slider.value) - 5, 0);
        updateColor();
    }
}

redSlider.addEventListener('keydown', (e) => handleKeyboard(e, redSlider));
greenSlider.addEventListener('keydown', (e) => handleKeyboard(e, greenSlider));
blueSlider.addEventListener('keydown', (e) => handleKeyboard(e, blueSlider));

updateColor();

