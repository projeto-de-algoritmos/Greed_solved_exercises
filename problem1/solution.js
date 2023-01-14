const heigthsExample1 = [1,8,6,2,5,4,8,3,7];
const heigthsExample2 = [1,1];

const expectedArea1 = 49;
const expectedArea2 = 1;

// Inicialmente foi pensado no template padrão de algoritmos ambiciosos, em que se busca fazer a ordenação dos
// dados de entrada. Poderia ser ordenado pela altura das colunas, distância x  e talvez a relação entre altura
// e distância. Na primeira tentativa foi feita a ordenação pelo tamanho das colunas em ordem crescente, devido
// ao fato de que basicamente se trata de um problema de área máxima, e a altura a ser utilizada no cálculo
// sempre seria a da menor coluna (menorAltura(coluna[i], coluna[j]). Com isso a partir das menores colunas era feito
// o cálculo da área com as próximas maiores colunas, mas dessa forma foi excedido o tempo limite, pois a cada iteração
// no loop era feito n-1 comparações.

// Em seguida foi percebido que a entrada já vem ordenada pela distância x, e que se posicionar dois ponteiros (um no início
// e outro no final do array) e analisar qual deles tem a menor altura é possível achar a solução em O(n). Aprofundando na
// solução proposta, sempre que o ponteiro i estiver numa coluna com altura menor que a coluna do ponteiro j é necessário
// incrementar o ponteiro i, pois dado que a coluna menor limita o tamanho da área, a variável mais significante no cálculo da
// área seria o módulo da distância, que pra coluna de ponteiro i já seria máxima. O mesmo vale para o ponteiro j, sempre é
// incrementado quando sua coluna é menor. O critério de parada é quando o ponteiro i é igual ao ponteiro j, indicando que 
// todas as maiores possíveis áreas já foram calculadas.

function maxArea(height) {
  let j = height.length - 1;
  let max = 0;
  let i = 0;
  while (i < j) {
      let minHeight = height[i] < height[j] ? height[i] : height[j];
      let area = minHeight * (j - i); 
      if (area > max) {
          max = area;
      }
      if (height[i] < height[j]) {
          i++;
      } else {
          j--;
      }
  }

  return max;
}

console.log(`Exemplo 1: \n\tEntrada: [${heigthsExample1}] \n\tSaída esperada: ${expectedArea1} \n\tResultado obtido: ${maxArea(heigthsExample1)} \n`);

console.log(`Exemplo 2: \n\tEntrada: [${heigthsExample2}] \n\tSaída esperada: ${expectedArea2} \n\tResultado obtido: ${maxArea(heigthsExample2)} \n`);
