let n = Number(prompt("Entrez un nombre :"));

if (n < 0) {
    console.log("Nombre négatif");
} else {
    if (n > 100) {
        console.log("Très grand");
    } else if (n > 50) {
        console.log("Grand");
    } else if (n >= 11) {
        console.log("Moyen");
    } else {
        console.log("Petit");
    }
}