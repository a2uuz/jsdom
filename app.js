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
})