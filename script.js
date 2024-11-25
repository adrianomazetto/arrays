const numeros =[5,7,6,7,4,3,2]
const frutas = ["Abacaxi","Melancia","Uva"]
const pessoa = ["Adriano", 28, 1.75, true]

console.log(frutas[1]) //Melancia
console.log(numeros[5]) //3
console.log(pessoa[0]) //Adriano

frutas[2] = "Morango"
console.log(frutas)
console.log(frutas.length)

//exeplo de como mostrar o ultimo elemento do array
console.log(frutas[frutas.length - 1])//Mostra o ultimo elemento do array

//podemos somar os elementos do array
console.log(numeros[0] + numeros[1])

//podemos usar o for para mostrar todos os elementos do array
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

//atividade 1
//DADA A LISTA DE LINGUAGEM ["Python", "HTML", "CSS"]
//mostre no console o ultimo elemento da lista
//alterar o valor do primeiro elemento para "JavaScript"

const linguagens = ["Python", "HTML", "CSS"]
console.log(linguagens[linguagens.length - 1])
linguagens[0]= "JavaScript"
console.log(linguagens)

//adicinar um elemento no final do array com push()
const frutas2 = ["laranja", "limão", "acerola", "manga"]
console.log(frutas2)
frutas2.push("goiaba")
console.log(frutas2)

//remover o ultimo elemento do array com pop()
frutas2.pop()
console.log(frutas2)

//adicionar um elemento no inicio do array com unshift()
frutas2.unshift("abacaxi")
console.log(frutas2)

//remover o primeiro elemento do array com shift()
frutas2.shift()
console.log(frutas2)

//atividade 2

//DADA A LISTA DE LINGUAGEM ["Python", "HTML", "CSS"]
//mostre no console o ultimo elemento da lista
//alterar o valor do primeiro elemento para "JavaScript"
//adicionar um elemento no final do array com push()
//remover o ultimo elemento do array com pop()
//adcionar um elemento no inicio do array com unshift()
//remover o primeiro elemento do array com shift()
const linguagens2 = ["Python", "HTML", "CSS"]
console.log(linguagens2[linguagens2.length - 1])
linguagens2[0]= "JavaScript"
console.log(linguagens2)
linguagens2.push("JavaScript")
console.log(linguagens2)
linguagens2.pop()
console.log(linguagens2)
linguagens2.unshift("JavaScript")
console.log(linguagens2)
linguagens2.shift()
console.log(linguagens2)


