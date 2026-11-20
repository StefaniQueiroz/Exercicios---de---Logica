//---BLOCO 1---//

//1)Leia dois números inteiros e mostre a soma
//let numero1 = Number(prompt("Insira o primeiro número"));
//let numero2 = Number(prompt("Insira o segundo número"));
//let soma = numero1 + numero2
//console.log("A soma é ", soma)
//---------------------------------------

//2)Leia dois números reais e mostre a subtração do primeiro pelo segundo.
//let numero1 = Number(prompt("Insira o primeiro número:"));
//let numero2 = Number(prompt("Insira o segundo número:"));
//let subtração= numero1 - numero2
//console.log("A subtração é :", subtração)
//-------------------------------------------

//3)Leia dois números e exiba produto, quociente e resto da divisão inteira.
//let numero1 = Number(prompt("Insira o primeiro número:"));
//let numero2 = Number(prompt("Insira o segundo número:"));
//let produto = numero1 * numero2
//let quociente = numero1 / numero2
//let resto = numero1 % numero2
//console.log("O produto é :", produto)
//console.log("O quociente é :", quociente)
//console.log("O resto é :", resto)
//--------------------------------------------

//4)Leia a idade de uma pessoa e mostre quantos meses completos ela já viveu, considerando 12 meses por ano
//let idade = Number(prompt("Insira sua idade:"));
//let meses = idade * 12
//console.log("Você já viveu aproximadamente",meses,"meses completos")
//----------------------------------------------------------------------

//5)Leia largura e comprimento de um retângulo e informe a área e o perímetro.
//let largura = Number(prompt("Insira a lagura:"));
//let comprimento = Number(prompt("Insira o comprimento:"));
//let area = comprimento * largura
//let perimetro = 2 * comprimento + largura
//console.log("Sua area é :", area)
//console.log("Seu perimetro é :", perimetro)
//---------------------------------------------------------------------------

//6)Leia a temperatura em Celsius e converta para Fahrenheit.
//let celcius = Number(prompt("Insira sua temperatura:"));
//let fahrenheit = celcius * 1.8 + 32
//console.log("A temperatura em Fahrenheit é: ", fahrenheit, " °F")
//----------------------------------------------------------------------------
//---BLOCO 2---//

//7)Leia tres notas e calcule a media aritmetica.
//let numero1 = Number(prompt("Insira o primeiro número:"));
//let numero2 = Number(prompt("Insira o segundo número:"));
//let numero3 = Number(prompt("Insira o terceiro número:"));
//let soma = numero1 + numero2 + numero3
//let media = soma / 3
//console.log("Sua media é",media)
//---------------------------------------------------------------------------

//8)Leia três notas com pesos 2, 3 e 5 e calcule a média ponderada.
//let numero1 = Number(prompt("Insira o primeiro número:"));
//let numero2 = Number(prompt("Insira o segundo número:"));
//let numero3 = Number(prompt("Insira o terceiro número:"));
//let media = numero1 * 2 + numero2 * 3 + numero3 * 5 / 10
//console.log("Sua media é",media)
//------------------------------------------------------------------------------

//9)Leia o valor de um produto e o percentual de desconto. Mostre desconto e preço final.
//let produto = Number(prompt("Digite o valor do produto:"));
//let desconto = Number(prompt("Digite o percentual de desconto:"));
//let valor = produto * desconto / 100
//let preco = produto - valor
//console.log("Valor do desconto: ")
//console.log("Preço final: R$ ",preco)
//--------------------------------------------------------------------------------------

//10)Leia o salário e o percentual de reajuste. Mostre o novo salário.
//let salario = Number(prompt("Digite seu salario:"));
//let percentual = Number(prompt("Digite o percentual de reajuste:"));
//let reajuste = salario * percentual /100
//let novo = salario + reajuste
//console.log("Valor do aumento: R$ ", reajuste)
//console.log("Novo salário: R$ ", novo)
//--------------------------------------------------------------------------------------

//11)Leia a distância percorrida e o combustível gasto. Calcule o consumo médio em km por litro
//let distancia = Number(prompt("Digite distância percorrida:"));
//let combustivel = Number(prompt("Digite combustível gasto:"));
//let consumo = distancia/combustivel
//console.log("Seu consumo médio em km por litro foi:",consumo)
//--------------------------------------------------------------------------------------

//12)Leia a quantidade de dias e apresente o equivalente em semanas inteiras e dias restantes
//let dias = Number(prompt("Digite quantidade de dias:"));
//let semanas = dias / 7
//let restante = dias % 7
//console.log("Semanas inteiras: ", semanas)
//console.log("Dias restantes: ", restante)
//--------------------------------------------------------------------------------------
//---BLOCO 3--//

//13)Leia um número inteiro e informe se ele é par ou ímpar.
//let numero = Number(prompt("Digite um número:"));
//if (numero % 2 === 0){
//    console.log("É PAR")}
//else{
//    console.log("É IMPAR")
//    }
//--------------------------------------------------------------------------------------

//14)Leia um número e informe se ele é positivo, negativo ou zero.
//let numero = Number(prompt("Digite um número:"));
//if (numero > 0){
//    console.log("O número é POSITIVO")}
//else if (numero < 0){
//    console.log("O número é NEGATIVO.")}
//else{
//    console.log("O número é ZERO.")}
//--------------------------------------------------------------------------------------

//15)Leia duas notas. Informe Aprovado se a média for pelo menos 6; caso contrário, informe Recuperação.
//let nota1 = Number(prompt("Digite a primeira nota: "));
//let nota2 = Number(prompt("Digite a segunda nota: "));
//let media = nota1 + nota2 / 2
//console.log("Média obtida: ", media)
//if (media > 6 ){
//    console.log("VOCÊ FOI APROVADO!!")}
//else{
//    console.log(" VOCÊ ESTA DE RECUPERAÇÃO")
//    }
//--------------------------------------------------------------------------------------

//16)Leia a idade e informe se a pessoa pode votar: entre 16 e 17 anos ou a partir de 18 anos.
//let idade = Number(prompt("Digite sua idade:"));
//if (idade < 16){
//    console.log("VOCÊ NÃO PODE VOTAR.")}
//else if (idade == 16 || idade == 17 || idade == 70){
//    console.log("VOCÊ PODE VOTAR, MAS NÃO É OBRIGATÓRIO.")}
//else{
//    console.log("VOCÊ DEVE VOTAR, É OBRIGATÓRIO.")}
//--------------------------------------------------------------------------------------

//17)Leia dois números e mostre o maior. Se forem iguais, informem essa situação.
//let numero1 = Number(prompt("Digite o primeiro numero:"));
//let numero2 = Number(prompt("Digite o segundo numero:"));
//if (numero1 > numero2){
//    console.log("O PRIMEIRO É O MAIOR")}
//else if (numero2 > numero1){
//    console.log("O SEGUNDO É O MAIOR")}
//else if (numero1 = numero2){
//    console.log("SÃO IGUAIS")}
//--------------------------------------------------------------------------------------

//18)Leia a senha numérica. Se for 1234, mostre Acesso permitido; senão, Acesso negado.
//let senha = Number(prompt("Digite sua senha de quatro digitos:"));
//if (senha == 1234 ){
//    console.log("ACESSO PERMITIDO")}
//else{
//    console.log("ACESSO NEGADO")
//    }
//--------------------------------------------------------------------------------------
//---BLOCO 4--//

//19)Leia três números diferentes e mostre o maior.
//let numero1 = Number(prompt("Insira o primeiro número:"));
//let numero2 = Number(prompt("Insira o segundo número:"));
//let numero3 = Number(prompt("Insira o terceiro número:"));
//if (numero1 > numero2 && numero1 > numero3 ){
//    console.log("O PRIMEIRO É O MAIOR")}
//else if (numero2 > numero1 && numero2 > numero3){
//    console.log("O SEGUNDO É O MAIOR")}
//else{
//    console.log("O TERCEIRO É O MAIOR")}
//--------------------------------------------------------------------------------------

//20)Leia uma nota de 0 a 10 e classifique: insuficiente abaixo de 5, regular de 5 a 6,9, bom de 7 a 8,9 e excelente de 9 a 10.
//let nota = Number(prompt("Digite sua nota:"));
//if (nota < 0 || nota > 10 ){
//    console.log("Erro: A nota precisa estar entre 0 e 10.")}
//else if (nota < 5){
//    console.log("Classificação: INSUFICIENTE")}
//else if (nota <= 8.9) {
//    console.log("Classificação: BOM")}
//else{
//    console.log("Classificação: EXCELENTE")
//}
//--------------------------------------------------------------------------------------

