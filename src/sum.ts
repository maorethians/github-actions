export const sum = (...numbers: number[])=> {
    let result = 0;

    numbers.forEach(number => {
        result += number;
    })

    return result
}