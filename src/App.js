import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import About from "./components/about/about"
import Contact from "./components/contact/contact";
import Project from "./components/projects/project";
import Socialmedia from "./components/socialmedia/socialmedia";
import Footer from"./components/footer/footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Project/>
      <Contact/>
      <Socialmedia/>
      <Footer/>

    </div>
  );
}

export default App;
