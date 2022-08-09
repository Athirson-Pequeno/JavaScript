const numero = 20;
const numeroString = "20"

//comparar sem o tipo da variavel = resultado true
console.log(numero == numeroString)

//comparar com o tipo da variavel = resultado false
console.log(numero === numeroString)

//teste de soma = resultado 2020
console.log(numero + numeroString)

//Number() = converte para numero
//String() = converte para string
//obs a variavel pode ser iniciada ja convertida ex: const numeroString = Number("20")
//teste de soma com conversao = resultado 40
console.log(numero + Number(numeroString))

//erros possiveis
//ter um caracter junto concatenado com o numero vai resultar no erro NaN
const numeroErro = Number("20a")
//teste de soma com erro = resultado NaN
console.log(numero + numeroErro)