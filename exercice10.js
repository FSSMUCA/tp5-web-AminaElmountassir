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

/* Analyse

1 - Quel code est le plus lisible ?
// La version itérative est généralement la plus lisible. Le flux de travail est linéaire et facile à suivre .

2 - Quel code est le plus performant ?
// La version itérative est plus performante en JavaScript. La boucle 'for' est une structure de contrôle très optimisée. La récursion coûte cher en ressources car elle nécessite de créer un nouveau stack frame à chaque appel de fonction.

3 - La récursion peut-elle poser des problèmes ? Pourquoi ?
// OUI, le principal problème est le dépassement de capacité de la pile d'appels.

4 - Dans quels cas privilégier une boucle ?
//  Lorsque le nombre d'itérations est potentiellement très grand .
// Pour les problèmes qui se résolvent de manière linéaire .
//  Pour des raisons de performance et de clarté du code.
// La récursion est réservée aux problèmes intrinsèquement récursifs.
*/