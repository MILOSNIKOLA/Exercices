function hmTos(heure, minute) {
	//return heure,minute * 60
    return (heure*3600) + (minute*60);
}

// Afficher la sortie

console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));