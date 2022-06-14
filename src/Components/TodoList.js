import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const allTodos = [
  { "description": "Einkaufen", "done": false },
  { "description": "Sport", "done": true },
  { "description": "Programmieren", "done": false },
]
const TodoList = () => {
  const [openCount, countOpenTodos] = useState(0);
  const [todos, setTodos] = useState(allTodos);
  const [textinput, setTextinput] = useState("");

  const changeText = (e) => {
    setTextinput(e.target.value);
  }
  const countOpen = () => {
    const donetodos = todos.filter(item => !item.done);
    countOpenTodos(donetodos.length)
  }
  const changeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const addTodo = () => {
    const newTodos = [...todos];
    newTodos.push({ "description": textinput, "done": false });
    setTodos(newTodos);
  }
  useEffect(() => {
    countOpen()
  }, [todos])

  return (
    <div className={"max-w-screen-md py-10 mx-auto"}>
      <h1 className={"text-3xl font-bold mb-4"}>Todo List</h1>{openCount}/{todos.length}
      <div>
        <label htmlFor="hs-trailing-button-add-on-with-icon" className="sr-only">New Todo</label>
        <div className="flex rounded-md shadow-sm">
          <input type="text" id="hs-trailing-button-add-on-with-icon"
                 name="hs-trailing-button-add-on-with-icon"
                 onChange={changeText}
                 placeholder="z.B. Putzen"
                 className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-l-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"/>
            <button onClick={addTodo} type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 19v-6H5v-2h6V5h2v6h6v2h-6v6Z"></path></svg>
            </button>
        </div>
      </div>
      <ul className="max-w-sm flex flex-col">
        {todos.map((todo, index) => {
          return (
            <li key={index}
                className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <div className="relative flex items-start w-full">
                <Todo description={todo.description} done={todo.done} id={`todo-${index}`}
                      index={index} onChangeTodo={changeTodo} onRemoveTodo={removeTodo}/>
              </div>
            </li>
          );
        })}
      </ul>


    </div>
);
};

TodoList.propTypes =
  {
    todos: PropTypes.array
  }
;

export default TodoList;
