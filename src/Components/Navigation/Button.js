import React from "react";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--large", "btn--medium"];

export const Button = ({
  children,
  type,
  onclick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onclick={onclick}
      type={type}
    >
      {children}
    </button>
  );
};
