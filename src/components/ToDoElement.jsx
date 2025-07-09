import '../styles/ToDoElement.css';
import '../styles/root.css';

import MyButton from '../UI/button/MyButton/MyButton';

const ToDoElement = ({id, todo, onClickMarkDone, onClickDelete}) => {
    return (  
        <div className={`ToDoElement ${todo.done ? 'ToDoElement__MarkedDone' : ''}`}>
            <div className='ToDoElement__Content'>
                <strong>{id}. {todo.title}</strong>
                <p>{todo.description}</p>
            </div>
            <div className='ToDoElement__Control'>
                <MyButton text='✓' onClick={onClickMarkDone}/>
                <MyButton text='✗' onClick={onClickDelete}/>
            </div>
        </div>
    );
}
 
export default ToDoElement;