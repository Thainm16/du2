import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { Facilities } from "./components/Facilities";
import { NewsCarousel } from "./components/NewsCarousel";
import { Admissions } from "./components/Admissions";
import { Teachers } from "./components/Teachers";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Facilities />
        <NewsCarousel />
        <Admissions />
        <Teachers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
