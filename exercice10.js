function sommeIterative(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}


function sommeRecursive(n) {
    if (n === 1) {
        return 1;
    }
    return n + sommeRecursive(n - 1);
}

