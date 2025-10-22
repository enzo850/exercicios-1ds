// Antes de iniciar, instale o prompt-sync para entrada de dados e o jest para testar
// Comando: npm i prompt-sync; npm i -D jest

// CRIE UMA LÓGICA ABAIXO

const prompt = require("prompt-sync")()

// variáveis externas para dar valor dentro do programa
let contadorDia = 0
let objetivo
let repetirTurno
let totalGeral = 0
let relatorio = ""

do {
    do {
        objetivo = parseInt(prompt("Quantas peças devem ser produzidas nesse turno?: "))
    } while (typeof objetivo !== 'number' || objetivo !== objetivo)

    let producaoTurno = 0
    while (producaoTurno < objetivo) {
        producaoTurno++
        console.log(`Peça ${producaoTurno}, produzida com sucesso`)
    }
    if (producaoTurno === objetivo) {
        console.log("Meta alcançada!")
    } else {
        console.log("Meta não alcançada!")
    }
    for (let indice = 1; indice > 0; indice--) {
        contadorDia++
        const linhaRelatorio = `Dia ${contadorDia} foi produzido ${objetivo} \n`
        relatorio += linhaRelatorio
        totalGeral = objetivo + totalGeral
    }
    do {
        repetirTurno = prompt("Deseja simular outro turno? S/N: ").toUpperCase()
    } while (repetirTurno === "" || repetirTurno === null)

} while (repetirTurno == "S")

console.log("Encerrando sistema de produção")
console.log("Resumo dos dias anteriores:")
console.log(relatorio)
console.log(`Total geral: ${totalGeral} peças fabricadas!`)
