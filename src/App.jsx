import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Index } from "./pages/Index"
import { ShowAnality } from "./pages/ShowAnality"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/ShowAnality" element={<ShowAnality />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
