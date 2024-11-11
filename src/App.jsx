import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Domain from './components/Domain/Domain'
import KeynoteSpeakers from './components/KeynoteSpeakers/KeynoteSpeakers'
import ImportantDates from './components/ImportantDates/ImportantDates'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Main />
      <Domain />
      <KeynoteSpeakers />
      <ImportantDates />
      <Footer />
    </div>
  )
}

export default App
