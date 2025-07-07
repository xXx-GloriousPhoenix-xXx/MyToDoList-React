import classes from './MyButton.module.css';
import '../../../styles/root.css';

const MyButton = ({text, additionalStyle, onClick}) => {
    return ( 
        <button
            className={classes.MyButton}
            style={additionalStyle}
            onClick={onClick}>
            {text}
        </button>
    );
}
 
export default MyButton
;