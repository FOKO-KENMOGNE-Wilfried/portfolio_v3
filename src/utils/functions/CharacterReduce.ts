export default function characterReduce(
  chaine: string,
  nombreDeLettres: number,
): string {
  if (nombreDeLettres >= chaine.length) {
    // Si le nombre de lettres à afficher est supérieur ou égal à la longueur de la chaîne, on retourne la chaîne entière.
    return chaine
  }

  // On extrait les premières lettres et on ajoute des points de suspension.
  const debut = chaine.substring(0, nombreDeLettres)
  const masque = "..."

  return `${debut}${masque}`
}
