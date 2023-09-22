import "./App.css";
import { Provider, useSelector } from "react-redux";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <IceCreamContainer />
          <HookCakeContainer />
          <CakeContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
