import React from 'react';
import classes from './Deal.module.css'
import { useState } from 'react';


function Deal (props) {
  const  [classN, setClass] = useState(classes.deal);

   
    
    let deleteDeal = () => {
     props.deleteDeal(props.id);
    }

    let changeClick = () => {
       if(classN === classes.deal) {
           setClass(classes.active)
       } else {
           setClass(classes.deal)
       }
    }

    return (
        <div className={classN}>
            <div className={classes.text}>{props.text}</div>
            <input className={classes.checkbox} type='checkbox' onChange= {changeClick}/>
            <button className={classes.delete} onClick={deleteDeal}/>
        </div>
    )
};

export default Deal;