let squares = 16;

function setPad() {
  for (let i = 0; i < squares * squares; i++) {
    const square = document.createElement('div');
    square.style.width = `${100 / squares}%`;
    square.style.height = `${100 / squares}%`;
    document.getElementById('container').appendChild(square);

    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'orange';
    })
  }
}


function resetPad() {
  const reset = document.getElementById('reset');
  const pad = document.getElementById('container');

  reset.addEventListener('click', () => {

    pad.innerText = '';

    for (let i = 0; i < squares * squares; i++) {
      const square = document.createElement('div');
      square.style.width = `${100 / squares}%`;
      square.style.height = `${100 / squares}%`;
      pad.appendChild(square);

      square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'orange';
      })
    }
  })
}


function randomColor() {
  const random = document.getElementById('random');
  const pad = document.getElementById('container');

  random.addEventListener('click', () => {
    const squares = pad.children;

    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('mouseover', (e) => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      })
    }
  })
}


function newSize(newSize) {
  const pad = document.getElementById('container');
  pad.innerText = '';

  for (let i = 0; i < newSize * newSize; i++) {
    const square = document.createElement('div');
    square.style.width = `${100 / newSize}%`;
    square.style.height = `${100 / newSize}%`;
    pad.appendChild(square);

    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'orange';
    })
  }
}


function setSize() {
  const setSize = document.getElementById('sizeBtn');
  setSize.addEventListener('click', checkInput);

  const sizeInput = document.getElementById('input');
  sizeInput.onfocus = function() {
    if (this.value) {
      this.value = '';
    } 
  };
}  

function checkInput() {
  const sizeInput = document.getElementById('input');
  const newSizeValue = sizeInput.value;

  if (newSizeValue > 200) {
    newSizeValue = 200;
  }

  if (!newSizeValue || isNaN(newSizeValue)) {
    resetPad();
    return;
  }

  newSize(newSizeValue);
}


setPad();
resetPad();
randomColor();
setSize();