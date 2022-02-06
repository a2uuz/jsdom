
// let body = document.body;


// body.addEventListener(`click`, () => {

// alert (`You clicked the body page`);

// });

let botn = document.getElementById('btn-main');
let headingOne = document.getElementById('headline');
let items = document.getElementsByTagName('li');
let highlights = document.getElementsByClassName('high');

for (const high of highlights) {
    high.style.backgroundColor = 'cornsilk';
}


const colors = ["#C2272D", "#F8931F", "#009245", "#0193D9", "#0C04ED", "#612F90"];

 for (let i = 0; i < items.length; i++) {
      items[i].style.color = colors[i];    
    }

botn.addEventListener(`click`, () =>{
  headingOne.style.fontSize = '6rem';  
  headingOne.style.color = 'tomato';  

})