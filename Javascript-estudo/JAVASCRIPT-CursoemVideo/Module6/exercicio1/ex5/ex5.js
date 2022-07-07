var numero = document.getElementById('numero');
var numeroarrays = []

function log(){
    let resposta = document.querySelector('select#resposta');

    if(numero.value.length == 0){
        alert('Adicione números de 1 a 100')
    }else if(numero.value <= 1 || numero.value >= 100){
        alert('Valor inválido! Adicione números entre 1 e 100')
    }else{
        let pos = numeroarrays.indexOf(numero.value)

        if(pos == -1){
            numeroarrays.push(numero.value)
            console.log(numeroarrays);
            resposta.innerHTML += `<option> Valor ${numero.value} adicionado! </option>`
        }else{
            alert('Valor já encontrado')
        }
    }
}

function finalizar(){
    let paragrafo = document.querySelector('div.paragrafos');

    if(numeroarrays.length == 0){
        alert('Para finalizar adicione valores')
    }else{
        paragrafo.innerHTML += `<p> Ao todo, temos 5 números cadastrados </p>`
        paragrafo.innerHTML += `<p> O maior valor informado foi 9 </p>`
        paragrafo.innerHTML += `<p> O menor valor informado foi 1 </p>`
        paragrafo.innerHTML += `<p> Somando todos os valores, temos 25 </p>`
        paragrafo.innerHTML += `<p> A média dos valores digitados é 5 </p>`

    }
}