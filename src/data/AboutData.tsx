import GamepadIcon from "../components/common/icons/GamepadIcon";
import InfoCardIcon from "../components/common/icons/InfoCardIcon";
import MailIcon from "../components/common/icons/MailIcon";
import PhoneIcon from "../components/common/icons/PhoneIcon";
import TerminalBoxIcon from "../components/common/icons/TerminalBoxIcon";

const AboutMeData = [
  {
    id: 1,
    name: "Work",
    icon: <TerminalBoxIcon className="w-6 h-6" />,
    isActive: false,
    contents: [
      {
        id: 11,
        name: "bio",
        info: [
          {
            id: 111,
            name: "bio",
            isActive: false,
            files: [
              {
                id: 1111,
                name: "FarotySAS",
                isActive: false,
                data: "",
              },
              {
                id: 1112,
                name: "Sazience Technologie Cameroon",
                isActive: false,
                data: "",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Personnal",
    icon: <InfoCardIcon className="w-6 h-6" />,
    isActive: true,
    contents: [
      {
        id: 21,
        name: "Personal-info",
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
                   * The simple message to say you something about me...
                  */
                `,
              },
            ],
          },
          {
            id: 212,
            name: "interest",
            isActive: false,
            files: [
              {
                id: 2121,
                name: "Music",
                isActive: false,
                data: "...",
              },
              {
                id: 2122,
                name: "Gaming",
                isActive: false,
                data: "...",
              },
              {
                id: 2123,
                name: "Jap Animation",
                isActive: false,
                data: "...",
              },
            ],
          },
          {
            id: 213,
            name: "education",
            isActive: false,
            files: [
              {
                id: 1,
                name: "Lycee de Nylon Ndogpassi",
                isActive: false,
                data: "",
              },
              {
                id: 2,
                name: "Institut Ucac-Icam",
                isActive: false,
                data: "...",
              },
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
  {
    id: 3,
    name: "Gaming",
    icon: <GamepadIcon className="w-6 h-6" />,
    isActive: false,
    contents: [
      {
        id: 31,
        name: "Gaming",
        info: [
          {
            id: 311,
            name: "",
            isActive: false,
            files: [
              {
                id: 3111,
                name: "",
                isActive: false,
                data: "",
              },
            ],
          },
        ],
      },
    ],
  },
]

export default AboutMeData;