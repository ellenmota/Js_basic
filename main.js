console.log("Javascript externo!");

//Variaveis em Javascript são tipagem dinâmica

var numero = 9;
var bool = true;
var bool2 = false;
var dble = 1.5;
var text = "Judith";

console.log(typeof numero);

numero = "Palavra";
console.log(typeof numero);

//Funções

//EcmaScript 5
function myfunction(){
	var soma = 2+2;
	console.log(soma);

}

function parametros(numero, bool, bool2, dble, text){
	console.log("Tipos: "+ numero + " " + bool +" "+ bool2 + " " + dble+" "+ text);
}

//Função anônima
var anonymous =  function(){
	var teste ="It's function anonymous...";	
	console.log(teste);
}

//Condições
//Prompt => captura a digitação igual o scanf do C
function user(){
	var age = prompt("Digite sua idade: ");
	var height = prompt("Digite sua altura em Metros: ");
	var wight = prompt("Digite seu peso em Kg: ");

	height = parseFloat(height);
	wight =  parseFloat(wight);

	if(age<0 || age>100){
		alert("Idade Inválida!");
	}else{
		if(age>=18){
			alert("Você eh maior de Idade!");
		}else{
			alert("Você eh menor de Idade!");
		}

		var imc = wight/(height*height);
		document.write(imc);
		alert("Seu Imc:"+imc);

	}
}

//Loops
 function loops(){
// 	var i=50;
// 	while(i>10){
// 		console.log(i);
// 		i--;
// 	}

	//Callback simples.
	[1,2,3,4,5,6,7].forEach(function(value, key){
		console.log("Valor:"+" "+ value,"Indice:"+" "+key);
	});
}
//Chamada de Funções
// myfunction();
// parametros(numero, bool, bool2, dble, text);
// anonymous();
// user();
loops();
