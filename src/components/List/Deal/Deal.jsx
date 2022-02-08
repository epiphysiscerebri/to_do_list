import React from 'react';
import classes from './Deal.module.css'


function Deal (props) {

    
    let deleteDeal = () => {
     props.deleteDeal(props.id);
    }


    return (
        <div className={classes.deal}>
            <div className={classes.text}>{props.text}</div>
            <input className={classes.checkbox} type='checkbox' />
            <button className={classes.delete} onClick={deleteDeal}/>
        </div>
    )
};

export default Deal;