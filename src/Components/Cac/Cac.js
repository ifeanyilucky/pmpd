import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Cac = () => {
  return (
    <div>
      <ContainerFluid>
        <CACB>
          <h1 className="body__head">(CAC Business & Company Registration)</h1>
          <p className="text-muted">
            If your business is a joint venture, an LLC, corporation,
            partnership, or nonprofit corporation, you’ll probably need to
            register with any state where you conduct business activities.
          </p>
          <button className="pmpd-btn">
            <Link to="/contact" className="link">
              CONTACT US
            </Link>
          </button>
        </CACB>
        <img
          src="https://res.cloudinary.com/codack/image/upload/v1605990963/inspire-pic_hadvu5.jpg"
          className="w-100"
          alt="CAC"
        />
      </ContainerFluid>
    </div>
  );
};
const CACB = styled.div`
  text-align: center;
  width: 70%;
  margin: 0 auto;
  padding-bottom: -10rem;
  padding-top: 5rem;

  @media (max-width: 860px) {
    width: 100%;
  }
`;

const ContainerFluid = styled.div`
  width: 100%;
`;
export default Cac;
