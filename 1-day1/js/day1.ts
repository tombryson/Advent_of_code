export const x = "";

const input = await Deno.readTextFile("./input.txt");

const nums = input.split("\n").map((num) => {
    if (num != "") return parseInt(num, 10);
})

const inputRead = (nums) => {
    let sum: number = 0;
    let maxNums: number[] = [];
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] != undefined) {
            sum += nums[i];
        } else {
            maxNums.push(sum);
            sum = 0;
        }
    }
    return maxNums.sort((a,b) => b - a).splice(0,3).reduce((acc, curr) => acc + curr, 0);
}

console.log(inputRead(nums));