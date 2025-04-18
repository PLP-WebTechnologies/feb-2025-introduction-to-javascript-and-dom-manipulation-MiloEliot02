document.addEventListener("DOMContentLoaded", function() {
    const changeTextButton = document.getElementById("changeTextButton");
    const dynamicText = document.getElementById("dynamicText");
    const changeStyleButton = document.getElementById("changeStyleButton");
    const styledText = document.getElementById("styledText");
    const toggleElementButton = document.getElementById("toggleElementButton");
    const dynamicContainer = document.getElementById("dynamicContainer");

    // Change text content dynamically
    changeTextButton.addEventListener("click", function() {
        dynamicText.textContent = "The text has been changed!";
    });

    // Modify CSS styles via JavaScript
    changeStyleButton.addEventListener("click", function() {
        styledText.style.color = "blue";
        styledText.style.fontSize = "20px";
        styledText.style.fontWeight = "bold";
    });

    // Add or remove an element when a button is clicked
    toggleElementButton.addEventListener("click", function() {
        const newElement = document.createElement("p");
        newElement.textContent = "This is a new dynamic element!";
        if (dynamicContainer.contains(newElement)) {
            dynamicContainer.removeChild(newElement);
        } else {
            dynamicContainer.appendChild(newElement);
        }
    });

    // Select the button
    const celebrateButton = document.getElementById('celebrateButton');

    // Add click event listener to trigger confetti
    celebrateButton.addEventListener('click', () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.5, y: 0.5 } // Center of the page
        });
    });
});
