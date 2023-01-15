/**
 * @param {number[]} nums
 * @return {number}
 */

const numsExample1 = [2,3,1,1,4]
const expectedJumps1 = 2

const numsExample2 = [2,3,0,1,4]
const expectedJumps2 = 2

// Para a solução deste problema foi inicialmente pensado na lógica de resolução
// por força bruta, testando todas as possibilidades de pulo a cada posição. Mas
// evidentemente se tornaria uma solução com alto Big O.
// Depois de bastante pensar numa solução eficiente, foi lembrado o algoritmo de
// caminhoneiro, onde um caminhão sempre busca andar a maior distância (dentro da
// autonomia antes de abastecer, para que consiga o menor número de paradas.
// Com o intuito de sempre pular o mais longe possível, foi criado uma solução em loop
// com os seguintes passos:
//  1 - Analisar se já é possível chegar no destino a partir da casa atual e caso sim,
//      retornar contador de pulos
//  2 - Verificar se o número de casas para pular é diferente de 0
//  3 - Com base no número de casas a frente que posso pular, escolher a que levará mais longe
//      e pular para essa casa
//  3 - Caso já esteja no destino retornar contador de pulos


function minJumps(nums) {
  let countJump = 0;
  let target = nums.length - 1;
  for (let i = 0; i < target;) {
      if (nums[i] + i >= target)
        return countJump + 1;
    
      if (nums[i] == 0) {
          i++;
          continue;
      }

      let maxJump = 0;
      let idxMaxJump = 0;
    
      for (let j = i+1; j <= (nums[i] + i); j++) {
          if (nums[j] + j > maxJump) {
            maxJump = nums[j] + j;
            idxMaxJump = j;
          }
      }

      i = idxMaxJump;
      
      countJump++;

      if (i >= target)
        return countJump;
  }

  return countJump;
};

console.log(`Exemplo 1: \n\tEntrada: [${numsExample1}] \n\tSaída esperada: ${expectedJumps1} \n\tResultado obtido: ${minJumps(numsExample1)} \n`);

console.log(`Exemplo 2: \n\tEntrada: [${numsExample2}] \n\tSaída esperada: ${expectedJumps2} \n\tResultado obtido: ${minJumps(numsExample2)} \n`);
