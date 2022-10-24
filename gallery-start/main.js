const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'ic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg':'Closeup of a human eye',
    'pic2.jpg':'b',
    'pic3.jpg':'c',
    'pic4.jpg':'d',
    'pic5.jpg':'e'
}

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images/$[image]);
    newImage.setAttribute('alt', alts[images]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
      });
}

/* Wiring up the Darken/Lighten button */
