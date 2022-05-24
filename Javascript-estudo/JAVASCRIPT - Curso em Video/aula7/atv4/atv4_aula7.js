
        //Operadores Aritméticos

        var n1 = window.prompt('Digite o primeiro número:')
        var n2 = window.prompt('Digite o segundo número:')


        var r1 = n1 + n2
        var r2 = n1 - n2
        var r3 = n1 * n2
        var r4 = n1 / n2
        var r5 = n1 % n2
        var r6 = n1 ** n2

        document.write(`Os resultados dos números ${n1} e ${n2} de cada operação são:<br/> 
        Adição: ${r1}<br/> 
        Subtração: ${r2}<br/> 
        Multiplicação: ${r3}<br/> 
        Divisão: ${r4}<br/> Resto da divisão: ${r5}<br/> Potênica: ${r6}`)

            //Ordem de precedência dos operadores
                //1º Os parenteses
                //2º Potência
                //3º Multiplição, Divisão e Resto da Divisão
                //4º Adição e Subtração

                //Utilizando atribuição simples - NODEjs
                var a = 5 + 3
                var b = a % 5
                var c = 5 * b ** 2
                var d = 10 - a / 2
                var e = 6 * 2 / d
                var f = b % e + 4 / e

                //Utilização auto-atribuição
                var n = 3 
                n = n + 4
                    n += 4 //auto referência
                n = n - 5
                    n -= 5
                n = n * 4
                    n *= 4
                n = n / 2
                    n /= 2
                n = n ** 2
                    n **= 2
                n = n % 5
                    n %= 5
        n1.toLocaleString("pt-BR",{style:'currency', currency:'BRL'})

