export function validationStub() {
    return true;
}

export function validatePositiveNumber(n: string) {
    if (!n.match(/^[0-9]+$/)) return 'Это дожно быть положительное целое число';
    return true;
}

export function validateName(n: string) {
    const regexp = /^[A-Za-zА-ЯЁа-яё0-9., \-\\']+$/;
    if (!n.match(regexp)) return 'Разрешены русские и латинские буквы, цифры, точка, запятая, тире';
    return true;
}
