import './App.css'
import { Intro } from './component/Intro/Intro';
import { About } from './component/About/About';
import { MyProjects } from './component/MyProjects/MyProjects';
import { Footer } from './component/Footer/Footer';

function App() {
  return (
    <>
      <Intro/>
      <About/>
      <MyProjects/>
      <Footer/>
    </>
  );
}

export default App;