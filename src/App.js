import "./App.scss";
import HeaderDesk from "./components/header/headerDesk";
import HeaderMob from "./components/header/headerMob";
import Start from "./components/start/start";
import Opening from "./components/opening/opening";
import Footer from "./components/footer/footer";
import ScrollButton from "./components/scrollButton/scrollButton";
import About from "./components/about/about";
import Gallery from "./components/gallery/gallery";
import Service from "./components/service/service";
import Appointment from "./components/appointment/appointment";
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
        window.innerWidth < 992 ?
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
        <ScrollButton />
        <About />
        <Gallery />
        <Service mobileView={mobileView} />
        <Appointment />
        <Opening />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;