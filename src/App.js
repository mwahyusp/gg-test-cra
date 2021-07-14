// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <h1>Mohammad Wahyu Sanusi Putra</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      <form>
        <input type="search" placeholder="Search ..."></input>
        <button id="search-button">Search</button>
      </form>
      <div>
        <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" className="img-gif" alt="img-gif" />
      </div>
    </div>
  );
}

export default App;
