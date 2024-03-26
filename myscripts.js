const slider = document.getElementById("colorSlider");
const colors = ["#ffffff", "#ffffff", "#c9a151", "#330066", "#0c0e12"]; // Colors corresponding to the gradient

slider.addEventListener("input", function() {
  const value = parseInt(this.value);
  const colorIndex = Math.floor((value / 100) * (colors.length - 1)); // Calculate color index based on slider value
  const nextColorIndex = Math.min(colorIndex + 1, colors.length - 1);
  const fraction = (value % (100 / (colors.length - 1))) / (100 / (colors.length - 1));
  const color = interpolateColor(colors[colorIndex], colors[nextColorIndex], fraction);
  const textColor = interpolateColor("#000000", "#FFFFFF", fraction); // Interpolate text color between black and white
  document.body.style.background = color;
  document.body.style.color = textColor; // Set interpolated text color
});

// Function to interpolate color between two colors
function interpolateColor(color1, color2, fraction) {
  const r = Math.round(parseInt(color1.substring(1, 3), 16) * (1 - fraction) + parseInt(color2.substring(1, 3), 16) * fraction);
  const g = Math.round(parseInt(color1.substring(3, 5), 16) * (1 - fraction) + parseInt(color2.substring(3, 5), 16) * fraction);
  const b = Math.round(parseInt(color1.substring(5, 7), 16) * (1 - fraction) + parseInt(color2.substring(5, 7), 16) * fraction);
  return `rgb(${r},${g},${b})`;
}
