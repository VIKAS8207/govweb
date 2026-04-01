import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './navbar'
import Footer from './footer'
import Hero from './Hero'
import { LatestUpdates } from './Hero'
import { QuickLinks } from './Hero'
import { AboutSection } from './Hero'
import { Carousel } from './Hero'
import { ProjectsAndSchemes } from './Hero'
import { DashboardStats } from './Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen flex flex-col">
      
      <Navbar />

      <main className="flex-grow pt-40 bg-gray-50">
        <div className="max-w-[1500px] mx-auto px-6">
          <LatestUpdates />
          <Hero />
          <QuickLinks />
          <AboutSection />
          <Carousel />
          <DashboardStats />
          <ProjectsAndSchemes />
          
        </div>
      </main>

      <Footer />
      
    </div>
    </>
  )
}

export default App
