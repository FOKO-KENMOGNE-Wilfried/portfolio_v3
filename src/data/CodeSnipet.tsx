
const CodeSnipets: {
  id: number,
  userName: string,
  codeLabel: string,
  starsNumber: number,
  code: string,
  language: string,
  details: string
}[] = [
  {
    id: 1,
    userName: "@darkwall",
    starsNumber: 0,
    codeLabel: "Caracter reduce",
    language: "typescript",
    code: `
        function characterReduce(
          chaine: string,
          nombreDeLettres: number
        ): string {
          if (nombreDeLettres >= chaine.length) {
              return chaine;
          }
          const debut = chaine.substring(0, nombreDeLettres);
          const masque = "...";
          return \`\${debut}\${masque}\`;
        }
    `,
    details: "This is the snippet code for the caracter reduce funtion that replace the exceeded word by a '...' "
  }

]

export default CodeSnipets;