const contents = document.querySelectorAll('.content');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
let currentIndex = 0;

// Function to update visibility of content
const updateVisibility = () => {
    contents.forEach((content, index) => {
        content.classList.toggle('visible', index === currentIndex);
    });
};

// Add event listener for left arrow click
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + contents.length) % contents.length;
    updateVisibility();
});

// Add event listener for right arrow click
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % contents.length;
    updateVisibility();
});

// Initial display setup
updateVisibility();