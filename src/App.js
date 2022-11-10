import './App.css';
import Header from "./components/header/header";
import Start from "./components/start/start";
import Zeiten from "./components/zeiten/zeiten";

function App() {
  return (
    <div className="App">
      <Header />
      <Start />
      <Zeiten />
    </div>
  );
}

export default App;
