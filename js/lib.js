function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function playSoundAttack() {
    document.getElementById('playAttaquer').play()
}
function playSoundDefendre() {
    document.getElementById('playDefendre').play()
}
function playSoundSort() {
    document.getElementById('playSort').play()
}
