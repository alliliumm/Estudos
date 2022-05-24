
window.document.write('Olá Mundo!');

//...

window.document.write(window.document.charset);

//...

window.document.write(window.navigator.appName);

//...

window.document.write(window.document.URL); 

//...

// <!-- Método de acesso
// 1. Marca
// 2. ID
// 3. Nome
// 4. Classe
// 5. Seletor -->


// <!-- Marca -->


var p1 = window.document.getElementsByTagName('p')[0]//primeiro parágrafo
window.document.write('Está escrito assim: ' + p1.innerText);//Escrever o texto que está no primeiro parágrafo
p1.style.color = 'blue';//Mudança de cor das letras da frase

//Mudar a cor de fundo pelo DOM
var corpo = window.document.body
corpo.style.background = 'black';

//...

var p2 = window.document.getElementsByTagName('p')[1]
document.write('Escrito assim com innerText: ' + p2.innerText);

//...

document.write('Escrito assim com innerHTML: ' + p2.innerHTML); 

//...

var d = window.document.getElementById('msg');
//var d = document...
d.style.background = 'green';
//d.innerText = 'Estou aguardando...';//Subscreve a frase
window.document.getElementById('msg').innerText = 'Olá';

//...

window.alert(p1.innerHTML);
window.alert(p2.innerHTML);
window.alert(p2.innerText);//Pega sem a formatação 

var t = window.document.getElementsByName('msg')[0];
window.document.write('Escrito a mensagem novamente: ' + t.innerText);

//...

var t = window.document.getElementsByClass('msg1');
window.document.write('Escrito a mensagem novamente: ' + msg1.innerText);

//...

var t = window.document.getElementsByClass('msg1');
window.document.write('Escrito a mensagem novamente: ' + msg1.innerText);

//...

var a = window.document.querySelector('div#msg');//# para id
window.document.write('Escrito com o seletor para id novamente: ' + a.innerText);

//...

var b = window.document.querySelector('div.msg1');// . para classe
window.document.write('Escrito com o seletor para classe novamente: ' + b.innerText);