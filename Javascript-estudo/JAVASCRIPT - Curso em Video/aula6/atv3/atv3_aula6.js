var nome = window.prompt('Digite o seu nome:');

        //Quantidade de caracteres/ Maiusculo, Minusculo
        document.write(`O seu nome é ${nome} e tem ${nome.length} caracteres,<br/> 
        colocando todos os caracteres em Maiúsculo fica dessa maneira: ${nome.toUpperCase()},<br/>
        colocando todos os caracteres em Minúsculo fica dessa maneira: ${nome.toLowerCase()} <br/>`);


        //Node JS
        var n1 = window.prompt('Digite um número real:');
        var n2 = n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        document.write(`O número real digitado fica assim quando convertido para a moeda do Brasil (Real R$): ${n2}`);