import { create } from 'zustand';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: number) => void;
}

const useTodoStore = create<TodoState>((set: (fn: (state: TodoState) => Partial<TodoState>) => void) => ({
    todos: [],
    addTodo: (text: string) => set((state: TodoState) => ({
        todos: [...state.todos, { id: Date.now(), text, completed: false }]
    })),
    deleteTodo: (id: number) => set((state: TodoState) => ({
        todos: state.todos.filter((todo: Todo) => todo.id !== id)
    })),
}));

export default useTodoStore;