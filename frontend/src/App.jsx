import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'
import {Toaster, toast} from 'react-hot-toast'

function App() {
  return (
    <div className="min-h-screen bg-base-200">
      {/* <button onClick={() => toast.error("congrats!")} className="text-red-500 p-4 bg-pink-500 hover:bg-pink-600">Click Me</button> */}
      <button className="btn btn-primary" onClick={() => toast.success("congrats!")}>Click Me</button>
      <button className="btn btn-secondary">Click Me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />  
      </Routes>

    </div>
  )
}

export default App