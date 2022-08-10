//parametros de função

//contrói a função
function soma(n1, n2){
    return n1 + n2;
}

//chama afunção com os valores desejados
console.log(soma(5 , 5));
//pode se chamar repetidas vezes
console.log(soma(10 , 2))

//ordem de parametros
function nomeSobrenome(nome, sobrenome){

    return `meu nome é ${nome} ${sobrenome}`;
}

//ordem correta
console.log("Athirson", "Pequeno");
//ordem errada
console.log("Pequeno", "Athirson");


//função dentro de função
//n1 = 1 e n2 = 1 serve para atribuir um valor padrao a um parametro
//caso a função seja chamada sem um valor o valor atribuido será o valor padrao
function multiplica(n1 = 1, n2 = 1){
    return n1 * n2;
}

//o resultado das funções somas e passado para a função multiplica
console.log(multiplica(soma(5,2),soma(3,2)));
console.log(multiplica(soma(3,2)));


function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Athirson') // “Oi gente! Meu nome é Paula”