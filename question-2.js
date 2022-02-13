// Question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=f4d020bdcf0f496eb6aadd25f237177f";

const resultsContainer = document.querySelector(".container");

async function getApi() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const facts = data.results;

    console.log(data);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="results">
                                    <p class="blue">Name: ${facts[i].name}</p>
                                    <p>Rating: ${facts[i].rating}</p>
                                    <p class="green">Tags: ${facts[i].tags.length}</p>
                                    </div>`;
    }
  } catch (error) {
    console.log("An error has occoured");
    resultsContainer.innerHTML = displayError("An error has occoured");
  }
}

getApi();
