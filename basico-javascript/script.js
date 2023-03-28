const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);
console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML = 'Patito <br> Feo'; //modifica el h1
h1.innerText = 'Patito <br> Feo'; //inserta texto
console.log(h1.getAttribute('class')); //se trae el atributo solicitado
h1.setAttribute('class', 'rojo'); //modifica el atributo

h1.classList.add('rojo'); //agrega clase.. classList permite varias opciones
input.value = 'hola de nuevo';

const img = document.createElement('img');
img.setAttribute(
  'src',
  'https://st2.depositphotos.com/1102480/7545/i/450/depositphotos_75454855-stock-photo-google-chrome-logo-printed-on.jpg',
);

pid.append(img);
