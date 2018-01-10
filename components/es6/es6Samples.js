/* Map */
const mapToMaisUm = arr => arr.map(
	(ele, index, arr) => ele + 1
);
/*
var somaMaisUm = function (ele, index, arr) {
    return ele + 1;
};
var mapToMaisUm = function (arr) {
    arr.map(somaMaisUm);
};
*/
/*
var mapToMaisUm = function (arr) {
    return arr.map(
        (function (ele, index, arr) {
            return ele + 1;
        })
    );
}
*/

/* Filter */
// { nome: null, idade: null }
const filterMaior18 = arr => arr.filter(
	(ele, index, arr) =>  ele.idade >= 18 ? ele : null
);
/*
var verificaMaior18 = function (ele, index, arr) {
	if (ele.idade >= 18)
		return ele;
};
var filterMaior18 = function (arr) {
	return arr.filter(verificaMaior18);
};
*/
/*
var filterMaior18 = function (arr) {
	return arr.filter(
		(function (ele, index, arr) {
			return ele.idade >= 18 ? ele : null;
		})
	);
}
*/

/* Reduce */
// [ "Mario", "Maria", "Joao" ]
// { Mario: 0, Maria: 1, Joao: 2 }
const reduceArrToObj = arr => arr.reduce(
	(acc, ele, index, arr) => {
		acc[ele] = index;
		return acc;
	},
	{}
);
/*
var criaObjeto = function (acc, ele, index, arr) {
	return acc[ele] = index;
};
var reduceArrToObj = function (arr) {
	return arr.reduce(criaObjeto);
};
*/
/*

*/

/* Class */
class PessoaEs6 {
	constructor (nome, idade) {
		this.nome = nome;
		this.idade = idade;
	}

	digaOi () {
		return "Ola Pessoas";
	}
}
class PessoaComGato extends PessoaEs6 {
	constructor (nome, idade, possuiGato) {
		super(nome, idade);
		this.possuiGato = possuiGato;
	}

	digaSuaIdade () {
		return "Minha Idade: " + this.idade;
	}
}
/*
function Pessoa (nome, idade) {
	this.nome = nome;
	this.idade = idade;

	this.digaOi = function () {
		return "Olá pessoas";
	};
}
var lala = new Pessoa('Mario', 23);
*/