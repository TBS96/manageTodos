import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoForm = () => {

    const [eachTodo, setEachTodo] = useState('')
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!eachTodo.trim()) return alert('Please enter a task!')
        addTodo({eachTodo, completed: false})
        setEachTodo('')
    }

    return (
        <form onSubmit={add} className='flex'>
            <input type="search" placeholder='Write your tasks here...' value={eachTodo} onChange={(e) => setEachTodo(e.target.value)} className='w-full border border-black/10 rounded-l-lg px-3 py-1.5 outline-none duration-150 bg-white/20' />

            <button type='submit' className='bg-[#333333] hover:bg-[#555555] duration-150 rounded-r-lg px-3 py-5 shrink-0'>Add Task</button>
        </form>
    )
}

export default TodoForm