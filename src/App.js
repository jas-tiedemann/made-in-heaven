import './App.css';
import Header from "./components/header/header";
import Start from "./components/start/start";
import Zeiten from "./components/zeiten/zeiten";
import ScrollButton from "./components/scrollButton/scrollButton";
import Tattoo from "./components/tattoo/tattoo";

function App() {
  return (
    <div className="App">
      <Header />
      <Start />
      <Zeiten />
      <ScrollButton />
      <Tattoo />
    </div>
  );
}
export default App;