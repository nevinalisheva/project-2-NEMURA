import "./App.css";
import React from "react";
import { Home } from "./pages/Home";
import MyFavourites  from "./pages/MyFavourites";
import { Top50 } from "./pages/Top50";
import { About } from "./pages/About";
import { Navbar } from "./Components/UI/navbar.jsx";
import Footer from "./Components/Footer";
// import ResultsShow from "./pages/results/CastGrid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CurrentPage from "./pages/CurrentPage";
import Schedule from "./pages/Schedule";
import PeoplePage from "./pages/PeoplePage";
// import { useParams } from "react-router-dom";
import { GlobalProvider } from "./Components/Context/GlobalState";
// import Recomendedshows from "./Components/ratingSection/Recomended";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-favourites" element={<MyFavourites />} />
          <Route path="/top-50" element={<Top50 />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/shows/:name/:id" element={<CurrentPage />} />
          <Route path="/people/:name/:id" element={<PeoplePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
