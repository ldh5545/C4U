import React, { useState } from "react";

import styles from "./ActivityBox.module.scss";

const ActivityBox = ({ tag, activity, explain, img }) => {
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className={styles.activityBox}>
      <div className={styles.mainLine}>
        <span className={styles.activityText}>{activity}</span>
        <img
          onClick={() => {
            setMoreInfo(!moreInfo);
          }}
          className={`${styles.rightImg} ${moreInfo ? styles.moreInfo : ""}`}
          src={"/images/right.png"}
          alt={"right"}
        />
      </div>
      {moreInfo && (
        <div className={styles.subLine}>
          <span className={styles.tag}>{tag}</span>
          <div className={styles.activityDetail}>
            <img className={styles.activityImg} src={img} alt={"activity"} />
            <span className={styles.explainText}>{explain}</span>
          </div>
        </div>
      )}
      <hr className={styles.bottomLine} />
    </div>
  );
};

export default ActivityBox;
