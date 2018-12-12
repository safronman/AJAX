$.ajax('https://repetitora.net/api/JS/Images', {
    success: function (data) {
      data.forEach(el => {
        let content = document.querySelector('.content');
        let img = document.createElement('img');
        img.src = el.thumbnail;
        content.appendChild(img);
      });
    }
  });
