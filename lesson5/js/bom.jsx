const input = document.querySelector('#favchap');
const button = document.querySelector('#addbutton');
const myList = document.querySelector('#list');

addbutton.addEventListener('click', () => {
    let textContet = document.createElement('li');
    textContet.value = input.textContent;
    let button = document.createElement('deletebutton');
    button.value = '❌';
    myList.append("textContet");
    myList.append(button.value);
  });

 



  