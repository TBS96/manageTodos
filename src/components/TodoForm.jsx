import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoForm = ({ onSearch }) => {
    const [eachTodo, setEachTodo] = useState('')
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!eachTodo.trim()) return alert('Please enter a task!')
        addTodo({ eachTodo, completed: false })
        setEachTodo('')
    }

    const handleSearch = (e) => {
        const term = e.target.value
        onSearch(term.toLowerCase()) // Passes the search term to App.jsx
    }

    return (
        <div>
            {/* Add task section */}
            <form onSubmit={add} className='flex mb-4'>
                <input type="search" placeholder='Write your tasks here...' className='w-full border border-black/10 rounded-l-lg px-3 py-1.5 outline-none duration-150 bg-white/20'
                    value={eachTodo || ''} // Ensure it's always a string
                    onChange={(e) => setEachTodo(e.target.value)} />
                <button type='submit' className='bg-[#333333] hover:bg-[#555555] duration-150 rounded-r-lg px-3 py-5 shrink-0'>
                    Add Task
                </button>
            </form>

            {/* Find task section */}
            <div className='fixed top-3'>
                <input type="search" className='w-full border border-black/10 rounded-lg px-2 py-1 outline-none duration-150 bg-white/20' placeholder='Search tasks...' onChange={handleSearch} />
            </div>
        </div>
    )
}

export default TodoForm