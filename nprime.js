const n = parseInt(prompt('Enter the range : '));
console.log(`The prime numbers in range 1 to ${n} are:`);
for (let i = 1; i <= n; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i >= 1 && flag == 0) {
        console.log(i);
    }
}
