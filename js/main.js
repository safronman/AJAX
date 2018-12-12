let pageNumberEl = document.querySelector('.ajax-input');
let button = document.querySelector('.ajax-btn');

button.addEventListener('click', () => {
  let promise = getImages(pageNumberEl.value);
  promise.then(onDataRecieved);
});


function onDataRecieved(array) {
  array.forEach(el => {
    let result = document.querySelector('.resultBlock');
    let img = document.createElement('img');
    img.src = el.thumbnail;
    result.appendChild(img);
  });
}
