// CRIE UMA LÓGICA ABAIXO
let filme1 = {titulo: "Oppenheimer", genero: "Drama/Histórico", ano: 2023, avaliacao: 9.4}
let filme2 = {titulo: "John Wick 4", genero: "Ação", ano: 2023, avaliacao: 9.0}
let filme3 = {titulo: "Duna: Parte Dois", genero: "Ficção Científica", ano: 2024, avaliacao: 9.2}
let filme4 = {titulo: "O Grande Gatsby", genero: "Drama", ano: 2013, avaliacao: 8.8}
let filme5 = {titulo: "Os Infiltrados", genero: "Crime", ano: 2006, avaliacao: 9.1}
let filme6 = {titulo: "O Rei do Show", genero: "Musical", ano: 2017, avaliacao: 8.9}
let filme7 = {titulo: "Top Gun: Maverick", genero: "Ação", ano: 2022, avaliacao: 9.3}
let filme8 = {titulo: "Cisne Negro", genero: "Suspense", ano: 2010, avaliacao: 9.0}
let filme9 = {titulo: "A Ilha do Medo", genero: "Suspense", ano: 2010, avaliacao: 9.2}
let filme10 = {titulo: "Os Intocáveis", genero: "Drama", ano: 2011, avaliacao: 9.5}

const catalogoFilmes = {filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10}

const listaAvaliacoes = [filme1.avaliacao, filme2.avaliacao, filme3.avaliacao, filme4.avaliacao, filme5.avaliacao, filme6.avaliacao, filme7.avaliacao, filme8.avaliacao, filme9.avaliacao, filme10.avaliacao]
let notaMaxima = listaAvaliacoes[0]
for(let i = 1; i < listaAvaliacoes.length; i++){
    if(listaAvaliacoes[i] > notaMaxima){
        notaMaxima = listaAvaliacoes[i]
    }
}
let indiceMelhor = listaAvaliacoes.indexOf(notaMaxima) + 1
let somaAvaliacoes = listaAvaliacoes.reduce((acumulador, valorAtual) => { return valorAtual + acumulador}, 0) 
let mediaFinal = somaAvaliacoes / listaAvaliacoes.length
console.log(`
    === Catálogo de Filmes ===
    1. ${filme1.titulo} - ${filme1.genero}
    2. ${filme2.titulo} - ${filme2.genero}
    3. ${filme3.titulo} - ${filme3.genero}
    4. ${filme4.titulo} - ${filme4.genero}
    5. ${filme5.titulo} - ${filme5.genero}
    6. ${filme6.titulo} - ${filme6.genero}
    7. ${filme7.titulo} - ${filme7.genero}
    8. ${filme8.titulo} - ${filme8.genero}
    9. ${filme9.titulo} - ${filme9.genero}
    10. ${filme10.titulo} - ${filme10.genero}

    Filme mais bem avaliado:
    ${catalogoFilmes[`filme${indiceMelhor}`].titulo} (${notaMaxima})

    Média geral das avaliações: ${mediaFinal.toFixed(2)}
    `)

// === NÃO MODIFIQUE OU ADICIONE NADA ABAIXO ============
module.exports = { filme1, filme2, filme3, filme4, filme5, filme6, filme7, filme8, filme9, filme10 }