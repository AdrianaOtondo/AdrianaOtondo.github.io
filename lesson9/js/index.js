const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
    console.log(chuchaMadre);
  })
  .then(function(jsonObject) {
      const towns = jsonObject['towns'];
          for (let i = 0; i < towns.length; i++ ) {
              let card = document.createElement('section');
              let h2 = document.createElement('h2');
              let h3 = document.createElement('h3');
              let p1 = document.createElement('p');
              let p2 = document.createElement('p');
              let p3 = document.createElement('p');
              let image = document.createElement('img');
              h2.textContent = towns[i].name;
              h3.textContent = towns[i].motto;
              p1.textContent = 'Year Founded' + ' ' + towns[i].yearFounded;
              p2.textContent = 'Population:' + ' ' + towns[i].currentPopulation;
              p3.textContent = 'Annual Rain Fall:' + ' ' + towns[i].averageRainfall;
              image.setAttribute('src', towns[i].imageurl);
              card.appendChild(h2);
              card.appendChild(h3);
              card.appendChild(p1);
              card.appendChild(p2);
              card.appendChild(p3);
              card.appendChild(image);
             document.querySelector('div.cards').appendChild(card);
          }
  })
