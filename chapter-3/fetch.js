import fetch from 'node-fetch';

(async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto/");
  if (response.ok) {
    const result = await response.json();
    console.log(result);
  } else {
    console.log("Dohhh! Failed to get anything!");
  }
})();