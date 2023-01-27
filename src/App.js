import logo from './logo.svg';
import './App.css';
import { useSnapCarousel } from 'react-snap-carousel';

// Site for carousel https://reactjsexample.com/react-snap-carousel-dom-first-responsive-carousel-for-react/
// Check out: https://beta.reactjs.org/learn

function App() {
  const { scrollRef } = useSnapCarousel();
  return (
    <div className="App">
      <header className="App-header"></header>  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Snir <code>src/App.js</code> this and save to reload.
        </p>
        <ul
          ref={scrollRef}
          style={{    
            display: 'flex',
            overflow: 'auto',
            scrollSnapType: 'x mandatory'
          }}
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <li
              style={{
                backgroundColor: 'aqua',
                fontSize: '50px',
                width: '250px',
                height: '250px',
                flexShrink: 0,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              Item {i}
            </li>
          ))}
        </ul>

        
    </div>  
  );
}

export default App;
