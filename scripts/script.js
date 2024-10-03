const scrollContainer = document.querySelector('.scroll-container');
const grid = document.querySelector('.grid');

let isDragging = false;
let startX, startY;
let scrollLeft, scrollTop;

// Function to duplicate the images for infinite effect
function duplicateImages() {
  const images = document.querySelectorAll('.grid img');
  if (images.length === 0) return; // Prevent duplication if no images exist
  images.forEach(image => {
    const clone = image.cloneNode(true);
    grid.appendChild(clone);
  });
}

// Duplicate images multiple times to ensure smooth infinite scrolling
for (let i = 0; i < 10; i++) {
  duplicateImages();
}

// Drag to scroll functionality
scrollContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - scrollContainer.offsetLeft;
  startY = e.pageY - scrollContainer.offsetTop;
  scrollLeft = scrollContainer.scrollLeft;
  scrollTop = scrollContainer.scrollTop;
  e.preventDefault(); // Prevent text selection
});

scrollContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});

scrollContainer.addEventListener('mouseup', () => {
  isDragging = false;
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const y = e.pageY - scrollContainer.offsetTop;
  const walkX = (x - startX) * 2; // Increase scroll speed by multiplying the difference
  const walkY = (y - startY) * 2;
  scrollContainer.scrollLeft = scrollLeft - walkX;
  scrollContainer.scrollTop = scrollTop - walkY;
});

// Touch support for mobile devices
scrollContainer.addEventListener('touchstart', (e) => {
  isDragging = true;
  const touch = e.touches[0];
  startX = touch.pageX - scrollContainer.offsetLeft;
  startY = touch.pageY - scrollContainer.offsetTop;
  scrollLeft = scrollContainer.scrollLeft;
  scrollTop = scrollContainer.scrollTop;
}, { passive: true }); // Improves performance for touch events

scrollContainer.addEventListener('touchend', () => {
  isDragging = false;
});

scrollContainer.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const touch = e.touches[0];
  const x = touch.pageX - scrollContainer.offsetLeft;
  const y = touch.pageY - scrollContainer.offsetTop;
  const walkX = (x - startX) * 2;
  const walkY = (y - startY) * 2;
  scrollContainer.scrollLeft = scrollLeft - walkX;
  scrollContainer.scrollTop = scrollTop - walkY;
}, { passive: true });
// header
function myFunction() {
  const navLinks = document.querySelector('.nav-links');
  const rightNav = document.querySelector('.right-nav');
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
    rightNav.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    rightNav.style.display = "flex";
  }
}
