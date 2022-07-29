import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ExerciseDetail from "./pages/ExerciseDetail"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import "./App.css"

function App() {
  return (
    <div className="bg-gray-100 dark:bg-slate-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
