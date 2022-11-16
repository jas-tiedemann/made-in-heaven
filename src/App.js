import './App.css';
import Header from "./components/header/header";
import Start from "./components/start/start";
import Zeiten from "./components/zeiten/zeiten";
import ScrollButton from "./components/scrollButton/scrollButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Start />
      <Zeiten />
      <ScrollButton />
    </div>
  );
}
export default App;