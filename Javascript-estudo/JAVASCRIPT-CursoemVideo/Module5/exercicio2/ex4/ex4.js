function contar(){
    let numero = document.querySelector('input#numero')
    let calculo = document.querySelector('p#calculo')

    numeronum = Number(numero.value);

    if(numero.value.length == 0){
        alert('Impossível Contar')
    }else{
        for(var i=0;i<=10;i++){
            res = numeronum * i
            calculo.innerHTML += `${numeronum} x ${i} = ${res} <br>`
        }

    }



}