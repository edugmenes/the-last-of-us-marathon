// comentário em javascript
/* assim é um outro jeito de comentar */

//Variáveis: 
//maneira mais antiga, não usar
var nome = "Luiz"; //tipo String

//variavel constante//
const sobrenome = "Reis"; 

let idade = 28; //tipo number

//variaveis let podem mudar seu valor
idade = idade + 1;  

let isOnline = true; //tipo boolean

const lastTransactionValues = [30,3.5,20];
const valorDoProduto = 30;
let saldo = 50;

console.log(idade);

//Condicionais: 
if(saldo >= valorDoProduto){
    saldo = saldo - valorDoProduto;
    lastTransactionValues.push(valorDoProduto); //push = adiciona valorDoProduto no array
    console.log(`compra realizada, seu saldo agora é ${saldo}`); //template string
} 
else {
    console.log("saldo insuficiente");
}

//Criando um objeto: 
const user = {
    nome: "Luiz",
    idade: 28,
    isOnline: true,
    lastTransactionValues: [30,3.5,20],
    saldo: 50    
}

console.log(user);

//Criando uma função:
function transaction(userObj,value){
    if(userObj.saldo >= value){
        userObj.saldo = userObj.saldo - value;
        return(`compra realizada, seu saldo agora é ${userObj.saldo}`); //template string
    }
    else {
        return("saldo insuficiente");
    }
    //para função, o certo é usar return. Comando return não vai pra console, para imprilo, basta dar um console.log na função
}

//Chamando uma função:
console.log(transaction(user, valorDoProduto));   

//Loop FOR:
for (let i=0; i<=10; i++){
    console.log(i); 
}

//Percorrer array com estrutur de loop FOR:
const nomes = ["Luiz", "Nicole", "João", "Pedro"];

for (let i=0; i<nomes.lenght; i++){
    //.lenght = numero de casas do array
    console.log(nomes[i]);
}

//DOM:

//Capturando elemento:
const ul = document.querySelector(".lista");
console.log(ul);

//Criando elemento:
const li = document.createElement("li");
const dadoInserido = "Soft-Skills"

li.innerHTML = `<p>${dadoInserido}</p>`; //template string novamente

//Inserindo no DOM:
ul.appendChild(li);