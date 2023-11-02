const button = document.querySelector('#results');
const p = document.querySelector('#jokes');
const getJokes = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        p.innerHTML = JSON.parse(this.responseText).value;
      } else {
        p.innerHTML = 'Something went wrong(Not funny)';
      }
    }
  };
  xhr.send();
};

button.addEventListener('click', getJokes);
button.addEventListener('DOMContentLoaded', getJokes);
