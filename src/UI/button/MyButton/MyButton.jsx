import classes from './MyButton.module.css';
import '../../../styles/root.css';

const MyButton = ({text, onClick}) => {
    return ( 
        <button
            className={classes.MyButton}
            onClick={onClick}>
            {text}
        </button>
    );
}
 
export default MyButton
;