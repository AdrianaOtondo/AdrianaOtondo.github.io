const requestURL = 'https://adrianaotondo.github.io/project/json/directory.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const restaurants = jsonObject['restaurants'];
        for (let i = 0; i < restaurants.length; i++) {
            let card = document.createElement('section');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img');
            h3.textContent = restaurants[i].name;
            p1.textContent = 'Number to contact:' + ' ' + restaurants[i].phone;
            p2.textContent = 'Facebook:' + ' ' + restaurants[i].facebook;
            image.setAttribute('src', restaurants[i].logo);;
            card.appendChild(h3);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);
        }
    })