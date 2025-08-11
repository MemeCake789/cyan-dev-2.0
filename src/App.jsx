import React, { useState, useEffect } from 'react';
import './App.css'; 
import BootScreen from './components/BootScreen';


export default function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showBootScreen, setShowBootScreen] = useState(true);
 
  const handleBootComplete = () => {
    setShowBootScreen(false); 
    
  };
  // Update time every second
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); 

    return () => clearInterval(timerId);
  }, []);

  const formattedDate = currentTime.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <>
     {showBootScreen && <BootScreen onBootComplete={handleBootComplete} />}
     {!showBootScreen && (
       
       <div className="app-container">

         {/* Top Bar */}
         <div className="top-bar">
           {/* Left side: Red circle */}
           <div className="red-circle"></div>
           {/* Center: Date and Time */}
           <div className="date-time">
             {formattedDate} | {formattedTime}
           </div>
           {/* Right side: OS Name and Version */}
           <div className="os-info">
             cyan.os <span className="os-version">v2.01</span>
           </div>
         </div>

         {/* Area containing Background Image */}
         <div className="background-area">
           {/* Background Image Container */}
           <div
             className="background-image"

           >
             {/* Content inside the main area can go here */}
           </div>
         </div>

         {/* Bottom Black Area for Dock */}
         <div className="dock-area">
           {/* --- Dock Container --- */}
           <div className="dock-container">

             {/* Dock Tray */}
             <div className="dock-tray">
               {/* Tray element */}
             </div>

             {/* Icons Container */}
             <div className="icons-container">
               {/* Placeholder Icons */}
               {[...Array(4)].map((_, index) => (
                 <div
                   key={index}
                   className="dock-icon"
                   aria-label={`Dock icon ${index + 1}`} // Accessibility label
                 >
                   {/* Optional: Add icon content here later */}
                 </div>
               ))}
             </div>
           </div>
           {/* --- End Dock Container --- */}
         </div> {/* End Bottom Black Area */}
       </div>
     )}
    </>
  );
  }
