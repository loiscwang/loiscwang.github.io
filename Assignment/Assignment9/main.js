const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg' : 'Lois and Elin in LA',
    'pic2.jpg' : 'Lois and Emma in a Uber',
    'pic3.jpg' : 'Uppies on game day',
    'pic4.jpg' : 'Lois and Zhanna at Pike Place',
    'pic5.jpg' : 'Yellowstone National Park'
}

/* Looping through images */
for (const pic of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${pic}`);
  newImage.setAttribute('alt', alts[pic]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute("class",'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute("class",'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  })