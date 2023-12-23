import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GAVIN JARIWALA</h1>
        <p>Seeking a co-op/internship position...</p>
        <div className="contact-info">
          <p>Phone: 902-329-9889 | Email: gavinjariwala97@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/gavinjariwala" target="_blank" rel="noopener noreferrer">gavinjariwala</a></p>
        </div>
      </header>

      <section className="About">
        {/* Add your About Me content here */}
      </section>

      <section className="Skills">
        {/* Add your Skills content here */}
      </section>

      <section className="Education">
        {/* Add your Education content here */}
      </section>

      <section className="Projects">
        {/* Add your Projects content here */}
      </section>

      <section className="Contact">
        {/* Add your Contact content here */}
      </section>

      <footer>
        {/* Add your footer content here */}
      </footer>
    </div>
  );
}

export default App;
