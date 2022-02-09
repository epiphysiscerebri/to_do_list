import classes from "./List.module.css";
import Deal from "./Deal/Deal";
import React from "react";

function List(props) {
  let newDealElement = React.createRef();

  let dealElement = props.state.listComponent.map((deal) => (
    <Deal
      text={deal.text}
      id={deal.id}
      deleteDeal={props.state.deleteDeal}
      changeComplete={props.changeComplete}
      state={props.state}
    />
  ));

  let addDeal = () => {
    let text = newDealElement.current.value;
    props.state.addDeal(text);
  };

  let updateNewTextDeal = () => {
    let text = newDealElement.current.value;
    props.state.updateNewTextDeal(text);
  };

  let changeKeyPress = (e) => {
    if (e.key === "Enter") {
      let text = newDealElement.current.value;
      props.state.addDeal(text);
    }
  };

  return (
    <div className={classes.list}>
      <div>
        <textarea
          className={classes.textArea}
          onChange={updateNewTextDeal}
          ref={newDealElement}
          value={props.state.newTextDeal}
          placeholder="Введите значение..."
        ></textarea>
        <button className={classes.button} onKeyDown={changeKeyPress} onClick={addDeal}>
          Add deal
        </button>
        {dealElement}
      </div>
    </div>
  );
}

export default List;
