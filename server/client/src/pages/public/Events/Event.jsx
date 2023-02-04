import React from "react";
import styles from "./event.module.css";
import { Grid } from "@mui/material";
import { oldeventdetails } from "./oldevents";
import { ReactComponent as FixedLogo } from "../../../svg/xpecto-logo.svg";

// import { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import EventCard from "./EventCard";
import Layout from "../component/Layout/Layout";
const Event = () => {
  // const [eventdetails, seteventdetails] = useState(oldeventdetails);
  return (
    <>
    <Sidebar />
      <div
        className={`${styles["fixed-logo"]} ${styles["fixed-logo-visible"]}`}
      >
        <FixedLogo />
      </div>
      <Layout dataColor="#faea09">
    <div className={styles["event-main"]}>
      <p className={styles.heading}>Past Events</p>
      <div>
        <Grid
          container
          columnSpacing={5}
          rowSpacing={0}
          className={styles["event-container"]}
        >
          {oldeventdetails.map((element) => {
            return <EventCard data={element} />;
          })}
        </Grid>
      </div>
    </div>
    </Layout>
    </>
  );
};

export default Event;
