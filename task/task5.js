function fibb(n) {
    if (n < 0 || n > 1000){
        throw new Error("Недопустимый диапазон")
    }
    if (n <= 1) {
        return n;
    } else {
        return fibb(n - 1) + fibb(n - 2);
    }
}