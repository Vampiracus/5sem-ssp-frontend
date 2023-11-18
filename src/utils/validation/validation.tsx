export function validationStub() {
    return true;
}

export function validatePositiveNumber(n: string) {
    if (!n.match(/^[0-9]+$/)) return 'Это дожно быть положительное целое число';
    return true;
}
