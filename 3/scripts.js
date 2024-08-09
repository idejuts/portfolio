      // Add an event listener to handle scroll events
      window.addEventListener('scroll', () => {
        // Get the current scroll position
        let scrollTop = window.scrollY;

        // Calculate a new value for border-image-slice based on the scroll position
        // Adjust the multiplier to change the effect speed
        let newBorderSliceValue = 80 + scrollTop / 2;
        let newGradientValue = 40 + scrollTop / 10;
        // Get the element you want to change
        const borderChange = document.querySelector('.hero h1');
        const gradientChange = document.querySelector('.hero-bg');
        // Set the new border-image-slice value
        borderChange.style.borderImageSlice = `${newBorderSliceValue} fill`;
        gradientChange.style.background = `
        repeating-conic-gradient(
          rgba(0, 0, 0, 0.077) 0%,
          transparent 0.00003%,
          transparent 0.0005%,
          transparent 0.0001%
        ),
        repeating-conic-gradient(
          rgba(255, 255, 255, 0.052) 0%,
          transparent 0.00005%,
          transparent 0.00015%,
          transparent 0.0009%
        ),
        linear-gradient(160deg, var(--c1) calc(${newGradientValue}% + 20px), var(--c4) 0),
        linear-gradient(-120deg, var(--c1) calc(70% + 20px), var(--c4) 0)
      `;
    });