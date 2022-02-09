import React, { useEffect, useState } from "react";

import styles from "./Wait.module.scss";
import { useNavigate } from "react-router-dom";

const waitTexts = ["분석중.", "분석중..", "분석중..."];

//대기 페이지
const Wait = () => {
  const [status, setStatus] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const intervals = setInterval(() => {
      if (status < waitTexts.length - 1) {
        setStatus(status + 1);
      } else {
        navigate("/result");
      }
    }, 1000);

    return () => {
      clearInterval(intervals);
    };
  }, [status]);

  return (
    <div className={styles.wait}>
      {/*대기중에 나오는 이미지*/}
      <img
        className={styles.waitImg}
        alt={"분석중"}
        src={"/images/분석중.png"}
      />

      <h2 className={styles.waitText}>{waitTexts[status]}</h2>
    </div>
  );
};

export default Wait;
