import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './component/About/About';
import App from './App';
import { Header } from './component/Header/Header';
import { MyProjects } from './component/MyProjects/MyProjects';
import { Skills } from './component/Skills/Skills';
import { Contact } from './component/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<App/>} exact={true} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<MyProjects/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
