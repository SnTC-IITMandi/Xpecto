import { style } from "@mui/system";
import React from "react";
import styles from "./Profile.module.css";


const Profile = () => {
    
    return (
      <div className={styles["containers"]}>
      <div className={styles["card-container"]}>
      <img className={styles["round"]} src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
      <h3>Ricky Park</h3>
      <h6>New York</h6>
      <p>User interface designer and <br/> front-end developer</p>
      
    </div>
    
    
    </div>
    )
};

export default Profile;