window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
});


const functionApi = 'http://localhost:7071/api/GetResumeCounter';

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