import "./App.css";
import Feature from "./components/Feature/Feature";
import Heading from "./components/Header/Heading";
import Nav from "./components/Navigation/Nav";
import Job from "./components/Job/Job";
import Skills from "./components/Skills/Skills";
import { useContextPortfolio } from "./context/Context";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  const context = useContextPortfolio();
  return (
    <div
      className="App"
      id={context?.initialState?.switch ? "active" : undefined}
    >
      <Heading>
        <Nav />
      </Heading>
      <main>
        <Feature />
        <Skills />
        <Job />
        <Project />
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