//21)Leia o ano de nascimento e o ano atual. Informe a categoria: infantil até 10 anos, juvenil de 11 a 17 e adulto a partir de 18.
//let anoNacimento = Number(prompt("Digite seu ano de nacimento:"));
//let anoAtual = Number(prompt("Digite o ano atual:"));
//let idade =  anoAtual - anoNacimento
//console.log("Idade calculada: ", idade, " anos.")
//if (idade <= 10 ){
//    console.log("Categoria: INFANTIL")}
//else if (idade <= 17){
//    console.log("Categoria: JUVENIL")}
//else{
//    console.log("Categoria: ADULTO")
//}
//--------------------------------------------------------------------------------------

//22)Leia tres lados e verifique se formam um triângulo. Se formarem, classifique como equilátero, isósceles ou escaleno.
//let ladoA = Number(prompt("Digite o valor do lado A: "));
//let ladoB = Number(prompt("Digite o valor do lado B: "));
//let ladoC = Number(prompt("Digite o valor do lado C: "));
//let triangulo = (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB)
//if (triangulo){
//    console.log("Os lados informados FORMAM um triângulo.")}
//else if (ladoA == ladoB && ladoB == ladoC){
//    console.log("Classificação: EQUILÁTERO (Todos os lados iguais)")}
//else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
//    console.log("Classificação: ISÓSCELES (Dois lados iguais)")
//}
//else{
//    console.log("Classificação: ESCALENO (Todos os lados diferentes)") 
//}
//--------------------------------------------------------------------------------------
//23)Leia peso e altura, calcule IMC e classifique: abaixo de 18,5, normal até 24,9, sobrepeso até 29,9 e obesidade a partir de 30.
//let peso = Number(prompt("Digite seu peso (em kg): "));
//let altura = Number(prompt("Digite sua altura (em metros): "));
//let imc = peso / (altura * altura)
//console.log("Seu IMC é: ")
//if (imc < 18.5){
//    console.log("CLASSIFICAÇÃO: Abaixo do peso")}
//else if (imc <= 24.9){
//    console.log("CLASSIFICAÇÃO: Normal")}
//else if (imc <= 29.9){
//    console.log("CLASSIFICAÇÃO: Sobrepeso")
//}
//else{
//    console.log("CLASSIFICAÇÃO: OBESIDADE") 
//}
//--------------------------------------------------------------------------------------

//24)Leia um código de 1 a 7 e informe o dia da semana correspondente. Para outro código, informe invalido.
//let codigo = Number(prompt("Digite um código de 1 a 7:"));
//switch (codigo) {
//case 1:
//    console.log("Domingo");
//    break;
//case 2:
//    console.log("Segunda-feira");
//    break;
//case 3:
//    console.log("Terça-feira");
//    break;
//case 4:
//    console.log("Quarta-feira");
//    break;
//case 5:
//    console.log("Quinta-feira");
//    break;
//case 6:
//    console.log("Sexta-feira");
//    break;
//case 7:
//    console.log("Sábado");
//    break;
//default:
//    console.log("Código Inválido");
//    break;
//}
//--------------------------------------------------------------------------------------
//---BLOCO 5--//

//25)Mostre os números de 1 a 10 usando para
//for (let contador = 1; contador <= 10; contador++) {
//    console.log(contador);
//}
//--------------------------------------------------------------------------------------

//26)Leia um número N e mostre a tabuada de N de 1 a 10.
//let N = Number(prompt("Digite um numero:"));
//for (let contador = 1; contador <= 10; contador++) {
//    console.log(N,"X",contador,"=", N * contador);
//}
//--------------------------------------------------------------------------------------

//27)Leia 10 números e mostre a soma deles.
//let soma = 0;
//for (let i = 1; i <= 10; i++) {
//    let num = Number(prompt("Digite o " + i + "º número:"));
//  soma = soma + num;
//}
//console.log("A soma dos 10 números é: " + soma);
//--------------------------------------------------------------------------------------

//28)Leia 10 números e informe quantos são positivos.
//for (let i = 1; i <= 10; i++) {
//let num = Number(prompt("Digite o " + i + "º número:"));
//if (num > 0) {
//    console.log("O número é POSITIVO.");
//} else if (num < 0) {
//    console.log("O número é NEGATIVO.");
//} else {
//    console.log("O número é ZERO.");
//}
//}
//--------------------------------------------------------------------------------------

