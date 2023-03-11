import global from '../utility/global.js';
import URL_FILE from '../utility/urls.js';

export default useRepo = {
  doPredict(data, callback) {
    fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        callback(responseJson);
      })
      .catch(error => {
        console.error(error);
      });
  },
};
