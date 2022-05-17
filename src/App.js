import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Connect />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
