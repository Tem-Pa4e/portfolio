import './App.css';
import {Header} from "./component/header/Header";
import {Main} from "./component/main/Main";
import {Skills} from "./component/skills/Skills";
import {Footer} from "./component/footer/Footer";
import {ContactForm} from "./component/contactForm/ContactForm";
import {Projects} from "./projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills />
            <Projects />
            <ContactForm/>
            <Footer />
        </div>
    );
}

export default App;
