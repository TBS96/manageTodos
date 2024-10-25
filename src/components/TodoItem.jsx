import React from 'react'

const TodoItem = () => {
    return (
        <div className='flex border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black'>

            {/* checkbox */}
            <input type="checkbox" className='cursor-pointer' />

            {/* editable text */}
            <input type="search" className={`border outline-none w-full bg-transparent rounded-lg`} />

            {/* edit, save btn */}
            <button className='inline-flex size-8 rounded-lg text-sm border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'></button>

            {/* delete btn */}
            <button className='inline-flex size-8 rounded-lg text-sm border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'></button>

        </div>
    )
}

export default TodoItem