
export const sum = (numbers) => {
    numbers = numbers.replace(/(\r\n|\n|\r)/gm, "").replace(/,/g, '')
    numbers = numbers.split('').join(",")
    console.log(numbers)
    let nums = numbers.split(",")
    if (nums == ""){return 0}
    if (nums.length === 1) {return parseInt(nums[0])}
    if (nums.length === 2) {return parseInt(nums[0]) + parseInt(nums[1])}
    if (nums.length >= 3) {
         var numberArray = []
    for (var i = 0; i < nums.length; i++)
        numberArray.push(parseInt(nums[i]));
              let numArr = numberArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        },0)
        return numArr
    }
    
}
    



