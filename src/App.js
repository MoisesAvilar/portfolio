import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"

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
        <NavBar />
        <Arrow />
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  )
}

export default App
