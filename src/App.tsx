import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { ShoppingCartProvider } from './context/ShoppingCartContext'

// =========== import components =============
import { Navbar } from './components'
// =========== import pages =============
import { About, Home, Store } from './pages'



function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      {/* ================== routes ================ */}
      <main className='main container mx-auto px-1 pt-3 bg-transparent'>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path='/' element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </ShoppingCartProvider>
  )
}

export default App
