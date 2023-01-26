function fibsRec(length) {
    // Base case
    if (length === 1) return [0];

    if (length === 2) return [0, 1];

    // Recursion
    return [
        ...fibsRec(length - 1),
        fibsRec(length - 1)[length - 2] + fibsRec(length - 1)[length - 3],
    ];
}

console.log(fibsRec(8));
