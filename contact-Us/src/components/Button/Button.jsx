import React from "react";
import styles from "./Button.module.css";

function Button({ isOutline, text, icons, ...rest }) {
  return (
    <button
      {...rest}
      className={isOutline ? styles.outline_btn : styles.primary_btn}
    >
      {icons}
      {text}
    </button>
  );
}

export default Button;
