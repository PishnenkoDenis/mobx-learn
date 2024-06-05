import "./App.css";
import { RootStoreContext } from "./Context/root-store-context";
import { Counter } from "./components/Counter/Counter";
import { Photos } from "./components/Photos/Photos";
import { Posts } from "./components/Posts/Posts";
import { Todos } from "./components/Todos/Todos";
import RootStore from "./stores/root-store";

function App() {
  return (
    <RootStoreContext.Provider value={new RootStore()}>
      <div className="App">
        <Counter />
        <Photos />
        <Posts />
        <Todos />
      </div>
    </RootStoreContext.Provider>
  );
}

export default App;
