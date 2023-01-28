import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';

// Site for carousel https://reactjsexample.com/react-snap-carousel-dom-first-responsive-carousel-for-react/
// Check out: https://beta.reactjs.org/learn

function App() {
  
  return (
    <div className="App">
      <header className="App-header"></header>  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Snir <code>src/App.js</code> this and save to reload.
        </p>
        <Carousel/>

        
    </div>  
  );
}

export default App; 
