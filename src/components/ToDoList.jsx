import { useState } from 'react';

import "../styles/ToDoList.css";
import '../styles/root.css';

import ToDoElementTemplate from './ToDoElementTemplate';
import ToDoElement from './ToDoElement';
import MyButton from '../UI/button/MyButton/MyButton';
import MySelect from '../UI/select/MySelect/MySelect';

const ToDoList = () => {
    const initialTodos = [
        {title: 'Java Script', description: 'Learn JavaScript basics'},
        {title: 'React', description: 'Learn React basics'},
        {title: 'Redux', description: 'Learn Redux basics'},
        {title: 'Node.js', description: 'Learn Node.js basics'},
        {title: 'Express', description: 'Learn Express basics'}
    ].map(todo => ({ ...todo, done: false }));

    const [todos, setTodos] = useState(initialTodos);
    //default, creating
    const [todoCreationState, setTodoCreationState] = useState('default');
    const handleDelete = (id) => {
        const newTodos = todos.filter((_, index) => index !== id);
        setTodos(newTodos);
    }
    const handleToggleDone = (id) => {
        const updatedTodos = todos.map((todo, index) => {
            return index === id ? {...todo, done: !todo.done} : todo;
        });
        setTodos(updatedTodos);
    }
    const handleCreateTodo = (title, description) => {
        if (title.trim() === '' || description.trim() === '') {
            alert('Title and description cannot be empty');
            return;
        }
        const newTodo = { title, description, done: false };
        setTodos([...todos, newTodo]);
        setTodoCreationState('default');
    }
    const handleCancelCreateTodo = () => {
        setTodoCreationState('default');
    }
    return (  
        <div className="ToDoList">
            <div className="ToDoList__Header">
                <div>
                    <strong>To Do List</strong>
                </div>
                <div>
                    <MySelect/>
                </div>
            </div>
            <div className="ToDoList__Body">
                {
                    todos.map((todo, index) => (
                        <ToDoElement 
                            key={index} 
                            id={index + 1} 
                            todo={todo} 
                            onClickDelete={() => handleDelete(index)}
                            onClickMarkDone={() => handleToggleDone(index)}
                        />
                    ))
                }
                {
                    todoCreationState === 'default'
                    ? <MyButton text='+' additionalStyle={{fontSize: '1.15rem'}} onClick={() => setTodoCreationState('creating')}/>
                    : todoCreationState === 'creating'
                    ? <ToDoElementTemplate 
                        handleOnCreateClick={handleCreateTodo}
                        handleOnCancelClick={handleCancelCreateTodo}/>
                    : null
                }
            </div>
        </div>
    );
}
 
export default ToDoList;