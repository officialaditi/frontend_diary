

const url = "https://cat-fact.herokuapp.com/facts";
const text = document.querySelector(".text");
const btn = document.querySelector('.btn');



const getFact = async () => {
  let store = await fetch(url);
  let response = await store.json();
  text.innerText = response[3].text
};


btn.addEventListener('click', getFact)