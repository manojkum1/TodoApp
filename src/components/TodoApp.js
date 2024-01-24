import React, { useState } from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { toast } from "react-hot-toast";

function TodoApp() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
      toast.success("Successfull");
    }
    
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    toast.error("Remove");
  };

  return (
    <div className="w-1/2  rounded-lg  flex flex-col items-center gap-y-5 mt-[15px]">
      <div className="  flex space-x-2">
    
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className=" text-lg border rounded "
          maxLength={50}
        />
        <button
          className=" font-semibold bg-yellow-300 rounded px-1 py-1 "
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      <ul className=" list-decimal mt-2  ">
        {todos.map((todo, index) => (
          <div key={index}
           className=" flex  justify-between">
            <li key={index} className=" text-xl text-white">
              {todo}
              <button onClick={() => removeTodo(index)} className="   px-1 py-1 ">
                <FcDeleteDatabase />
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
