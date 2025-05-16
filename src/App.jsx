
import './App.css'
import Header from './components/layouts/Header';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import { motion } from "motion/react"
import Slice from './components/Slice/Slice';
import { Navigate } from 'react-router-dom';
function App() {

  return (
    <>
    
    <BrowserRouter>
  <Header />
  <div className="content-wrapper"> {/* Added a class for better styling */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" replace />} /> {/* Redirect /home to root */}
      <Route path="/education" element={<Education />} /> {/* Lowercase for consistency */}
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/slice" element={<Slice />} />
      <Route path="*" element={<Navigate to="/" replace />} /> {/* Fixed redirect to root */}
    </Routes>
  </div>
</BrowserRouter>
    </>
  )
}

export default App
