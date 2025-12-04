function verifierMotDePasse(mdp) {
    const longueurMinimale = 8;
    const contientSymbole = mdp.includes("@");

    if (mdp.length >= longueurMinimale && contientSymbole) {
        return true;
    } else {
        return false;
    }
}

let motDePasseUtilisateur = prompt("Veuillez entrer un mot de passe :");

if (verifierMotDePasse(motDePasseUtilisateur)) {
    alert("Mot de passe valide");
    console.log("Mot de passe valide");
} else {
    alert("Mot de passe non valide");
    console.log("Mot de passe non valide");
}