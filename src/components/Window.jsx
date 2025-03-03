import React, { useState, useRef, useEffect } from 'react';
import './Window.css';

function Window({ children, title }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
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

  return (
    <div
      ref={windowRef}
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,

        borderTopLeftRadius: '10px',

        width: '500px',
        height: '400px',
 

      }}
    >
      <div
        ref={headerRef}
        onMouseDown={handleMouseDown}
        className='titleBar'
        style={{
          width: '504px',
        }}
      >
        {title}
      </div>
      <div style={{  }}>{children}</div>
    </div>
  );
}

export default Window;