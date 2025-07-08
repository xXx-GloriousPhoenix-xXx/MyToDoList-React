import classes from './MyInput.module.css';

const MyInput = ({ placeholder, value, onChange }) => {
    return (  
        <input 
            className={classes.MyInput}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}
 
export default MyInput;