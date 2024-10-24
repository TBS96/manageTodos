import { createContext, useContext } from "react";

export const createTodoContext = createContext({
    todos: [
        {
            id: 1,
            eachTodo: "Todo message",
            completed: false
        }
    ],
    addTodo: (eachTodo) => {},
    updateTodo: (id, eachTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const TodoProvider = createTodoContext.Provider

export const useTodo = () => {
    return useContext(TodoProvider)
}