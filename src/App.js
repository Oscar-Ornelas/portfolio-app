import React from 'react';
import './App.css';
<<<<<<< HEAD
import Header from './components/Header';
import Introduction from './components/Introduction';
import Reasons from './components/Reasons';
import Portfolio from './components/Portfolio';
import Skills from './components/SkillsContainer';
import Footer from './components/Footer';
=======
import Header from './Header';
import Introduction from './Introduction';
import Reasons from './Reasons';
import Portfolio from './Portfolio';
import Skills from './SkillsContainer';
import Footer from './Footer';
>>>>>>> 53cc8d767e50a213b6410276da7dd967345c934c

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
