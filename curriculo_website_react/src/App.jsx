import Navbar from './components/Navbar'
import Home from './pages/home'
import SobreMim from './pages/SobreMim'
import Curriculum from './pages/Curriculum'
import {Route, Routes} from "react-router-dom"


function App() {
  
  return (
  <>
  <Navbar />    
    <div className="App">      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreMim" element={<SobreMim />} />
        <Route path="/Curriculum" element={<Curriculum />} />
      </Routes>

    </div>
  </>
  )
}

export default App