// EXERCÍCIO

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos)

paragrafos.forEach((item) => {
  console.log(item.innerText);
})
// Mostre o texto dos parágrafos no console

// Como corrigir os erros abaixo:
const imgs5 = document.querySelectorAll('img');

imgs5.forEach((item, index) => {
  console.log(item, index);
});

let i1 = 0;
imgs.forEach(() => {
 console.log(i1++);
 });

imgs.forEach(() => i++);