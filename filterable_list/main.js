// Variables
let input = document.querySelector('#main-input');
let ulA = document.querySelector('#ul-A');
let ulB = document.querySelector('#ul-B');
let ulC = document.querySelector('#ul-C');

// Convert HTMLCollection to Array
liA = Array.from(ulA.children);
liB = Array.from(ulB.children);
liC = Array.from(ulC.children);

input.addEventListener('input', processInput);

function processInput(e) {  
  processArray(liA, e);
  processArray(liB, e);
  processArray(liC, e);
}

function processArray(array, e){
  array.forEach(li => {
    if(li.textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1){
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
}

