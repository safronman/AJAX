let pageNumberEl = document.querySelector('.ajax-input');
let button = document.querySelector('.ajax-btn');

button.addEventListener('click', () => {
  getImages(pageNumberEl.value, onDataRecieved);
});


function onDataRecieved(data) {
  data.forEach(el => {
    let response = document.querySelector('.resultBlock');
    let img = document.createElement('img');
    img.src = el.thumbnail;
    response.appendChild(img);
  });
}