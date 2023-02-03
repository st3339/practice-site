import logo from './logo.svg';
import './App.css';
import Carousel from './Carousel';
import Wave from 'react-wavify';

// Site for carousel https://reactjsexample.com/react-snap-carousel-dom-first-responsive-carousel-for-react/
// Check out: https://beta.reactjs.org/learn

function App() {
  
  return (
    
    <div className="App" >
      <header className="App-header">
      <div class="btn-group">
        <button class="button">Home</button>
        <div class="content1">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>  
        </div>
        <button class="button">About me</button>
        <button class="button">My Experience</button>
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
        <div className='CarTag' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh',  position: 'relative'}}>
            
            <Carousel className="Carousel-Tag" style={{ margin: 'center'}}/>
            
            <Wave fill= 'yellow-red'
                  style={{
                    position: 'absolute',
                    top: 300,
                    left: 0,
                    right: 0,
                    bottom: 0
                    
                  }}
                  paused={false}
                  options={{
                    height: 10,
                    amplitude: 50,
                    speed: 0.2,
                    points: 3
                  }}
            />
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
