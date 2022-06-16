import Calculator from './Components/Calculator';
import Chart from './Components/Chart';
import TodoList from './Components/TodoList';
import './App.css';

function App () {
  return (
    <div className={"bg-[#ddffc8] p-20"}>
      <div className={"max-w-3xl mx-auto "}>
        <h1 className={"text-4xl font-bold"}>Was wir heute erstellen werden:</h1>
        <ol className={"my-4 space-y-10 list-decimal "}>
          <li>
            <h2 className={"text-xl font-bold mb-4"}>ToDo App</h2>
            <div className={"p-10 bg-white rounded-2xl"}>
              <TodoList/>
            </div>
          </li>
          <li>
            <h2 className={"text-xl font-bold mb-4"}>Passing Props to Parent</h2>
            <div className={"p-10 bg-white rounded-2xl"}>
              <Calculator/>
            </div>
          </li>
          <li>
            <h2 className={"text-xl font-bold mb-4"}>Visualize API Data</h2>
            <div className={"p-10 bg-white rounded-2xl"}>
              <Chart/>
            </div>
          </li>
        </ol>
      </div>

    </div>
  );
}

export default App;
