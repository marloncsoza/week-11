const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';




/* set copyright date and current date*/

try{
    const options = { 
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
              
    }; 
    const theYear = {
        year: 'numeric'
    }
    document.getElementById("currentDate").textContent = new Date().toLocaleDateString("en-UK", options);
    document.getElementById("year").textContent = new Date().toLocaleDateString("en-UK", theYear);

}
catch(e){
    alert("error with code or your browser does not support Locale");
}


//to show the banner only on Fridays
let today = new Date();
let dayOfWeek = today.getDay();

if(dayOfWeek == 5){
    document.querySelector(".sb-container").style.display = 'block';
}



let towns = [];


function createarticle(townsList){
    townsList.forEach(towns => {

         let card = document.createElement('section');
        let name = document.createElement('h1');
        let motto = document.createElement("h3");
        let yearFounded = document.createElement("p");
        let currentPopulation = document.createElement("p");
        let averageRainfall = document.createElement("p");
        let photo = document.createElement("img");

      
        name.textContent = `${towns.name}`;
        motto.textContent = ` ${towns.motto}`;
        yearFounded.textContent = `Year founded: ${towns.yearFounded}`;
        currentPopulation.textContent = `Current Population: ${towns.currentPopulation}`;
        averageRainfall.textContent = `Average Rainfall: ${towns.averageRainfall}`;
      
      
      
        photo.setAttribute('src', `images/${towns.photo}`);
        photo.setAttribute('alt', `${towns.name} ${towns.lastname} - ${towns.order}`);


        card.appendChild(name);
        card.appendChild(motto);
        card.appendChild(yearFounded); 
        card.appendChild(currentPopulation); 
        card.appendChild(averageRainfall);
      
        card.appendChild(photo);


        document.querySelector('div.article').appendChild(card);        
    
    });
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
   .then(function (jsonObject) {
    towns = jsonObject['towns'];
    createarticle(towns);
  });