import { useState } from 'react';

import '../styles/ToDoElementTemplate.css';
import '../styles/ToDoElement.css';

import MyInput from '../UI/input/MyInput/MyInput';
import MyTextArea from '../UI/text-area/MyTextArea/MyTextArea';
import MyButton from '../UI/button/MyButton/MyButton';

const ToDoElementTemplate = ({handleOnCreateClick, handleOnCancelClick}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    return (  
        <div className='ToDoElementTemplate'>
            <div className='ToDoElementTemplate__Content'>
                <MyInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title...'/>
                <MyTextArea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Description...'/>
            </div>
            <div className="ToDoElementTemplate__Control">
                <MyButton text='+' onClick={() => handleOnCreateClick(title, description)}/>
                <MyButton text='-' onClick={handleOnCancelClick}/>
            </div>
        </div>
    );
}
 
export default ToDoElementTemplate;