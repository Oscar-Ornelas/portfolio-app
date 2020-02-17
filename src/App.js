import React from 'react';
import './App.css';
import Header from './Header';
import Introduction from './Introduction';
import Reasons from './Reasons';
import Portfolio from './Portfolio';
import Skills from './SkillsContainer';
import Footer from './Footer';

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
