import logo from "./logo.svg";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import { UseSelector } from "react-redux";
function App() {
  const items = useSelector((store) => store.cart.items);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {items.length}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
