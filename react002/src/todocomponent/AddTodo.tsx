import React, { useState } from 'react';
import useTodoStore from '../store/TodoStore';

const AddTodo: React.FC = () => {
    const [todoText, setTodoText] = useState('');
    const addTodo = useTodoStore((state: { addTodo: (text: string) => void }) => state.addTodo);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (todoText.trim()) {
            addTodo(todoText);
            setTodoText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default AddTodo;