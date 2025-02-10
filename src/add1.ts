export const add1 = (...numbers: number[])=> {
    let result = 0;
    numbers.forEach(number => {
        result += number;
    })

    let result1 = 0
    numbers.forEach(number => {
        result1 += number;
    })

    return result1
}