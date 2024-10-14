const one = document.getElementById('one');
const two = document.getElementById('two');

const map = document.getElementById('mapa');
const cards = document.getElementById('cards');

const elements = [one, two];

elements.forEach(element => {
  element.addEventListener('click', () => {
    if(cards.style.display === 'none') {
      map.style.display = 'none';
      cards.style.display = 'flex';
    }else {
      cards.style.display = 'none';
      map.style.display = 'flex';
      map.style.flexDirection = 'column';
      map.style.gap = '40px';
    }
    })});