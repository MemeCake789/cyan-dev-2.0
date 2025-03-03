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
    <button>AI</button>
  </div>

  <div className="title">
    <h2 className='header'>cyλn.os</h2>
    <h2 className='version'>v2.01</h2>
  </div>

  <div className='desktop'>
    <div className='stats'>
      <p className='data'>
LINK : http://cyan-ide.vercel.app     <br></br>
HOST : http://localhost:3000    <br></br>
PORT : 3000    <br></br>
    <br></br>
PROXY STATUS ... OK    <br></br>
  ├ SERVICE : UV    <br></br>
  └ BROWSER : GOOGLE    <br></br>
    <br></br>
GAMES STATUS ... OK    <br></br>
  ├ ROOT : https://github.com/Cyanide-App/cyan-assets    <br></br>
  ├ AMOUNT : 125    <br></br>
  ├ JSON :  {"{"} ... {"}"}   <br></br>
  └    <br></br>

      </p>
    </div>
  </div>

</div>

     
    

      <Window title="My Window">
<iframe src="https://inter-dev.vercel.app/gm" title="browser" width="500px" height="400px" />

      </Window>




    </>
  );
}

export default App;
