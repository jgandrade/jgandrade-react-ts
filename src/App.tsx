import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
