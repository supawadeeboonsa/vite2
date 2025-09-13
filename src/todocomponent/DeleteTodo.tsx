import React from 'react';
import useStore from '../store/TodoStore';

const DeleteTodo: React.FC = () => {
    const { todos, deleteTodo } = useStore();

    const handleDelete = (id: number) => {
        deleteTodo(id);
    };

    return (
        <div>
            <h2>Delete Todo</h2>
            <ul>
                {todos.map((todo: { id: number; text: string; completed: boolean }) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeleteTodo;