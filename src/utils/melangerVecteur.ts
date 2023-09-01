function melangerVecteur<T>(vecteurOriginal: T[]) {
    const vecteurMelange = vecteurOriginal.slice();
    let indexMaximum = vecteurMelange.length;
    let objetTemporaire: T;
    let indexAMelanger: number;

    while (indexMaximum) {
        indexAMelanger = Math.floor(Math.random() * indexMaximum--);

        objetTemporaire = vecteurMelange[indexMaximum];
        vecteurMelange[indexMaximum] = vecteurMelange[indexAMelanger];
        vecteurMelange[indexAMelanger] = objetTemporaire;
    }

    return vecteurMelange;
}

export default melangerVecteur;