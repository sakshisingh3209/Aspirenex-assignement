
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";

import {About} from './components/about/About'
import { Contact } from "./components/contact/Contact";
import { Hero } from "./components/hero/Hero";
import {Project} from "./components/Projects/Project"
import Skills from "./components/skills/Skills"
function App(){
return (<div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
   <Skills/>
    <Project/>
    
    <Contact/>
</div>
);
}
export default App;