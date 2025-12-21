import { useState } from 'react'
import FIT from "./FIT"
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FIT />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
