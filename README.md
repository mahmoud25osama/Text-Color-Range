# Text Color Range

A dynamic web application that allows users to change text color in real-time using RGB color sliders. Built with HTML5, CSS3, JavaScript, and Bootstrap 5.

##  Description

This project demonstrates how to create an interactive color picker using range sliders. Users can adjust Red, Green, and Blue values independently to see the text color change dynamically. The application provides immediate visual feedback and displays the exact RGB values being used.

##  Features

- **Real-time Color Updates**: Text color changes instantly as you adjust the sliders
- **RGB Value Display**: Shows the exact RGB values (0-255) for each color channel
- **Bootstrap Integration**: Modern, responsive design using Bootstrap 5
- **Visual Feedback**: 
  - Color-coded sliders (red, green, blue)
  - Badge indicators for current values
  - Pulse animation on color change
- **Accessibility**: 
  - Keyboard navigation support (arrow keys)
  - Proper ARIA labels
  - High contrast mode support
- **Smart Background**: Automatically adjusts background color for better text readability
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

##  Project Structure

```
text-color-range/
│
├── index.html      # Main HTML file with Bootstrap structure
├── style.css       # Custom CSS styles and animations
├── script.js       # JavaScript functionality and event handlers
└── README.md       # Project documentation
```

##  Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling and animations
- **JavaScript**: DOM manipulation and event handling
- **Bootstrap 5**: Responsive grid system and UI components
- **CDN**: Bootstrap loaded via CDN for easy setup

##  Installation

1. Clone or download the project files to your local machine
2. Ensure all files (index.html, style.css, script.js) are in the same directory
3. No additional installation required - Bootstrap is loaded via CDN

##  Usage

1. Open `index.html` in any modern web browser
2. Use the sliders to adjust color values:
   - **Red Slider**: Controls the red channel (0-255)
   - **Green Slider**: Controls the green channel (0-255)
   - **Blue Slider**: Controls the blue channel (0-255)
3. Watch the demo text change color in real-time
4. View the exact RGB values below the demo text

### Keyboard Shortcuts

- **Arrow Up/Right**: Increase slider value by 5
- **Arrow Down/Left**: Decrease slider value by 5
- **Tab**: Navigate between sliders

##  Customization

### Changing the Demo Text
Edit the text in `index.html`:
```html
<h4 class="mb-0">Your custom text here</h4>
```

### Modifying Slider Colors
Update the CSS in `style.css`:
```css
.red-slider::-webkit-slider-thumb {
    background-color: #your-color;
}
```

### Adjusting Animation Speed
Modify the pulse animation in `script.js`:
```javascript
setTimeout(() => {
    demoText.classList.remove('pulse');
}, 300); // Change 300 to your desired duration
```

##  Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

##  Responsive Breakpoints

- **Desktop**: Full layout with large card
- **Tablet**: Adjusted padding and font sizes
- **Mobile**: Compact layout with smaller text

##  Code Highlights

### Dynamic Color Update Function
```javascript
function updateColor() {
    const red = parseInt(redSlider.value);
    const green = parseInt(greenSlider.value);
    const blue = parseInt(blueSlider.value);
    
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    demoText.style.color = rgbColor;
}
```

### Brightness Calculation
The application calculates text brightness to ensure readability:
```javascript
const brightness = (red * 299 + green * 587 + blue * 114) / 1000;
```

##  Learning Outcomes

This project demonstrates:
- DOM manipulation with JavaScript
- Event handling and listeners
- CSS custom properties and animations
- Bootstrap component integration
- Responsive web design principles
- Accessibility best practices

##  Contributing

Feel free to fork this project and submit pull requests for any improvements:
- Additional color formats (HEX, HSL)
- Copy color to clipboard feature
- Color preset buttons
- History of selected colors

##  License

This project is open source and available for educational purposes.



##  Author

**Mahmoud Osama**
🔗 [GitHub Profile](https://github.com/mahmoud25osama)



---

