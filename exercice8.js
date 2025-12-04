function totalAvecRemise(total, remise) {
    let montantRemise = total * (remise / 100);
    let totalFinal = total - montantRemise;
    return totalFinal;

}

let totalHT = Number(prompt("Entrez le total HT :"));
let remisePourcentage = Number(prompt("Entrez le pourcentage de remise (%) :"));

let totalFinal = totalAvecRemise(totalHT, remisePourcentage);

alert(`Le total final après remise est : ${totalFinal.toFixed(2)}`);
console.log(`Total HT : ${totalHT}`);
console.log(`Remise : ${remisePourcentage}%`);
console.log(`Total final : ${totalFinal.toFixed(2)}`);