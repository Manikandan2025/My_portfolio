import React from 'react'
import NavBar from './components/NavBar'
import Me from './Me/Me'
import About from './About/About'
import Projects from './MyProjects/Projects'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'


const App = () => {
  return (
    <div>
      <NavBar/>
      <Me/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/> 
    </div>
  )
}
export default App
