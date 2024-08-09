// Cache the elements outside of the scroll event
const borderChange = document.querySelector('.hero h1');

// Function to update styles
function updateStyles(scrollTop) {
  // Set a limit for the scroll effect (in this case, 100svh, or 100% of the viewport height)
  const scrollLimit = window.innerHeight; // 100svh equivalent

  // Stop updating styles if the scroll limit is reached
  if (scrollTop >= scrollLimit) {
    return;
  }

  // Calculate new values based on the scroll position
  let newBorderSliceValue = 80 + scrollTop / 2;

  // Update the styles
  borderChange.style.borderImageSlice = `${newBorderSliceValue} fill`;
}

// Throttle function to limit how often the scroll handler is called
function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn(...args);
    }
  };
}

// Optimized scroll event handler using requestAnimationFrame
function handleScroll() {
  const scrollTop = window.scrollY;
  requestAnimationFrame(() => updateStyles(scrollTop));
}

// Add the throttled scroll event listener
window.addEventListener('scroll', throttle(handleScroll, 50));
