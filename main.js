// Declare an array of image filenames
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Loop through the images and append thumbnails to the thumb-bar
const thumbBar = document.querySelector('.thumb-bar');
for (let i = 0; i < imageFiles.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageFiles[i]);
  newImage.setAttribute('alt', 'Image ' + (i + 1));
  thumbBar.appendChild(newImage);

  // Add a click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    const displayedImg = document.querySelector('.displayed-img');
    displayedImg.setAttribute('src', this.getAttribute('src'));
    displayedImg.setAttribute('alt', this.getAttribute('alt'));
  });
}

// Write a handler for the darken/lighten button
const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function() {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
