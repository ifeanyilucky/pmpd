import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import style from "./body.module.css";
import {
  FaUsersCog,
  FaChartLine,
  FaCss3Alt,
  FaCode,
  FaCheckDouble,
} from "react-icons/fa";
import Aos from "aos";

const Body = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [reason, setReason] = useState([
    {
      title: "INSIGHT",
      icon: <FaUsersCog />,
      text: "We understand the specific cause and effect of your project.",
      id: "1",
    },
    {
      title: "ANALYSIS",
      icon: <FaChartLine />,
      text: "We examine with detail the elements and structure of your company",
      id: "2",
    },
    {
      title: "BRAINSTORMING",
      icon: <FaUsersCog />,
      text: "All our great minds are brought together for your benefit",
      id: "3",
    },
    {
      title: "DEVELOPMENT",
      icon: <FaCode />,
      text: "After all the preparation steps the hard work begins.",
      id: "4",
    },
    {
      title: "TEXTING",
      icon: <FaCheckDouble />,
      text:
        "This is the final step before advertising. The project’s functionality is thoroughly tested and design verified.",
      id: "5",
    },
    {
      title: "ANALYSIS",
      icon: <FaChartLine />,
      text: "We examine with detail the elements and structure of your company",
      id: "6",
    },
  ]);
  const content = (
    <>
      <section>
        <Container>
          <h3 className="text-center my-5 fon">WHY CHOOSE US?</h3>
          <div className="row">
            {reason.map((why) => (
              <>
                <div className="col-md-4 text-center">
                  <div
                    key={why.id}
                    data-aos="fade-up"
                    className={`${style.box} ${style.box2}`}
                  >
                    <div className={style.icon}>{why.icon}</div>
                    <h5>{why.title}</h5>
                    <p>{why.text}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
  return content;
};

export default Body;
