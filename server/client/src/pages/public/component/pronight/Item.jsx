import React from 'react'
import { Paper, Button } from '@mui/material'
import styles from "./pronight.module.css"
export default function Item(props){
    return (
        <div className={styles.imagediv}>
            <img 
            src={`https://drive.google.com/uc?export=view&id=${
                props.item.image.split("=")[1]
              }`}  
            alt={props.item.name} 
            className={styles.image}/>
            <p className={styles.name}>{props.item.name}</p>
            <p className={styles.venue}>{props.item.Place}</p>
        </div>
    )
}