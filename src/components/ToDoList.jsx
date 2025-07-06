import { useState } from 'react';

import "../styles/ToDoList.css";
import '../styles/root.css';
import ToDoElement from './ToDoElement';

const ToDoList = () => {
    const [todos, setTodos] = useState([
        {title: 'Java Script', description: 'Learn JavaScript basics'},
        {title: 'React', description: 'Learn React basics'},
        {title: 'Redux', description: 'Learn Redux basics'},
        {title: 'Node.js', description: 'Learn Node.js basics'},
        {title: 'Express', description: 'Learn Express basics'}
    ]);
    const handleDelete = (id) => {
        const newTodos = todos.filter((_, index) => index !== id);
        setTodos(newTodos);
    }
    return (  
        <div className="ToDoList">
            <div className="ToDoList__Header">
                <div>
                    <strong>To Do List</strong>
                </div>
            </div>
            <div className="ToDoList__Body">
                {
                    todos.map((todo, index) => (
                        <ToDoElement key={index} id={index + 1} todo={todo} onClickDelete={() => handleDelete(index)}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default ToDoList;