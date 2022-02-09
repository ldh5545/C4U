import React from "react";

import styles from "./Main.module.scss";
import CustomizedButton from "../Components/CustomizedButton/CustomizedButton";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      {/*첫화면 제일 큰 제목*/}
      <span className={styles.title}>C4U</span>

      {/*첫화면 두번째 제목*/}
      <span className={styles.subTitle}>재미로 보는 CCC 활동 추천</span>

      {/*첫화면 세번째 제목*/}
      <span className={styles.mainContent}>당신에게 어울리는 CCC 활동은?</span>

      <CustomizedButton
        onClick={() => {
          navigate("/question?number=1");
        }}
        text={"START"}
      />
    </div>
  );
};

export default Main;
