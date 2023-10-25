function minDigit(x){
    if (x < 0) {
        throw new Error("Число должно быть неотрицательным");
    }

    let min = -1;
    let n;
    while (x !== 0){
        n = x % 10;
        x = (x/10)|0;
        if (n < min){
            min = n;
        }
    }
    return n;
}