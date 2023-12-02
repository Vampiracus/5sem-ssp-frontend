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

export function validateNameNoDots(n: string) {
    const regexp = /^[A-Za-zА-ЯЁа-яё0-9 \-\\']+$/;
    if (!n.match(regexp)) return 'Разрешены русские и латинские буквы, цифры, тире';
    return true;
}

export function validatePhone(n: string) {
    if (n === '-') return true;
    const regexp = /^(\+7|8|7)[0-9]{10}$/;
    if (!n.match(regexp)) return 'Введите прочерк или телефон в формате +78000000000';
    return true;
}

export function validateLatinDigits(n: string) {
    const regexp = /^[A-Za-z0-9\-_]+$/;
    if (!n.match(regexp)) return 'Разрешены русские и латинские буквы, цифры и тире';
    return true;
}

export function validatePassword(n: string) {
    if (n.length < 8) return 'Минимальная длина пароля — 8';
    if (n.length > 20) return 'Максимальная длина пароля — 20';
    return true;
}

export function validateDate(n: string) {
    const regexp = /^\d\d.\d\d.\d\d\d\d$/;
    if (!n.match(regexp)) return 'Дата должна быть в виде DD.MM.YYYY';
    return true;
}
