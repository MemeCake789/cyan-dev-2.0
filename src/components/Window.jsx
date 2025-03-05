import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Window.css';

function Window({ children, title }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ w: 600, h: 400 });

  
  const [isDragging, setIsDragging] = useState(false);
  const [maximize, setMaximize] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [close, setClose] = useState(false);

  const windowRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (isDragging) {
        setPosition((prevPosition) => ({
          x: prevPosition.x + event.movementX,
          y: prevPosition.y + event.movementY,
        }));
      }
    };



    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleResize = useCallback(() => {
    if (maximize) {
      // Restore to default size and position
      setPosition({ x: 0, y: 0 });
      setSize({ w: 600, h: 400 });
      setMaximize(false);
      windowRef.current.classList.remove('maximized');
    } else {
      // Maximize the window
      setPosition({ x: 0, y: 0 });
      setSize({ w: window.innerWidth -10, h: window.innerHeight -10});
      setMaximize(true);
      windowRef.current.classList.add('maximized');
    }
  }, [maximize]);

  

  return (
    <div
    
      ref={windowRef}
      className='window'
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,

        borderTopLeftRadius: '10px',

        borderTopRightRadius: maximize ? '0px' : '10px',
        borderBottomLeftRadius: maximize ? '0px' : '10px',
        borderBottomRightRadius: maximize ? '0px' : '10px',


        width: size.w +5 ,
        height: size.h,
 


      }}
    >
       


      <div
        ref={headerRef}
        onMouseDown={handleMouseDown}
        className='titleBar'
        style={{
          width: size.w ,
        }}
      >
        {title}
        <div className='navigation'>        
          <button className='close'>x</button>
          <button className='maximize' onClick={handleResize}>□</button>
          <button className='minimize'>‒</button>
        </div>

      </div>
      <div className="container" style={{
        width: '100%', 
        height: '100%',
        overflow: 'hidden',
       }}
       >{children}</div>

    </div>
  );
}

export default Window;