import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import Layout from "../component/Layout/Layout";
import styles from "./KeyTalk.module.css";
import keytalk_fake from "./keytalk_fake.json";

function KeyTalk() {
  const [keytalks, setKeytalks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fire window scroll event to update scrollbar
    window.dispatchEvent(new Event("scroll"));
  }, [keytalks]);

  const getKeytalks = async () => {
    try {
      const url = `${process.env.REACT_APP_BACKENDURL}/api/keytalks/`;
      const data = await axios.get(url);

      setKeytalks((prev) => data.data.data);
      setKeytalks(keytalk_fake);
      // console.log();
      setIsLoading((prev) => false);
      // const teamsObj = {};
    } catch (err) {
      // setkeytalks(tempkeytalks);
      setIsLoading((prev) => true);
      console.log(err);
    }
  };

  useEffect(() => {
    getKeytalks();
  }, []);
  return (
    <>
      <Layout
        dataColor="#00b4d8"
        // dataColor="#00ddcc"
      >
        <div className={styles["header"]}>
          <h1 className={styles["main-heading"]}>key talks</h1>
        </div>

        {isLoading ? (
          <div className={styles["loading"]}>
            <ThreeCircles
              height="150px"
              width="150px"
              color="#fff"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor="#00b4d8"
              middleCircleColor=""
            />
          </div>
        ) : keytalks.length > 0 ? (
          <main className={styles["container"]}>
            {keytalks.map((keytalk, index) => {
              return <KeyTalkOne key={keytalk._id} keytalk={keytalk} />;
            })}
          </main>
        ) : (
          <h1 className={styles["coming-soon"]}>Coming Soon</h1>
        )}
      </Layout>
    </>
  );
}

export default KeyTalk;

const KeyTalkOne = ({ keytalk }) => {
    return (
        <div className={styles["keytalk"]}>
        {/* <div className={styles["keytalk__image"]}>
            <img src={keytalk.imageCover} alt="" />
        </div> */}
        <div className={styles["keytalk__info"]}>
            <div className={styles["keytalk__info__heading"]}>
            <h1>{keytalk.title}</h1>
            <p className={styles["keytalk__info__duration"]}>{keytalk.duration} min</p>
            </div>
            <div className={styles["keytalk__info__description"]}>
            <p>{keytalk.description}</p>
            </div>
        </div>
        </div>
    );
}
