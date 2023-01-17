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