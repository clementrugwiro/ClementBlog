import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import About from "./components/about/about"
import Contact from "./components/contact/contact";
import Project from "./components/projects/project";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Project/>
      <Contact/>

    </div>
  );
}

export default App;
