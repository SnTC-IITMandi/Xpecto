import React, {  useState } from "react";
import styles from "./AmbassadorPage.module.css";
import {motion} from"framer-motion";
import Layout from "../component/Layout/Layout";
const EventsHomePage = () => {
    return (
        <>
            <Layout dataColor="#F8C456">
                <div className={styles["header"]}>
                    <h1 className={styles["events-page-heading"]}>Campus Ambassador Program</h1>
                    <motion.p 
                    initial={{y:50}}
                    whileInView={{y:0 }}
                    transition={{
                    delay:.1,
                    duration: 1,
                    }}
                    className={styles["aboutcontent"]}>
                    <br/>
                    Back and better than before, XPECTO’23 is here with its campus ambassador program,
                    where you are the face of the famed technical fest of IIT Mandi in your college 
                    community and become the driving force for encouraging students to partake in the
                    greatest fest of Himalayas. A reputed position where you get the golden opportunity 
                    to represent your entire institute to us as well as our fest to yours, that’s our 
                    campus ambassador program.
                    </motion.p>

                    <h1 className={styles["events-page-subheading"]}>Opportunity to go above and beyond</h1>
                    <motion.p 
                    initial={{y:50}}
                    whileInView={{y:0 }}
                    transition={{
                    delay:.1,
                    duration: 1,
                    }}
                    className={styles["aboutcontent"]}>
                    Become the link that joins your college community with XPECTO’23 by fulfilling the duties 
                    of the campus ambassador. Flexible and fast, with a wide variety of works from providing 
                    information to interested students about XPECTO’23 to registering for the fest using your 
                    referral code, expand on your confidence and leadership skills.
                    </motion.p>

                    <motion.p 
                    initial={{y:50}}
                    whileInView={{y:0 }}
                    transition={{
                    delay:.1,
                    duration: 1,
                    }}
                    className={styles["aboutcontent"]}>
                    Phenomenal networking opportunities, extravagant communication skills and, of course, 
                    the fame of representing the fest of one of India’s premier institutes is what all awaits 
                    for our campus ambassadors.
                    </motion.p>

                </div>
                
            </Layout>
        </>
    );
};

export default EventsHomePage;
