import React from "react";

import styles from "./AllActivity.module.scss";
import TitleBox from "../Components/TitleBox/TitleBox";
import ActivityBox from "./ActivityBox/ActivityBox";
import { activities } from "../data/activityData";
import CustomizedButton from "../Components/CustomizedButton/CustomizedButton";
import { useNavigate } from "react-router-dom";

const AllActivity = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.allActivity}>
      <TitleBox />

      <div className={styles.activityContainer}>
        {activities.map((e) => {
          return (
            <ActivityBox
              key={e.activity}
              activity={e.activity}
              tag={e.tag}
              img={e.img}
              explain={e.explain}
            />
          );
        })}
      </div>

      <div className={styles.buttonLine}>
        <CustomizedButton
          onClick={() => {
            navigate(-1);
          }}
          text={"결과 페이지로 돌아가기"}
        />
      </div>
    </div>
  );
};

export default AllActivity;
