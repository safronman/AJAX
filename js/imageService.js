// Использоваие jQuery
function getImages(pageNumber) {
  let promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
  return promise;
}
