import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';
import SimpleBar from 'simplebar-react';

// Site for carousel https://reactjsexample.com/react-snap-carousel-dom-first-responsive-carousel-for-react/
// Check out: https://beta.reactjs.org/learn

function App() {
  
  return (
    
    <div className="App" >
      <header className="App-header">
      <div class="btn-group">
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        <button class="button">Button</button>
        </div> 
      </header>  
        <div className='CarTag' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            
            <Carousel className="Carousel-Tag" style={{ margin: 'center' }}/>
          
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Snir <code>src/App.js</code> this and save to reload.
        </p>
          <div>
            <p>
              .
          
          
          
          
          
              .
            </p>
            <p>
              .
            </p>
            <p>.</p>
          </div>
        

    </div>  
  );
}

export default App; 
