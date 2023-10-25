function pow(x,n){
    if (n < 0){
        throw new Error("Функция поддерживает только положителные значения n")
    }
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= x;
    }

    return result;
}