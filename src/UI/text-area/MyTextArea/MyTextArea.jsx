import classes from './MyTextArea.module.css';

const MyTextArea = ({ placeholder, value, onChange }) => {
    return ( 
        <textarea
            className={classes.MyTextArea}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
 
export default MyTextArea;