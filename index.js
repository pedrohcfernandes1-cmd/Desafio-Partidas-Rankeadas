// Váriaveis
let vitorias = 10
let derrotas = 5
let rank = ""

let saldo = vitorias - derrotas

// Estrutura de decisão
if (saldo <= 10) {
    rank = "Ferro"
}
else if (saldo >= 11 && saldo <= 20) {
    rank = "Bronze"
}
else if (saldo >= 21 && saldo <= 50) {
    rank = "Prata"
}
else if (saldo >= 51 && saldo <= 80) {
    rank = "Ouro"
}
else if (saldo >= 81 && saldo <= 90) {
    rank = "Diamante"
}
else if (saldo >= 91 && saldo <= 100) {
    rank = "Lendário"
}
else if (saldo >= 101) {
    rank = "Imortal"
}

// Saída
console.log("O Herói tem de saldo de vitorias: " + saldo + ". E ele está no nível de " + rank)