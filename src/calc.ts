
export const sum = (numbers) => {
    let nums = numbers.split(",")
 
console.log(nums)
    if (nums == ""){return 0}
    

    if (nums.length === 1) {
        return parseInt(nums[0])
    } else if (nums.length === 2) {
        return parseInt(nums[0]) + parseInt(nums[1])
    }else if (nums.length > 2){
      for (let i =0;i<nums.length;i++){
          let output =0
          console.log(nums[i])
         return  output += parseInt(nums[i])
          

      }
    }

}

