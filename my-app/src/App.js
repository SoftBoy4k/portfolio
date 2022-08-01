import {Header} from './Header/Header'
import './App.css'
import { Intro } from './Intro/Intro';
import { About } from './About/About';
import { MyProjects } from './MyProjects/MyProjects';

function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <About/>
      <MyProjects/>
    </>
  );
}

export default App;