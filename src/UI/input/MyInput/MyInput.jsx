import classes from './MyInput.module.css';

const MyInput = ({ additionalStyle, placeholder, value, onChange }) => {
    return (  
        <input 
            className={classes.MyInput}
            style={additionalStyle}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
 
export default MyInput;