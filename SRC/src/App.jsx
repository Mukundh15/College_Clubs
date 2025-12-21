import { useState } from 'react'
import SRC from "./SRC"
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SRC />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;