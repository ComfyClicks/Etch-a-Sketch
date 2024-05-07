let squares = 16;


  for (let i = 0; i < squares * squares; i++) {
    let square = document.createElement('div');
    square.style.width = `${100 / squares}%`;
    square.style.height = `${100 / squares}%`;
    document.getElementById('container').appendChild(square);

    square.addEventListener('mouseover', (e) => {
      e.target.style.backgroundColor = 'red';
    })
  }

