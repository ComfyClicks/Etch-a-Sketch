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
};


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
};

setPad();
resetPad();