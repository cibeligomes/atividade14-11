let abates: number = 0;
let assistencias: number = 0;
let mortes: number = 0;
let resultado: number = 0;

abates=Number(prompt("Digite a quantidade de abates: "));
assistencias=Number(prompt("Digite a quantidade de assitencias: "));
mortes=Number(prompt("Digite a quantidade de mortes: "));

resultado=(abates + assistencias)/mortes;
console.log(`O resultado é: ${resultado}`);
