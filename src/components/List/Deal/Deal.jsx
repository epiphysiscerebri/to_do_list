import classes from './Deal.module.css'

function Deal (props) {
    return (
        <div className={classes.deal}>
            <div className={classes.text}>{props.text}</div>
            <input className={classes.checkbox} type='checkbox' />
            <button className={classes.delete} type='checkbox' />
        </div>
    )
};

export default Deal;