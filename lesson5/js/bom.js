window.onload = () => {
  const myInput = document.querySelector('#favchap');
  const myButton = document.querySelector('#addbutton');
  const myList = document.querySelector('#list');
  
  myButton.addEventListener('click', () => {
    let liElement = document.createElement('li');
    let deleteButton = document.createElement('button');
    deleteButton.textContent = "X";
    liElement.textContent = myInput.value;
    liElement.appendChild(deleteButton);
    myList.appendChild(liElement);

    deleteButton.addEventListener('click', function() {
      myList.removeChild(liElement);
     
    });

    myInput.value = '';
      document.getElementById("favchap").focus();
    

    });

  
}
  