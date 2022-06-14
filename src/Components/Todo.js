import React from 'react';

const Todo = ({ description, done, id, onChangeTodo, onRemoveTodo, index }) => {

  return (
    <>
      <div className="flex items-center h-5 cursor:pointer">
        <input id={id} name={id}
               type="checkbox"
               className="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500  dark:focus:ring-offset-gray-800"
               checked={done}
               data-done={done}
               onChange={() => onChangeTodo(index)}/>
      </div>
      <label htmlFor={id}
             className="ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500">
        {description}
      </label>
      <button onClick={() => onRemoveTodo(index)}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
             width="1em" height="1em" viewBox="0 0 28 28">
          <path fill="currentColor"
                d="M11.5 6h5a2.5 2.5 0 0 0-5 0ZM10 6a4 4 0 0 1 8 0h6.25a.75.75 0 0 1 0 1.5h-1.31l-1.217 14.603A4.25 4.25 0 0 1 17.488 26h-6.976a4.25 4.25 0 0 1-4.235-3.897L5.06 7.5H3.75a.75.75 0 0 1 0-1.5H10ZM7.772 21.978a2.75 2.75 0 0 0 2.74 2.522h6.976a2.75 2.75 0 0 0 2.74-2.522L21.436 7.5H6.565l1.207 14.478ZM11.75 11a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0v-8.5a.75.75 0 0 1 .75-.75Zm5.25.75a.75.75 0 0 0-1.5 0v8.5a.75.75 0 0 0 1.5 0v-8.5Z"></path>
        </svg>
      </button>
    </>
  );
};

Todo.propTypes = {};

export default Todo;
