function getImages(pageNumber, succesCallback) {
  $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
    success: function (data) {
      succesCallback(data);
    }
  });
}
