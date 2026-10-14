import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Registry from './pages/Registry'
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App

