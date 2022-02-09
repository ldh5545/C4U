import React from "react";

import styles from "./TitleBox.module.scss";

const TitleBox = () => {
  return (
    // 질문 페이지 및 모든 활동 모아 놓은 페이지 제목
    <h2 className={styles.title}>
      <span className={styles.highlight}>C 4 U </span>
      {"| C C C 활 동 포 유"}
    </h2>
  );
};

export default TitleBox;
