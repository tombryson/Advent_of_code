export const x = "";

const input = await Deno.readTextFile("./input.txt");

const nums = input.split("\n").map((num) => {
    if (num != "") return parseInt(num, 10);
})

const inputRead = (nums) => {
    console.log(nums);
    let sum: number = 0;
    let maxNum: number = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] != undefined) {
            sum += nums[i];
        } else {
            maxNum = Math.max(maxNum, sum);
            sum = 0;
        }
    }
    return maxNum;
}

console.log(inputRead(nums));