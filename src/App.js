import "./app.css"
import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import About from "./components/about/about"
import Contact from "./components/contact/contact";
import Skills from './components/skills/skills'
import Project from "./components/projects/project";
import Socialmedia from "./components/socialmedia/socialmedia";
import Services from "./components/services/services";
import Footer from"./components/footer/footer"

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Navbar />
      <Landing />
      <About />
      <Project />
      <Services/>
      <Skills />
      <Contact />
      <Socialmedia />
      <Footer />
    </div>
  );
}

export default App;
