
import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Analytics } from '@vercel/analytics/react';
import AOS from "aos"
import "aos/dist/aos.css"

import ReactGA from "react-ga4";
import RouteChangeTracker from "./components/utils/RouteChangeTracker";

// ID de Métrica
ReactGA.initialize("G-E6PT00EJBT");

import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import ProjectPage from "./components/pages/ProjectPage"

import Container from "./components/layouts/Container"
import NavBar from "./components/layouts/NavBar"
import Footer from "./components/layouts/Footer"
import Arrow from "./components/layouts/ScrollToTop"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    })
  }, [])

  return (
    <div className="App">
      <Router>
        <RouteChangeTracker />
        <NavBar />
        <Arrow />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/projetos" element={<ProjectPage />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
      <Analytics />
    </div>
  )
}

export default App
