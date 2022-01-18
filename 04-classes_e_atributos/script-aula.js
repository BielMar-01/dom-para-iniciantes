// EXERCÍCIO

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
  item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const img1 = document.querySelectorAll('img');
img1.forEach(() => {
  const possuiAtributo = img1.hasAttribute('alt');
  console.log(img1, possuiAtributo);
});

// Modifique o href do link externo no menu
const link = document.querySelectorAll('a[href^="http"]');
link.setAttribute('href', 'http://www.google.com');
