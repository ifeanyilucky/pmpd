import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";

const Burger = () => {
  const [open, isOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => isOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 20px;
  top: 15px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 20;

  @media (min-width: 768px) {
    display: none;
  }
  div {
    width: 2rem;
    height: 0.14rem;
    background-color: ${({ open }) => (open ? "#333" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.23s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Burger;
