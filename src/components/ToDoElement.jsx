import '../styles/ToDoElement.css';
import '../styles/root.css';

import { useState } from 'react';

import MyButton from '../UI/button/MyButton/MyButton';

const ToDoElement = ({id, todo, onClickDelete}) => {
    const [isMarkedDone, setIsMarkedDone] = useState(false);
    const handleOnClickMarkDone = () => {
        setIsMarkedDone(!isMarkedDone);
    }
    return (  
        <div className={`ToDoElement ${isMarkedDone ? 'ToDoElement__MarkedDone' : ''}`}>
            <div className='ToDoElement__Content'>
                <strong>{id}. {todo.title}</strong>
                <p>{todo.description}</p>
            </div>
            <div className='ToDoElement__Control'>
                <MyButton text='✓' onClick={handleOnClickMarkDone}/>
                <MyButton text='✗' onClick={onClickDelete}/>
            </div>
        </div>
    );
}
 
export default ToDoElement;