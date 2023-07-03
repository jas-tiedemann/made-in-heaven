import HeaderDesk from "./pages/header/headerDesk";
import HeaderMob from "./pages/header/headerMob";
import Start from "./pages/start/start";
import Opening from "./pages/opening/opening";
import ScrollButton from "./components/scrollButton/scrollButton";
import Footer from "./pages/footer/footer";
import About from "./pages/about/about";
import Team from "./pages/team/team";
import Gallery from "./pages/gallery/gallery";
import Service from "./pages/service/service";
import Appointment from "./pages/appointment/appointment";
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
        <About />
        <Team />
        <Gallery />
        <Service mobileView={mobileView} />
        <Appointment />
        <Opening />
        <ScrollButton />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;