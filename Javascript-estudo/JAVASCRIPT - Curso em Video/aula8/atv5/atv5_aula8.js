
        //Operadores Relacionais

        var n1 = window.prompt('Digite o primeiro número:')
        var n2 = window.prompt('Digite o segundo número:')


        var r1 = n1 > n2 //Retorna valores booleanos true ou false
        var r2 = n1 < n2
        var r3 = n1 >= n2
        var r4 = n1 <= n2
        var r5 = n1 == n2
        var r6 = n1 != n2
        var r7 = n1 === n2

        document.write(`Os resultados dos números ${n1} e ${n2} de cada operação são:<br/> 
        Maior: ${r1}<br/> 
        Menor: ${r2}<br/> 
        Maior ou igual: ${r3}<br/> 
        Menor ou igual: ${r4}<br/> 
        Igual: ${r5}<br/> 
        Não Igual: ${r6}<br/>
        Igualdade Restrita ou Identidade: ${r7}`)

        //Operadores Lógicos
        
        //execute no NODE js
        ! true //= false
        ! false //= true
        
        true && true //= true
        true && false //= false
        false && true //= false
        false && false //= false

        true || true //= true
        true || false //= true
        false || true //= true
        false || false //= false

        var a = 5
        var b = 6

            //Ordem de precedência de operadores
            //1º Operadores Aritmeticos
            //2º Operadores Relacionais
            //3º Operadores Lógicos

            //Ordem de precedência
            //1º Negação !
            //2º Conjunção &&
            //3º Disjunção ||

                var t1 = a > b && b % 2 == 0
                var t2 = a <= b || b /2 == 2 


        //Operador ternário

        //Teste nodejs
        var media = 5.5

        media > 7? "APROVADO" : "REPROVADO" //= REPROVADO

        media += 3 // =8.5

        media > 7 ? "APROVADO" : "REPROVADO" //= APROVADO


        var x = 8
        var res = x % 2 == 0 ? 5 : 9
        x //= 8
        res //= 5


        var idade = 19
        var r = idade >= 18 ? 'MAIOR' : 'MENOR'
        r //= MAIOR


        var tesla = 67
        var teslante = tesla * 9 >= 50 && tesla / 9 > 90 ? 'VERDADEIRO' : 'FALSO'