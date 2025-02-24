import { useState, useEffect } from 'react';
import './App.css';
import Window from './components/Window';


function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <>
<div className="dashboard">
  <div className="date-time">
          <time className='date' dateTime={currentTime.toLocaleDateString()}>
            {formattedDate}
          </time>
          <time className='time' dateTime={currentTime.toLocaleTimeString()}>
            {formattedTime}
          </time>
  </div>
  <div className="dock"> 
  <button>GAMES</button>
        <button>CHAT</button>
        <button>AI</button></div>
  <div className="title">
    <h2 className='header'>cyλn.os</h2>
    <h2 className='version'>v2.01</h2>
  </div>
  <div className='desktop'>
</div>
</div>

     
    
      {/* <Window title="My Window">
        <p>
          this is some content
        </p>
      </Window> */}




    </>
  );
}

export default App;
