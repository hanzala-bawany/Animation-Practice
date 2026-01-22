import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Home2 from './pages/Home2'

function App() {
 

  return (
    <>
    <Routes>

      <Route path="/firstDay" element={<Home />} />
      <Route path="/secondDay" element={<Home2 />} />

    </Routes>
    </>
  )
}

export default App
