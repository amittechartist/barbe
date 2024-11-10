import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'
import { Toaster, toast } from 'react-hot-toast';
import Home from './view/Home';
import { app_url } from './view/Helpers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path={app_url} element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
