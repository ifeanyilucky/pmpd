import Agape from "../../assets/agape.png";
import Cardinal from "../../assets/cardinal.png";
import Jentoscopes from "../../assets/jentoscopesng.png";
import Shodex from "../../assets/shodex.png";
import Villesec from "../../assets/villesec.png";
import style from "./portfolio.module.css";

const Projects = [
  {
    name: "Agape",
    imgUrl: Agape,
    description: "Journalist & Broadcaster Portfolio",
    category: "Website Design",
    id: 1,
    cName: `${style.pBlack}`,
  },

  {
    name: "Cardinal Fleet",
    imgUrl: Cardinal,
    description: "Logistics and Haulage",
    category: "Website Design",
    id: 2,
    cName: `${style.pdeepGreen}`,
  },
  {
    name: "Jentoscopes",
    imgUrl: Jentoscopes,
    description: "Jentoscpoes Specialist Clinics",
    category: "Website Design",
    id: 3,
    cName: `${style.pdarkBlue}`,
  },
  {
    name: "Villesec",
    imgUrl: Villesec,
    description: "Security",
    category: "Website Design",
    id: 4,
    cName: `${style.pBlue}`,
  },
  {
    name: "Shodex",
    imgUrl: Shodex,
    description: "Landscaping",
    category: "Website Design",
    id: 5,
    cName: `${style.pGreen}`,
  },
];

export default Projects;
