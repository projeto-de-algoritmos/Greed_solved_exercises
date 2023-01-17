// Para essa solução foi criada uma variável misses que recebe 1 e uma variável add que recebe 0.
// com isso misses será a menos soma em [0,n], que significa que já sabemos que podemos construir todas as somas em [0,misses].
// Então se tivermos um número <= misses, podemos adicionar esse número a misses para construir todas as somas em [0,misses+nums[i]].
// Se não tivermos, precisamos adicionar um número x em [misses,misses+nums[i]-1] para construir todas as somas em [0,misses+nums[i]+x].
// 

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let misses = 1, add = 0, i = 0;

    while (misses <= n) {
        if (i < nums.length && nums[i] <= misses) {
            misses += nums[i++];
        } else {
            misses += misses;
            add++
        }
    }

    return add
};

const numsExample1 = [1, 5, 10], nExample1 = 20
const expectedOutput1 = 2

console.log("Entrada: nums = [" + numsExample1 + "], n = " + nExample1 + "\nSaída esperada: " + expectedOutput1 + "\nResultado obtido: " + minPatches(numsExample1, nExample1) + "\n");

const numsExample2 = [1, 2, 2], nExample2 = 5
const expectedOutput2 = 0

console.log("Entrada: nums = [" + numsExample2 + "], n = " + nExample2 + "\nSaída esperada: " + expectedOutput2 + "\nResultado obtido: " + minPatches(numsExample2, nExample2) + "\n");