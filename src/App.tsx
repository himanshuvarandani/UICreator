import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import AppProvider from "./context/AppContext"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
