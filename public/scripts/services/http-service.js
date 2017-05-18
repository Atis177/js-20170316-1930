class HttpService {
  static getJSON(url, successCallback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = () => {
      if (xhr.status !== 200) {
        alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
      } else {
        let data = JSON.parse(xhr.responseText);

        successCallback(data);
      }
    };

    xhr.send();
  }
}
