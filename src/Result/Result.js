import React, { useEffect, useState } from "react";

import styles from "./Result.module.scss";
import CustomizedButton from "../Components/CustomizedButton/CustomizedButton";
import { activities } from "../data/activityData";
import { useNavigate } from "react-router-dom";
import { mbtiActivity } from "../data/MBTITypeData";

let randomSeed = Math.random();

const Result = ({ mbti }) => {
  const navigate = useNavigate();
  const [moreInfo, setMoreInfo] = useState(false);

  const activityName =
    mbtiActivity[mbti][Math.floor(randomSeed * mbtiActivity[mbti].length)];

  const activity = activities.find(
    (activity) => activity.activity === activityName
  );

  return (
    <div className={styles.result}>
      {/*결과 페이지 제목*/}
      <span className={styles.title}>당신을 위한 CCC 활동은</span>
      <span className={styles.activityName}>{activity.activity}</span>
      <img className={styles.activityImg} src={activity.img} />

      <span className={styles.tag}>{activity.tag}</span>

      <div className={styles.activityContent}>
        <span className={styles.activityText}>
          {moreInfo || (!moreInfo && activity.explain.length < 58)
            ? activity.explain
            : activity.explain.substring(0, 58) + "... "}
        </span>
        <span
          className={styles.more}
          onClick={() => {
            setMoreInfo(!moreInfo);
          }}
        >
          {moreInfo ? "접기" : "더보기"}
        </span>
      </div>

      <div className={styles.buttonBox}>
        <CustomizedButton
          text={"CCC가 궁금하다면"}
          onClick={() => {
            // CCC가 궁금하다면을 눌렀을 때, 이동할 링크
            window.open("https://www.naver.com/", "_blank");
          }}
        />
        <CustomizedButton
          // 모든 활동 모아서 보는 페이지
          text={"더 많은 활동이 궁금하다면"}
          onClick={() => {
            navigate("/allActivity");
          }}
        />
      </div>
    </div>
  );
};

export default Result;
