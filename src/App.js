import React from 'react'
import TodoApp from './components/TodoApp'

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-slate-600 relative overflow-x-hidden items-center">
          <h1 className= " bg-white  rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-5xl font-bold  text-blue-500 font-serif  ">My To-Do List</h1>

      <TodoApp/>
    </div>
  )
}

export default App