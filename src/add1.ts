export const add1 = (...numbers: number[])=> {
    let result = 0;

    numbers.forEach(number => {
        result += number;
    })

    return result
}