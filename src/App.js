import React from 'react';
import './App.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Reasons from './components/Reasons';
import Portfolio from './components/Portfolio';
import Skills from './components/SkillsContainer';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header/>
      <main>
        <Introduction/>
        <Portfolio/>
        <Skills/>
        <Reasons/>
      </main>
      <Footer/>
    </div>

  );
}

export default App;
