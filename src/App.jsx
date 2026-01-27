import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Home2 from './pages/Home2'
import Home3 from './pages/Home3'

function App() {
 

  return (
    <>
    <Routes>

      <Route path="/firstDay" element={<Home />} />
      <Route path="/secondDay" element={<Home2 />} />
      <Route path="/thirdDay" element={<Home3 />} />

    </Routes>
    </>
  )
}

export default App
