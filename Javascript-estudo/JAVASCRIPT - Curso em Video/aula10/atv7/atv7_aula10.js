var a = window.document.getElementById('area');
var b = window.document.getElementById('area2');

b.addEventListener('click', clicar1);
b.addEventListener('mouseenter', entrar1);
b.addEventListener('mouseout', sair1);
b.addEventListener('mousemove', mover1);
b.addEventListener('mousedown', segurar1);
b.addEventListener('mouseup', soltar1);


function clicar(){
    a.innerText = 'Clicou!'
    a.style.background = 'red'
}
function entrar(){
    a.innerText = 'Entrou!'
}
function sair(){
    a.innerText = 'Saiu'
    a.style.background = 'green'
}

function clicar1(){
    b.innerText = 'Clicou!'
    b.style.background = 'red'

}
function entrar1(){
    b.innerText = 'Entrou!'

}
function sair1(){
    b.innerText = 'Saiu'
    b.style.background = 'green'
}

function mover1(){
    b.innerText = 'Movendo'
}
function segurar1(){
    b.innerText = 'Segurando'
    b.style.background = 'yellow'
}

function soltar1(){
    b.innerText = 'Soltou!'
    b.style.background = 'blue'
}