export default function characterReduce(
  chaine: string,
  nombreDeLettres: number,
): string {
  if (nombreDeLettres >= chaine.length) {
    return chaine
  }

  const debut = chaine.substring(0, nombreDeLettres)
  const masque = "..."

  return `${debut}${masque}`
}
