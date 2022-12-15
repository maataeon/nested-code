import Logo from './assets/NestedCode.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p className="App-title">
          Business Application Development
        </p>
        <a
          className="App-link"
          href="https://wa.me/54113515313513153153153?text=I%27m%20interested%20in%   q"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
