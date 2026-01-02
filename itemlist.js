function findMissingNumber(nums, n) {
    const actualSum = (n)*(n+1)/2;
    const sum = nums.reduce(acc, curr) => acc + curr, 0);

    return actualSum - sum;
}

const nums = [1, 2, 3, 5];
const n = 5;
console.log(findMissingNumber(nums, n));  