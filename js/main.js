let inputEl = document.querySelector('.ajax-input');
let button = document.querySelector('.ajax-btn');

button.addEventListener('click', makeRequest);

function makeRequest() {
  $.ajax(`https://repetitora.net/api/JS/Images?page=${inputEl.value}&count=1`, {
    success: function (data) {
      data.forEach(el => {
        let content = document.querySelector('.response');
        let img = document.createElement('img');
        img.src = el.thumbnail;
        content.appendChild(img);
      });
    }
  });
}
