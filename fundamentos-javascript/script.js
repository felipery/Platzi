const input = document.querySelector('.input-text')
const bookList = document.querySelector('ul');
const addBtn = document.querySelector('.btn-add');
const removeBtn = document.querySelector('.btn-remove');


const books = [];


addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const text = input.value.toLowerCase();
  const li = document.createElement('li')
  const p = document.createElement('p')

  if (books.includes(text.toLowerCase())) {
    alert("El libro ya existe, ingrese otro")
  } else if (input.value === "") {
    alert("No has ingresado ningún libro, favor digita un título")
  } else {
    books.push(text.toLowerCase());
    p.textContent = text.charAt(0).toUpperCase() + text.slice(1);
    li.appendChild(p)
    bookList.appendChild(li)

  }
  input.value = "";
})

removeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const text = input.value.toLowerCase();



})