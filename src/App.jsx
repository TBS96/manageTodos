import React, { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components/index'

const App = () => {

  const [todos, setTodos] = useState([])

  const addTodo = (eachTodo) => {
    const newTodo = { id: Date.now(), ...eachTodo };
    const updatedTodoList = [newTodo, ...todos];
    setTodos(updatedTodoList)
  }

  const updateTodo = (id, eachTodo) => {
    const updatedData = todos.map((prevTodoState) => prevTodoState.id === id ? eachTodo : prevTodoState)
    setTodos(updatedData)
  }
  
  const deleteTodo = (id) => {
    const updatedDataAfterDelete = todos.filter((eachTodoObj) => eachTodoObj.id !== id);
    setTodos(updatedDataAfterDelete)
  }
  
  const toggleComplete = (id) => {
    setTodos((prevTodos) => prevTodos.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos')) // fetch todos from local storage on app load
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))  // save todos to local storage on state change
  }, [todos])
  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-xl shadow-[#567cb6] rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your Todos'</h1>

          {/* TodoForm component below */}
          <div className='mb-4'>
            <TodoForm />
          </div>

          {/* Loop and add each todo-item below */}
          <div className='flex flex-wrap gap-y-3'>
            {todos.map((eachTodoObj) => (
              <div key={eachTodoObj.id} className='w-full'>
                <TodoItem eachTodoObj={eachTodoObj} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App