import React from 'react';
import './styles/App.css';
import Main from './components/Main'
import Footer from './components/Footer'




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
      <footer>
        <Footer />

      </footer>
    </div>
  );
}

export default App;
