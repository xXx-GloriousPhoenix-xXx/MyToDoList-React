import { useState, useMemo } from 'react';

import "../styles/ToDoList.css";
import '../styles/root.css';

import ToDoElementTemplate from './ToDoElementTemplate';
import ToDoElement from './ToDoElement';
import MyButton from '../UI/button/MyButton/MyButton';
import MySelect from '../UI/select/MySelect/MySelect';
import MyInput from '../UI/input/MyInput/MyInput';

const ToDoList = () => {
    const initialTodos = [
        {title: 'a', description: 'd'},
        {title: 'b', description: 'a'},
        {title: 'c', description: 'e'},
        {title: 'd', description: 'c'},
        {title: 'e', description: 'b'}
    ].map((todo, index) => ({ ...todo, id: index, done: false }));
    const [todos, setTodos] = useState(initialTodos);
    //default, creating
    const [todoCreationState, setTodoCreationState] = useState('default');
    const handleDelete = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }
    const handleToggleDone = (id) => {
        const updatedTodos = todos.map(todo => {
            return todo.id === id ? {...todo, done: !todo.done} : todo;
        });
        setTodos(updatedTodos);
    }
    const handleCreateTodo = (title, description) => {
        if (title.trim() === '' || description.trim() === '') {
            alert('Title and description cannot be empty');
            return;
        }
        const newTodo = { title, description, id: Date.now(), done: false };
        setTodos([...todos, newTodo]);
        setTodoCreationState('default');
    }
    const handleCancelCreateTodo = () => {
        setTodoCreationState('default');
    }
    const options = [
        {value: 'title', label: 'By Title'},
        {value: 'description', label: 'By Description'},
        {value: 'done', label: 'By Completion'}
    ]
    const [sortingOption, setSortingOption] = useState(options[0]);
    const [filter, setFilter] = useState('');
    const sortedTodos = useMemo(() => {
        return [...todos].sort((a, b) => {
            if (sortingOption.value === 'done') {
                return a.done === b.done ? 0 : a.done ? 1 : -1;
            }
            return a[sortingOption.value].localeCompare(b[sortingOption.value]);
        });
    }, [todos, sortingOption]);
    const filteredTodos = useMemo(() => {
        console.log(filter);
        return sortedTodos.filter(todo => 
            todo.title.toLowerCase().includes(filter.toLowerCase()) || 
            todo.description.toLowerCase().includes(filter.toLowerCase())
        );
    }, [sortedTodos, filter]);
    const handleSorting = (newSortingOption) => {
        setSortingOption(newSortingOption);
    }
    const handleFiltering = (newFilter) => {
        setFilter(newFilter.target.value);
    }

    return (  
        <div className="ToDoList">
            <div className="ToDoList__Header">
                <div>
                    <strong>To Do List</strong>
                </div>
                <div>
                    <MySelect 
                        options={options}
                        value={sortingOption}
                        onChange={newSortingOption => handleSorting(newSortingOption)}
                    />
                </div>
                <div>
                    <MyInput
                        value={filter}
                        onChange={newFilter => handleFiltering(newFilter)}
                    />
                </div>
            </div>
            <div className="ToDoList__Body">
                {      
                    filteredTodos.map((todo, index) => (
                        <ToDoElement 
                            key={index} 
                            id={index + 1} 
                            todo={todo} 
                            onClickDelete={() => handleDelete(todo.id)}
                            onClickMarkDone={() => handleToggleDone(todo.id)}
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