import classes from './List.module.css'
import Deal from './Deal/Deal';
import React from 'react';

function List (props) {

    
    let newDealElement = React.createRef();

    let dealElement = props.state.listComponent.map( deal => <Deal text= {deal.text} id= {deal.id} deleteDeal= {props.state.deleteDeal}/>)

    let addDeal = () => {
        let text = newDealElement.current.value;
        props.state.addDeal(text);
    }

    let updateNewTextDeal = () => {
        let text = newDealElement.current.value;
        props.state.updateNewTextDeal(text); 
    }


    return (
        <div className={classes.list}>
            <div>
            {dealElement}
            <textarea className={classes.textArea} onChange={updateNewTextDeal} ref={newDealElement} value={props.state.newTextDeal}></textarea> 
            <button className={classes.button} onClick={addDeal}>Add deal</button>
            </div>
        </div>
    )
};

export default List;