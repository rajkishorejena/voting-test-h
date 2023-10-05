import Vote from "./Components/Vote";
import Result from "./Components/Result";
import './App.css';

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center m-3 ">
      <p className="text-xl text-green-800 font-bold">
       Vote your fav character...
      </p>
      <Vote/>
      <Result/>
  </div>
  );
}

export default App;
