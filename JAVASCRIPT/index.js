let mensagem1 = "a"
let mensagem2 = "b"
let mensagem3 = "c"

console.log(mensagem1)
console.log(mensagem2)



console.log(mensagem3)

let exemplo1 = "1"
let exemplo2 = 1
console.log(exemplo1+exemplo1)
console.log(exemplo2+exemplo2)

const nome = "WENDE"
const nome2 = "MOCAMBINHO"
const nome3 = `www.${nome}${nome2}.com.br`
console.log(nome3)


console.log(5+3)
console.log(10 % 3)


let preco = 20
let quantidade = 3
let total = preco*quantidade
console.log(`Total a pagar : R$${total}`)


const nota1 = 10
const nota3 = 10 
const nota2 = 8.5
const mdia = (nota1 + nota2 + nota3)/3
console.log(`A média do aluno foi: ${mdia}`)


let a = 10
a += 5
console.log(a)



let saldo = 100
saldo -= 20
console.log("Saldo atual " , saldo)



let quantia = 0
quantia += 50
quantia += 50
quantia -= 30
console.log(quantia )

console.log(5 == '5')
console.log(5 === '5')



let idade = 18

console.log(idade>=18)
let senhacerta = '1234'
let senhadigitada = '1234'
console.log(senhacerta === senhadigitada)



let temperatura =12


if (temperatura > 30){
    console.log("Esta quente")
}
else{
    console.log("Esta frio")
}

console.log(true && false)
console.log(true|| false)


let age = 20
let temcarteira = true
let podedirigir = idade>=18 && temcarteira
console.log('Pode dirigir?' , podedirigir)

console.log("Ta quente?", temperatura>30)


let age2 = 17
if(age2 >= 18){
 console.log("Maior de idade")
}else {
    console.log("Menor de idade")
}

let NOTA = 7
if (NOTA >=7){
    console.log("Aprovado")
}else if (NOTA>= 5){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}
 

let PONTOS = 14
console.log(PONTOS > 100 ? "Você venceu!!" : "Você perdeu!!")


let aluno ={
    nome: "Ana",
    idade:16,
    nota:4,
    situação:null
}
if(aluno.nota>=7){
    aluno.situação = "Aprovado"
}else{
    aluno.situação = "Reprovado"
}
console.log("NOME : ", aluno.nome)
console.log("NOTA:", aluno.nota)
console.log("SITUAÇÃO:",aluno.situação)


let carro ={
   modelo:"CIVIC",
   ano : 2020,
   automatico:null,
}
console.log("o carro modelo Civic do ano 2020 é automático?" , carro.ano >= 2020 ? carro.automatico = true : carro.automatico = false)
