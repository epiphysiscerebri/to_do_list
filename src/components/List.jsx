import classes from './List.module.css'
import Deal from './Deal';

function List () {
    return (
        <div className={classes.list}>
            <div>
            <Deal />
            <Deal />
            <Deal />
            <textarea className={classes.textArea}></textarea> 
            <button className={classes.button}>Add deal</button>
            </div>
        </div>
    )
};

export default List;