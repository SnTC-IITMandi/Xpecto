import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const Profile = () => {
  const user=useSelector((state)=>state.userinfo);
  const navigate=useNavigate();

  const [userdetails,setuserdetails]=useState({data:{}});
  const [userimage,setuserimage]=useState("");
  const getprofiledata=async()=>{
    try{   
           const url = `${process.env.REACT_APP_BACKENDURL}/api/profile`;
           const  data  = await axios.post(url,{
             user:user.email,
           });
          setuserdetails(userdetails=>({
            ...userdetails,
            data:data.data.data
          }))
          setuserimage(data.data.data.image)
      }catch{
           console.log("Error Occured");
     }
    }
    useEffect(()=>{
     getprofiledata();
    },[])
    return (
      <div className={styles["pback"]}>
      <div className={styles["containers"]}>
      <div className={styles["card-container"]}>
      <img className={styles["round"]} src={userimage} alt={userdetails.data.displayName} />
      <h4>FullName: {userdetails.data.displayName}</h4>
      <h5>Email: {userdetails.data.email}</h5>
      <h5>Phone No:{userdetails.data.phoneNumber}</h5>
      <Button onClick={()=>{
			navigate("/")
		}} >Home</Button>
      {/* {(userdetails.registerevents).map((element) => {
            return <p>{element.eventname}</p>;
          })} */}
    </div>
    
    
    </div>
    </div>
    )
};

export default Profile;