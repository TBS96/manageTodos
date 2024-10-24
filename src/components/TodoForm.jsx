import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoForm = () => {

    const [todo, setTodo] = useState('')
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return
        addTodo({todo, completed: false})
        setTodo('')
    }

    return (
        <form onSubmit={add} className='flex'>
            <input type="search" placeholder='Write your tasks here...' value={todo} onChange={(e) => setTodo(e.target.value)} className='w-full border border-black/10 rounded-l-lg px-3 py-1.5 outline-none duration-150 bg-white/20' />

            <button type='submit' className='bg-[#333333] hover:bg-[#555555] duration-150 rounded-r-lg px-3 py-5 shrink-0'>Add Task</button>
        </form>
    )
}

export default TodoForm