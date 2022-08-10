let x = "";
console.log(x);
x = "oi";


//declaração de função---
//chama a função
imprimeTexto(x);

//cria a função
function imprimeTexto(texto){
    console.log(texto)
}

//é possivel chamar a função em qualquer lugar
imprimeTexto("chamei de novo");
//---


//função com retorno---
function soma(){
const resultado = 2 + 2;

//return tem que ser a última linha, nada depois será executado
return resultado;
}

console.log(soma());
//---

//função dentro de função---
imprimeTexto(soma());
//---