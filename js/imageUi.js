let imgBtn = document.querySelector('.btn--images');
let pageNumberEl = document.querySelector('.input--page-number');

imgBtn.addEventListener('click', () => {
  getImages(pageNumberEl.value)
    .then(renderImages);
});

function renderImages(images) {
  images.forEach(el => {
    let result = document.querySelector('.recievedImages');
    let img = document.createElement('img');
    img.src = el.thumbnail;
    result.appendChild(img);
  });
};
