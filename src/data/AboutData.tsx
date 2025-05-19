import InfoCardIcon from "../components/common/icons/InfoCardIcon";
import MailIcon from "../components/common/icons/MailIcon";
import PhoneIcon from "../components/common/icons/PhoneIcon";
import TerminalBoxIcon from "../components/common/icons/TerminalBoxIcon";
import type { AboutMainObject } from "../utils/Types/AboutTypes";

const AboutMeData: AboutMainObject[] = [
  {
    id: 1,
    name: "Professionel",
    icon: <TerminalBoxIcon className="w-6 h-6" />,
    isActive: false,
    contents: [
      {
        id: 11,
        name: "Infos-proessionelles",
        info: [
          {
            id: 111,
            name: "Stages",
            isActive: false,
            files: [
              {
                id: 1111,
                name: "FarotySAS",
                isActive: false,
                data: `
                  /**
                   * Yo
                  */
                `,
              },
              {
                id: 1112,
                name: "Sazience Technologie Cameroon",
                isActive: false,
                data: `
                  /**
                   * Yo
                  */
                `,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Personnelle",
    icon: <InfoCardIcon className="w-6 h-6" />,
    isActive: true,
    contents: [
      {
        id: 21,
        name: "Infos-personalles",
        info: [
          {
            id: 211,
            name: "bio",
            isActive: true,
            files: [
              {
                id: 2111,
                name: "About me",
                isActive: false,
                data: `
                  /**
                   * Salut, moi c'est FOKO KENMOGNE Wilfried, un jeune développeur
                   * FullStackpassionné, toujours en quête d'apprentissage.
                   *
                   * Actuellement en formation au cursus d'ingénierie informatique
                   * à l'Institut UCAC-ICAM.
                   *
                   * Mon objectif : devenir une figure de la tech, une source d'inspiration
                   * pour les autres, et contribuer à transformer la vision de
                   * l'informatiqueen Afrique.
                   *
                   * Je veux démontrer notre valeur dans les entreprises et œuvrer
                   * pourl'amélioration des conditions de travail dans
                   * le secteur IT sur le continent.
                  */
                `,
              },
            ],
          },
          {
            id: 212,
            name: "Interet",
            isActive: false,
            files: [
              {
                id: 2121,
                name: "Music",
                isActive: false,
                data: `
                  /**
                   * J'aime bien ecouter de la musique d'artiste comme Gims pricipalement mais
                   * aussi beaucoup de J-pop, en dehors de ca il m'arrive d'ecouter de la k-pop
                   * et certaines musiques americaines.
                  */
                `,
              },
              {
                id: 2122,
                name: "Jeux-video",
                isActive: false,
                data: `
                  /**
                   * J'aime aussi jouer a des jeux video, des fois des Gacha, des fois des jeux
                   * d'aventures ou de combat, par contre je ne suis pas fan de EA Sport.
                  */
                `,
              },
              {
                id: 2123,
                name: "Jap-Animation",
                isActive: false,
                data: `
                  /**
                   * Je suis ce que la societe defini comme etant un Otaku donc c'est naturellement
                   * que je suis fan de tout ce qui est jap-animation (manga, anime) mais les webtoon
                   * sont aussi l'une de mes principales sources de distraction (manhua, manhwa).
                  */
                `,
              },
            ],
          },
          {
            id: 213,
            name: "education",
            isActive: false,
            files: [
              // {
              //   id: 2131,
              //   name: "Lycee de Nylon Ndogpassi",
              //   isActive: false,
              //   data: `
              //     /**
              //      * Yo
              //     */
              //   `,
              // },
              {
                id: 2131,
                name: "Institut Ucac-Icam",
                isActive: false,
                data: `
                  /**
                   * L'Institut UCAC-ICAM est le fruit d'un partenariat entre
                   * l'Université Catholique d'Afrique Centrale (UCAC) et l'Institut
                   * Catholique d'Arts et Métiers (ICAM - France). C'est une école
                   * d'ingénieurs d'excellence qui forme des professionnels complets :
                   * compétents techniquement, rigoureux, responsables et ouverts sur le monde.
                   *
                   * Ce cadre unique me permet de développer à la fois des compétences solides
                   * en informatique (développement, systèmes, réseau, cybersécurité…) et une
                   * approche humaine du métier d'ingénieur, tournée vers l'innovation,
                   * l'éthique et l'impact sociétal.
                  */
                `,
              }
            ],
          },
        ],
      },
      {
        id: 22,
        name: "Contacts",
        isDirectlyDisplayContent: true,
        info: [
          {
            id: 221,
            name: "Pro",
            isActive: false,
            files: [
              {
                id: 2211,
                name: "email",
                isActive: false,
                icon: <MailIcon className="w-6 h-4" />,
                data: "fokowilfried7@gmail.com",
              },
              {
                id: 2212,
                name: "tel",
                isActive: false,
                icon: <PhoneIcon className="w-6 h-6" />,
                data: "683415230 / 620131496",
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   id: 3,
  //   name: "Gaming",
  //   icon: <GamepadIcon className="w-6 h-6" />,
  //   isActive: false,
  //   contents: [
  //     {
  //       id: 31,
  //       name: "Gaming",
  //       info: [
  //         {
  //           id: 311,
  //           name: "",
  //           isActive: false,
  //           files: [
  //             {
  //               id: 3111,
  //               name: "",
  //               isActive: false,
  //               data: `
  //                 /**
  //                  * Yo
  //                 */
  //               `,
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
]

export default AboutMeData;