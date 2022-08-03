import {Header} from './Header/Header'
import './App.css'
import { Intro } from './Intro/Intro';
import { About } from './About/About';
import { MyProjects } from './MyProjects/MyProjects';
import { Footer } from './Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <MyProjects/>
      <Footer/>
    </>
  );
}

export default App;