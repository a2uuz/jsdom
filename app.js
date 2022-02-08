let botn = document.querySelector('.btn-main');
let headingOne = document.getElementById('headline');
botn.addEventListener(`click`, () =>{

  // Local Variables
  const input = document.querySelector('.input-main');
  const headingOne = document.getElementById('headline');

//  Asign to the grow class in the stylesheet with transitions
  headingOne.className = 'grow';  

/* innerHTML and textContent read and update 
content in the DOM || and .value reads the value
typed into the field */  
headingOne.innerHTML = input.value;
  input.value = '';

// update button bgcolor and border when heading updates
botn.style.borderBottom = '5px solid deeppink'
botn.style.backgroundColor = 'mediumvioletred' 


})

// Hide and Show List 
const toggleList = document.querySelector('.btn-toggle');
// Event Listener
toggleList.addEventListener('click', () =>{

// The Block of Elements that's gonna be effected when clicked
const showList = document.querySelector('.list-container');

/* if the list is set to display: none show it by turning it back 
  to it is default display: block or else hide it by display:none 
*/
if (showList.style.display === 'none') {
  toggleList.innerHTML = 'Hide List'
  showList.removeAttribute('style');
} else {
  toggleList.innerHTML = 'Show List'
  showList.style.display = 'none';
}

});