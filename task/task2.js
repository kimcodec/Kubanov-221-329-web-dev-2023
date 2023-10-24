function gcd(a,b){
    if (a <= 0 || b <= 0){
        throw new Error("Функция работает только с натуральными числами")
    }
    let n = 1;
    while(n % a === 0 && n % b === 0){
        n++;
    }
    return n;
}