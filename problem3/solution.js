/**
 * @param {number[]} ratings
 * @return {number}
 */

const ratingsExample1 = [1, 0, 2];
const expectedCandies1 = 5;

const ratingsExample2 = [1, 2, 2];
const expectedCandies2 = 4;

// Para o problema foi tentada uma abordagem inicial em que para cada criança
// era comparado o rating com seus vizinhos de primeiro grau, caso a vizinha a
// esquerda possuisse rating menor era dado a quantidade de doces que ela recebeu
// + 1, e caso a criança da direita também fosse menor aumentava em 1 a quantidade
// de doce. Após várias tentativas de submissão recebemos wrong answer e partimos
// para outra abordagem.
// Na abordagem da solução abaixo fugimos um pouco de algoritmos ambiciosos mas
// mantivemos a complexidade em O(n). Nesta abordagem é feito o seguinte:
//  1 - Loop que passa por todas as crianças e as compara com seu vizinho a esquerda,
//      acrescentando 1 doce caso seja maior que o vizinho. A quantidade de doces para
//      cada criança é guardada em um novo array.
//  2 - Semelhante ao passo anterior é feito um loop entre as crianças, mas agora é feita
//      a comparação com o vizinho a direita. A quantidade de doces também é guardada em
//      um novo array.
//  3 - Ao final é comparado cada valor de cada posição dos array resultados das etapas anteriores,
//      sendo contabilizada na soma o maior entre os valores. Assim é possível levar em conta tanto
//      os vizinhos a direito quanto a esquerda, resultando no número mínimo de doces.


function candy(ratings) {
  let length = ratings.length;
  let minIdx = 0;
  let lastCand = 1;
  let compLeft = [];
  for (let i = 0; i < length; i++) {
      let ratA = ratings[i];
      let candA = 1;
      if (i - 1 >= minIdx && (ratA > ratings[i-1])) {
          candA = lastCand + 1;
      }
      compLeft[i] = candA;
      lastCand = candA;
  }

  lastCand = 1;
  let compRight = [];
  for (let i = length - 1; i >= 0; i--) {
      let ratA = ratings[i];
      let candA = 1;
      if (i + 1 < length && (ratA > ratings[i+1])) {
          candA = lastCand + 1;
      }
      compRight[i] = candA;
      lastCand = candA;
  }

  let numCand = 0;
  let left = 0;
  let right = 0;
  for (let i = 0; i < length; i++) {
      left = compLeft[i];
      right = compRight[i];

      numCand += left > right
          ? left
          : right;
  }

  return numCand;  
};

console.log(`Exemplo 1: \n\tEntrada: [${ratingsExample1}] \n\tSaída esperada: ${expectedCandies1} \n\tResultado obtido: ${candy(ratingsExample1)} \n`);

console.log(`Exemplo 2: \n\tEntrada: [${ratingsExample2}] \n\tSaída esperada: ${expectedCandies2} \n\tResultado obtido: ${candy(ratingsExample2)} \n`);