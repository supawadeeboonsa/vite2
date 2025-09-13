import React from 'react';
import useStore from '../store/TodoStore';

type Todo = {
    id: number;
    text: string;
    completed: boolean;
};

const ShowTodoList: React.FC = () => {
    const todos = useStore((state: { todos: Todo[] }) => state.todos);

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo: Todo) => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowTodoList;