import logo from 'assets/icons/logo.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="dt w-100 border-box pa3 ph5-ns bb">
          <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home">
            <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
          </a>
          <div className="dtc v-mid w-75 tr">
            <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="About">
              Services
            </a>
            <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">
              Blog
            </a>
            <a className="link dim dark-gray f6 f5-ns dib" href="#" title="Contact">
              Join Us
            </a>
          </div>
        </nav>
        <div className="flex flex-column items-center justify-center">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code>
            and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
