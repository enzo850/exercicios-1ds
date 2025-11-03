// CRIE UMA LÓGICA ABAIXO
const prompt = require('prompt-sync')()

const producoes = []
let producao = 0

console.log("=== Sistema de Controle de Produção ===")
let quantidadeDeDias = parseInt(prompt("quantos dias serao registrados? "))
for (let contador = 1; quantidadeDeDias >= contador; contador++) {
    do {
        producao = parseInt(prompt(`Digite a quantidade produzida no dia ${contador} `))
        if (typeof producao !== "number" || producao !== producao) {
            console.log("digite algo!")
        }
    } while (typeof producao !== "number" || producao !== producao)
    producoes.push(producao)
}

console.log("--- RELATÓRIO DE PRODUÇÃO ---")
console.log(`Produções registradas: [ ${producoes} ]`)
let total = 0
for (let indice = 0; indice < producoes.length; indice++) {
    total += producoes[indice]
}
console.log(`Total produzido: ${total} peças`)
let mediaDiaria = total / producoes.length
console.log(`Média diária: ${mediaDiaria}`)

let maiorProducao = producoes[0]
let menorProducao = producoes[0]
for (let indice = 1; indice < producoes.length; indice++) {
    if (producoes[indice] > maiorProducao) {
        maiorProducao = producoes[indice]
    }
    if (producoes[indice] < menorProducao) {
        menorProducao = producoes[indice]
    }
}
console.log(`Maior produção: ${maiorProducao} (dia ${producoes.indexOf(maiorProducao) + 1})`)
console.log(`Menor produção: ${menorProducao} (dia ${producoes.indexOf(menorProducao) + 1})`)
producoes.sort((a, b) => a - b)
console.log(`Ordem crescente: [ ${producoes} ]`)
producoes.sort((a, b) => b - a)
console.log(`Ordem descrescente: [ ${producoes} ]`)
let metadeDaMaiorProducao = maiorProducao / 2
if (mediaDiaria >= metadeDaMaiorProducao) {
    console.log("Produção estável!")
} else {
    console.log("Produção abaixo do ideal.")
}
