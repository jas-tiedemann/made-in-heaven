import './App.scss';
import HeaderDesk from "./components/header/headerDesk";
import HeaderMob from "./components/header/headerMob";
import Start from "./components/start/start";
import Zeiten from "./components/zeiten/zeiten";
import Footer from "./components/footer/footer";
import ScrollButton from "./components/scrollButton/scrollButton";
import Tattoo from "./components/tattoo/tattoo";
import { useState, useEffect } from "react";

function App() {

  const [mobileView, setMobileView] = useState(false);

  const displayMobile = () => {
    return (
      <HeaderMob />
    );
  }

  const displayDesktop = () => {
    return (
      <HeaderDesk />
    );
  }

  useEffect(() => {
    const setResponsiveness = (e) => {
        window.innerWidth < 900 ?
          setMobileView(true) : 
          setMobileView(false)
        }
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());

        return () => {
          window.removeEventListener("resize", () => setResponsiveness());
    }
    }, []);

  return (
    <div className="App">
      <header>
        {mobileView ? displayMobile() : displayDesktop()}
      </header>

      <main>
        <Start />
        <Zeiten />
        <ScrollButton />
        <Tattoo />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
export default App;