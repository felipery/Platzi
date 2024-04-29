const input = document.querySelector('.input-text')
const bookList = document.querySelector('ul');
const addBtn = document.querySelector('.btn-add');
const removeBtn = document.querySelector('.btn-remove');
let text = "";

let books = [];


addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  text = input.value.toLowerCase();


  if (books.includes(text)) {
    alert("El libro ya existe, ingrese otro")
  } else if (input.value === "") {
    alert("No has ingresado ningún libro, favor digita un título")
  } else {
    books.push(text);
    showBooks();
  }

  input.value = "";

})

function showBooks() {
  const li = document.createElement('li')
  const p = document.createElement('p')
  p.textContent = text.charAt(0).toUpperCase() + text.slice(1);
  return books.forEach(element =>
    li.appendChild(p),
    bookList.appendChild(li))
}

removeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  text = input.value.toLowerCase();
  /*   books.forEach((b, index) => books[index] === text ? books.toSpliced(1, index) : "") */

  const sameText = books.some((element, index) => text === element ? true : "hola")
  const li = document.querySelectorAll("li")

  if (books.length > 0) {
    if (sameText && text.length > 0) {
      console.log("el libro existe")
      for (let index = 0; index < books.length; index++) {
        if (books[index] === text) {
          books.splice(index, 1);
          console.log(books);

          break;
        }

      }
    } else {
      console.log("No hay coincidencias con el título")
      showBooks()
    }
    showBooks()

  } else {
    alert("No hay libros en la lista")
  }

  input.value = "";
}) 