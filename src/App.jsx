import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'
import Home4 from './pages/Home4'

function App() {
 

  return (
    <>
    <Routes>

      <Route path="/firstDay" element={<Home />} />
      <Route path="/secondDay" element={<Home2 />} />
      <Route path="/thirdDay" element={<Home3 />} />
      <Route path="/fourthDay" element={<Home4 />} />

    </Routes>
    </>
  )
}

export default App
