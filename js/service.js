// Использоваие jQuery
// function getImages(pageNumber) {
//   let promise = $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
//   return promise;
// }

// Использоваие axios
function getImages(pageNumber) {
  let promise = axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`);
  return promise.then((response) => {
    return response.data;
  });
}
