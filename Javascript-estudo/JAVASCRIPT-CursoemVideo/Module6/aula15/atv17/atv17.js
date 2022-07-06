//VARIÁVEIS COMPOSTAS - ARRAYS OU VETORES, OU OBJETOS

let num = [18,45,3,9,55]
num.sort((a,b) => a - b) //Sortear todos os elementos e colocar em ordem crescente 
num.push(7) //Criar mais um elemento na array por último

console.log(num)
console.log(`Nosso vetor é o ${num} e o comprimento é ${num.length}`) //Contar todos os elementos de uma array
console.log(`O primeiro valor é ${num[0]}`)

num[3] = 6 //Escolher a posição para atribuir variável



// let valores = [4,5,7,811,22,34,12,554,67,9,0,8454,54]
// valores.sort((a,b)=> a-b)
// console.log(valores)

// for(let pos = 0; pos < valores.length; pos++){
//     console.log(`O valor da ṕosição ${pos} é ${valores[pos]}`)
// }

// for(let pos in valores){
//     console.log(`O valor da posição ${pos} é ${valores[pos]}`)
// }



let pos = num.indexOf(3)
console.log(`o valor 9 está na posição ${pos}`) // Valor encontrado e é encontrado o seu índice
let pos1 = num.indexOf(8)
console.log(`o valor 9 está na posição ${pos1}`) // Valor não encontrado e nao é encontrado o seu índice

if (pos == -1){
    console.log("O valor não foi encontrado")
}else{
    console.log(`O valor foi encontrado e se encontra na posição ${pos}`)
}

if (pos1 == -1){
    console.log("O valor não foi encontrado")
}else{
    console.log(`O valor foi encontrado e se encontra na posição ${pos}`)
}