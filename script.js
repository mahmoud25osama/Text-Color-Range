// Color Range Slider Functionality

// Get DOM elements
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

const demoText = document.getElementById('demoText');
const rgbDisplay = document.getElementById('rgbDisplay');

// Function to update color based on slider values
function updateColor() {
    // Get current slider values
    const red = parseInt(redSlider.value);
    const green = parseInt(greenSlider.value);
    const blue = parseInt(blueSlider.value);
    
    // Update value displays in badges
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;
    
    // Create RGB color string
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    
    // Apply color to demo text
    demoText.style.color = rgbColor;
    
    // Update RGB display
    rgbDisplay.textContent = `RGB(${red}, ${green}, ${blue})`;
    
    // Add visual feedback - pulse animation when color changes
    demoText.classList.add('pulse');
    setTimeout(() => {
        demoText.classList.remove('pulse');
    }, 300);
    
    // Calculate brightness to adjust background if text becomes hard to read
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    if (brightness < 50) {
        demoText.style.backgroundColor = '#f8f9fa';
    } else if (brightness > 200) {
        demoText.style.backgroundColor = '#343a40';
    } else {
        demoText.style.backgroundColor = '';
    }
}

// Add event listeners for real-time updates
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Add keyboard support for accessibility
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

// Initialize with default color
updateColor();

// Add pulse animation style dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
        }
    }
    
    .pulse {
        animation: pulse 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);
