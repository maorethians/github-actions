export const add = (...numbers: number[])=> {
    let result = 0;

    numbers.forEach(number => {
        result += number;
    })

    return result
}