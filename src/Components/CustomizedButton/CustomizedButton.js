import React from "react";

import styles from "./CustomizedButton.module.scss";

const CustomizedButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.customizedButton}>
      {text}
    </button>
  );
};

export default CustomizedButton;
