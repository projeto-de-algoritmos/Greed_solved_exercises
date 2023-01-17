// Para essa solução foi criada
// uma matriz auxiliar com o tamanho do tamanho da string s + 1 e do tamanho da string p + 1.

// A matriz auxiliar foi preenchida com valores falsos, exceto a primeira linha e a primeira
// coluna, que foram preenchidas com true.

// A partir da segunda linha e da segunda coluna, foi feita uma verificação se o caractere
// da string p é um asterisco, se sim, a posição da matriz recebe o valor da posição acima
// ou da posição da esquerda.

// Se o caractere da string p é um ponto de interrogação ou se o
// caractere da string s é igual ao caractere da string p, a posição da matriz recebe o valor
// da posição da diagonal superior esquerda. Caso contrário, a posição da matriz recebe false.

// Ao final, a posição da matriz na linha s.length e coluna p.length é retornada.
// 

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length == 0) {
      return (s.length == 0)
  }

  let matrixAux = new Array(s.length + 1).fill(false).map(() => new Array(p.length + 1).fill(false))

  matrixAux[0][0] = true

  for (let j = 1; j <= p.length; j++) {
      if(p[j-1] === '*')
          matrixAux[0][j] = matrixAux[0][j-1];
  }

  for (let i = 1; i <= s.length; i++) {
      for (let j = 1; j <= p.length; j++) {
          if (p[j-1] === '*') {
              matrixAux[i][j] = matrixAux [i][j-1] || matrixAux[i-1][j];
          } else if (p[j-1] === '?' || s[i-1] === p[j-1]) {
              matrixAux[i][j] = matrixAux[i-1][j-1]
          } else {
              matrixAux[i][j] = false
          }
      }
  }

  return matrixAux[s.length][p.length]
};

const sExample1 = "aa";
const nExample1 = "a";
const expectedOutput1 = false;

console.log(`Exemplo 1: \n\tEntrada: s = [${sExample1}], p = [${nExample1}] \n\tSaída esperada: ${expectedOutput1} \n\tResultado obtido: ${isMatch(sExample1)} \n`);

const sExample2 = "aa";
const nExample2 = "*";
const expectedOutput2 = true;

console.log(`Exemplo 2: \n\tEntrada: s = [${sExample2}], p = [${nExample2}] \n\tSaída esperada: ${expectedOutput2} \n\tResultado obtido: ${isMatch(sExample2)} \n`);