//29)Leia 5 notas e calcule a média da turma.
//let soma = 0;
//for (let i = 1; i <= 5; i++) {
//    let nota = Number(prompt("Digite a nota do " + i + "º aluno: "));
//    soma = soma + nota;
//}
//let media = soma / 5
//console.log("A média da turma é: " + media);
//--------------------------------------------------------------------------------------

//30)Leia números até que seja digitado 0. Ao final, informe a soma dos valores digitados.
//let soma = 0;
//let num = Number(prompt("Digite um número (ou 0 para sair):"));
//while (num !== 0) { 
//    soma = soma + num;
//    num = Number(prompt("Digite o próximo número (ou 0 para sair):"));
//}
//console.log("A soma de todos os valores digitados é: " + soma);
//--------------------------------------------------------------------------------------

//31)Leia números até que seja digitado um valor negativo. Informe quantos valores não negativos foram lidos.
//let validos = 0;
//let num = Number(prompt("Digite um número (ou um negativo para sair): "));
//while (num >= 0) { 
//    validos = validos + 1;
//    num = Number(prompt("Digite um número (ou um negativo para sair): "));
//}
//console.log("Quantidade de valores não negativos lidos: ", validos);
//--------------------------------------------------------------------------------------

//32)Leia idade e sexo de varias pessoas. Encerre quando a idade digitada for 0. Informe a quantidade de maiores de idade.
//let maiores = 0;
//let idade = Number(prompt("Digite a idade (ou 0 para sair):"));
//while (idade !== 0) {
//    let sexo = Number(prompt("Digite o sexo (1-Feminino / 2-Masculino):"));
//    if (idade >= 18) {
//    maiores = maiores + 1;
//    }
//    idade = Number(prompt("Digite a idade do próximo (ou 0 para sair):"));
//}
//console.log("Quantidade de maiores de idade: " + maiores);
//--------------------------------------------------------------------------------------
//---BLOCO 6--//
//33)Leia uma nota e repita a leitura enquanto ela estiver fora do intervalo de 0 a 10.
//let nota;
//do {
//    nota = Number(prompt("Digite uma nota (entre 0 e 10):"));
//    if (nota < 0 || nota > 10) {
//    console.log("Nota inválida! Tente novamente.");
//    }
//} while (nota < 0 || nota > 10);
//console.log("Nota válida registrada com sucesso: " + nota);
//--------------------------------------------------------------------------------------
//34)Leia uma senha e permita no máximo três tentativas para acertar a senha 2026.
//let tentativas = 0;
//let acertou = false;
//while (tentativas < 3 && acertou === false) {
//    let senha = Number(prompt("Digite a senha (4 dígitos):"));
//    tentativas++;
//    if (senha === 2026) {
//    acertou = true;
//    } else if (tentativas < 3) {
//    console.log("Senha incorreta! Você tem mais " + (3 - tentativas) + " tentativa(s).");
//    }
//}
//if (acertou === true) {
//    console.log("Acesso concedido! Bem-vindo.");
//} else {
//    console.log("Acesso bloqueado! Número máximo de tentativas excedido.");
//}
//--------------------------------------------------------------------------------------
//35)Leia um número inteiro positivo e calcule seu fatorial.
//let n;
//do {
//    n = Number(prompt("Digite um número inteiro positivo:"));
//    if (n < 0) {
//    console.log("Erro: O número deve ser positivo!");
//    }
//} while (n < 0); 
//let fat = 1;
//if (n > 1) {
//    for (let c = n; c >= 2; c--) {
//    fat = fat * c; // ou: fat *= c;
//    }
//}
//console.log("O fatorial de " + n + " é: " + fat);
//--------------------------------------------------------------------------------------
//36)Leia um número N e mostre todos os números pares de 0 até N.
//let n = Number(prompt("Digite um número:"));
//console.log("Números pares de 0 até " + n + ":");
// O laço começa em 0 e salta de 2 em 2 até atingir o limite N
//let linha = "";
//for (let c = 0; c <= n; c += 2) {
//  linha += c + " "; // Vai juntando os números na mesma linha com um espaço
//}
//console.log(linha); // Exibe todos na mesma linha e pula uma linha no final
//--------------------------------------------------------------------------------------
//37)Leia um número N e some todos os múltiplos de 3 entre 1 e N.
//let n = Number(prompt("Digite um número:"));
//let soma = 0;
// O laço começa em 3 (primeiro múltiplo) e salta de 3 em 3 até N
//for (let c = 3; c <= n; c += 3) {
//  soma = soma + c; // ou: soma += c;
//}
//console.log("A soma dos múltiplos de 3 entre 1 e " + n + " é: " + soma);
//--------------------------------------------------------------------------------------
//38)Leia um número inteiro e diga se ele é primo.
//let n = Number(prompt("Digite um número:"));
//let p;
//if (n <= 1) {
//    p = false;
//} else {
//    p = true;
//    let d = 2;
//    while (p === true && d < n) {
//    if (n % d === 0) {
//      p = false; // Encontrou um divisor, então não é primo
//    }
//    d++;
//    }
//}
//if (p) {
//    console.log("O número " + n + " é primo.");
//} else {
//    console.log("O número " + n + " não é primo.");
//}
//--------------------------------------------------------------------------------------
//---BLOCO 7--//
//39)Leia 8 números em um vetor e mostre todos na mesma ordem de leitura.
//let ordem = [];
//for (let i = 0; i < 8; i++) {
//    ordem[i] = Number(prompt("Digite seu " + (i + 1) + "º número:"));
//}
//for (let i = 0; i < 8; i++) {
//    console.log(ordem[i]);
//}
//--------------------------------------------------------------------------------------
//40)Leia 10 números em um vetor e informe o maior e sua posição.
//let numero = [];
//for (let i = 0; i < 10; i++) {
//    numero[i] = Number(prompt("Digite o " + (i + 1) + "º número:"));
//}
//let maior = numero[0];
//let posicao = 0;
//for (let i = 1; i < 10; i++) {
//    if (numero[i] > maior) {
//    maior = numero[i];
//    posicao = i;
//    }
//}
//console.log("");
//console.log("O maior número digitado foi: " + maior);
//console.log("Ele foi encontrado na posição: " + (posicao + 1));
//--------------------------------------------------------------------------------------
//41)Leia 8 notas em um vetor e informe a média e quantas são maiores ou iguais a média.
//let notas = [];
//let soma = 0;
//let cont = 0;
//for (let i = 0; i < 8; i++) {
//    notas[i] = Number(prompt("Digite a " + (i + 1) + "ª nota:"));
//    soma = soma + notas[i]; 
//}
//let media = soma / 8;
//for (let i = 0; i < 8; i++) {
//    if (notas[i] >= media) {
//    cont++;
//    }
//}
//console.log("");
//console.log("A média das notas é: " + media);
//console.log("Quantidade de notas maiores ou iguais à média: " + cont);
//--------------------------------------------------------------------------------------
//42)Leia 10 números em um vetor e mostre-os na ordem inversa.
//let numero = [];
//for (let i = 0; i < 10; i++) {
//    numero[i] = Number(prompt("Digite o " + (i + 1) + "º número:"));
//}
//console.log("");
//console.log("Números na ordem inversa:");
//for (let i = 9; i >= 0; i--) {
//console.log(numero[i]);
//}
//--------------------------------------------------------------------------------------
//43)Leia dois vetores de 5 posições e gere um terceiro vetor com a soma das posições correspondentes.
//let vetorA = [];
//let vetorB = [];
//let vetorSoma = [];
//for (let i = 0; i < 5; i++) {
//    vetorA[i] = Number(prompt("Digite o " + (i + 1) + "º valor de A:"));
//}
//console.log("");
//for (let i = 0; i < 5; i++) {
//    vetorB[i] = Number(prompt("Digite o " + (i + 1) + "º valor de B:"));
//}
//for (let i = 0; i < 5; i++) {
//    vetorSoma[i] = vetorA[i] + vetorB[i];
//}
//console.log("");
//for (let i = 0; i < 5; i++) {
//    console.log("Posição " + (i + 1) + ": " + vetorA[i] + " + " + vetorB[i] + " = " + vetorSoma[i]);
//}
//--------------------------------------------------------------------------------------
//44)Leia uma matriz 3 por 3 e mostre a soma dos elementos da diagonal principal.
//let mat = [];
//let cont = 1;
//for (let i = 0; i < 3; i++) {
//  mat[i] = []; // Cria cada linha da matriz antes de preencher as colunas
//    for (let j = 0; j < 3; j++) {
//    mat[i][j] = cont;
//    cont++;
//    }
//}
//let soma = mat[0][0] + mat[1][1] + mat[2][2];
//console.log(soma); // Resultado: 15 (1 + 5 + 9)
//--------------------------------------------------------------------------------------