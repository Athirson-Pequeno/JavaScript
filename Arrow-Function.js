
//obs: usada apenas em uma linha de intrução
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (n1,n2) => n1 + n2;

console.log(apresentarArrow("Athirson"));
console.log(soma(5,5));

//obs: usada apenas em mais de uma linha de intrução
const somaNumerosPequenos = (n1,n2) => {
    if(n1 > 10 || n2 > 10 ){
        return "numero muito grande"
    }else{
        return n1 + n2;
    }
}

console.log(somaNumerosPequenos(4 , 5))

//Hoisting: arrow function se comporta como expressão