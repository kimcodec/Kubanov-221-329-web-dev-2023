function pluralizeRecords(n){
    let x = n % 10;
    switch (x) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            console.log(`В результате выполнения запроса было найдено ${n} записей`);
            break;
        case 1:
            console.log(`В результате выполнения запроса была найдена ${n} запись`);
            break;
        case 2:
        case 3:
        case 4:
            console.log(`В результате выполнения запроса было найдено ${n} записи`);
            break;
    }
}