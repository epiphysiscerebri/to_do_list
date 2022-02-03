import classes from './Deal.module.css'

function Deal () {
    return (
        <div className={classes.deal}>
            <div className={classes.text}>text</div>
            <input className={classes.checkbox} type='checkbox' />
            <input className={classes.delete} type='checkbox' />
        </div>
    )
};

export default Deal;