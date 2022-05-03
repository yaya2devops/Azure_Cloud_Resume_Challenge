window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});

CONST functionApi = "https://azureresumefct4thewin.azurewebsites.net/api/GetResumeCounter?code=A1W0zhui13mdNmGx9venQfcF5JE2UPQZQN0v1qEMDWTMmZ2j0V9S/w==";
const LocalfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
  let count = 30;
  fetch(functionApi)
    .then(response => {
      return response.json()
    })
    .then(response => {
      count = response.Count;
      console.log(response);
      console.log("Hello 👋, you are visitor number - " + count);
      document.getElementById('counter').innerText = count;
    }).catch(function (error) {
      console.log(error);
    });
  return count;
}