import classes from './List.module.css'
import Deal from './Deal';
import React from 'react';

function List (props) {

    
    let newDealElement = React.createRef();

    let dealElement = props.state.listComponent.map( deal => <Deal text= {deal.text} />)


    return (
        <div className={classes.list}>
            <div>
            {dealElement}
            <textarea className={classes.textArea} ref={newDealElement} value='asd'></textarea> 
            <button className={classes.button}>Add deal</button>
            </div>
        </div>
    )
};

export default List;