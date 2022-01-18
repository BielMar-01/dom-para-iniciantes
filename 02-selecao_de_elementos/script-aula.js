// EXERCÍCIO

// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll('img');
console.log(todasImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const todasImgAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(todasImgAnimais);

// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

// Selecione o primeiro h2 dentro de .animais-descricao

// const animais = document.querySelector('.animais-descricao h2'); 1º Jeito a se fazer
const animaish2 = document.querySelector('.animais-descricao');
const h2Animais = animaish2.querySelector('h2');

console.log(animais);
console.log(h2Animais);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);
console.log(paragrafos[--paragrafos.length]);
// console.log(paragrafos[paragrafos.length - 1]);
