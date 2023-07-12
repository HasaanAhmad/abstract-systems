import AboutSection from "./components/AboutSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ServiceLayout from "./components/ServiceLayout"

export default function App() {
  return (
    <div className="bg-primary">
      <Navbar />
      <HeroSection />
      <ServiceLayout />
      <AboutSection />

    </div>
  )
}