const API_URL = 'https://icanhazdadjoke.om/';

const newJoke = data =>
  document.querySelector('#jokeContainer').innerHTML = data;

const fetchJoke = async () => {
  const header = {
    method: 'GET',
    headers: { 'Accept': 'application/json' },
  };

  try {
    const response = await fetch(API_URL, header);
    const data = await response.json();
    newJoke(data.joke);
  } catch (error) {
    newJoke('Não foi possível acessar https://icanhazdadjoke.com/');
    throw new Error('Não foi possível acessar https://icanhazdadjoke.com/')
  }

};

window.onload = () => fetchJoke();