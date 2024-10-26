import React, { useState } from 'react'
import { useTodo } from '../contexts'

const TodoItem = ({eachTodoObj, searchTerm}) => {

    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const [todoMsg, setTodoMsg] = useState(eachTodoObj.eachTodo) // eachTodo.eachTodo refers to the eachTodo object's eachTodo property
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const editTodo = () => {
        updateTodo(eachTodoObj.id, {...eachTodoObj, eachTodo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleDone = () => {
        console.log(eachTodoObj)
        toggleComplete(eachTodoObj.id)
    }

    // Check if search term matches the todo message
    const isHighlighted = eachTodoObj.eachTodo.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm.trim() !== '';

    return (
        <div className={`flex border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${eachTodoObj.completed ? "bg-[#c6e9a7]" : "bg-[#b57edf]"} ${isHighlighted ? "bg-yellow-300" : "bg-[#b57edf]"}`}>

            {/* checkbox */}
            <input type="checkbox" className='cursor-pointer accent-red-600' checked={eachTodoObj.completed} onChange={toggleDone} />

            {/* editable text */}
            <input
                type="search"
                className={`border cursor-pointer outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2 bg-white/50" : "border-transparent"} ${eachTodoObj.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
                onClick={toggleDone}
            />

            {/* edit, save btn */}
            <button className={`inline-flex size-8 rounded-lg text-sm border-black/10 justify-center items-center bg-gray-50 shrink-0 disabled:opacity-50 hover:scale-125 duration-200 hover:shadow-inner hover:shadow-gray-950 ${isTodoEditable ? "hover:bg-green-300" : "hover:bg-cyan-500"}`} 
                onClick={() => {
                    if (eachTodoObj.completed) return

                    if (isTodoEditable) {
                        editTodo()
                    } else {
                        setIsTodoEditable(true)
                    }
                }}
                disabled={eachTodoObj.completed}>{isTodoEditable ? "💾" : "📝"}</button>
            
            {/* delete btn */}
            <button className='inline-flex size-8 rounded-lg text-sm border-black/10 justify-center items-center bg-gray-50 hover:bg-red-500 hover:shadow-inner hover:shadow-gray-950 hover:scale-125 duration-200 shrink-0' onClick={() => deleteTodo(eachTodoObj.id)}>🗑️</button>
        </div>
    )
}

export default TodoItem