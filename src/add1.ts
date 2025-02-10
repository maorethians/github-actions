export const addNumbers = (...numbers: number[]) => {
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });

    let unusedVar = 0; // Unused variable - should trigger an issue

    numbers.forEach(num => {
        sum += num; // Duplicate computation - possible code smell
    });

    return sum;
};