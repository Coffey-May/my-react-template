import { sum } from './calc'

describe('Calculator', ()=>{
// 1. Given the user input is empty when calculating the sum then it should return zero.
    it("should return zero", ()=>{
        expect(sum('')).toBe(0)
    })
// 2. Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
    it('should return the same number', () => {
        expect(sum('3')).toBe(3)
    })
// 3. Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
    it('Should return the sum of two given parameters', () => {
        expect(sum("1,2")).toBe(3)
    })
// 4. Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
    it('Should return the sum of any amount of numbers', () => {
        expect(sum('1,2,3,4')).toBe(10)
    })
// 5. Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
    it('Should return the sum all numbers without newlines and or commas', () => {
        expect(sum("1\n2,3")).toBe(6)
    })
// 6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
    it('Should return the sum all numbers without newlines and or commas', () => {
        expect(sum("//;\n1;2")).toBe(3)
    })
})

/*
6. Given the user input is multiple numbers with a custom single-character delimiter when calculating the sum then it should return the sum of all the numbers. (example “//;\n1;2” should return 3)
7. Given the user input contains one negative number when calculating the sum then it should throw an exception "negatives not allowed: x" (where x is the negative number).
8. Given the user input contains multiple negative numbers mixed with positive numbers when calculating the sum then it should throw an exception "negatives not allowed: x, y, z" (where x, y, z are only the negative numbers). 
9. Given the user input contains numbers larger than 1000 when calculating the sum it should only sum the numbers less than 1001. (example 2 + 1001 = 2)
10. Given the user input is multiple numbers with a custom multi-character delimiter when calculating the sum then it should return the sum of all the numbers. (example: “//[***]\n1***2***3” should return 6)
11. Given the user input is multiple numbers with multiple custom delimiters when calculating the sum then it should return the sum of all the numbers. (example “//[*][%]\n1*2%3” should return 6)
*/