import React, { useState, useEffect, useRef } from 'react';
import { BOOT_MESSAGES } from '../data/bootMessages';
import './boot.css';

// --- Configuration ---

// Min/Max delay between lines in milliseconds (user adjusted)
const MIN_DELAY = 1;
const MAX_DELAY = 1;

// Delay after the last message before hiding the screen (in milliseconds)
const HIDE_DELAY = 1000; // 1 second

// Maximum number of lines to display at any given time
const MAX_DISPLAYED_LINES = 50;

/**
 * Simulates a boot sequence screen.
 * Displays messages one by one at random intervals and then hides.
 *
 * @param {object} props - Component props.
 * @param {function} props.onBootComplete - Callback function executed when the boot sequence finishes.
 */
function BootScreen({ onBootComplete }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const currentLineIndex = useRef(0);
  const timeoutRef = useRef(null); // To store the timeout ID for cleanup
  const containerRef = useRef(null); // Ref for the scrollable container

  // Function to add the next line
  const addNextLine = () => {
    if (currentLineIndex.current < BOOT_MESSAGES.length) {
      // Add the next message from the list

      setDisplayedLines(prevLines => {
          const newLines = [...prevLines, BOOT_MESSAGES[currentLineIndex.current]];
          if (newLines.length > MAX_DISPLAYED_LINES) {
            return newLines.slice(1);
          }
        return newLines;
      });
      currentLineIndex.current += 1;




      // Schedule the next line addition with a random delay
      const randomDelay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;
      timeoutRef.current = setTimeout(addNextLine, randomDelay);

    } else {
      // All lines displayed, wait a bit then hide and notify parent
      // This timeout is now correctly placed to only run after all messages are shown.
      timeoutRef.current = setTimeout(() => {
        setIsVisible(false);
        if (onBootComplete) {
          onBootComplete(); // Call the callback function
        }
      }, HIDE_DELAY);
    }
  };

  // Effect to start the boot sequence on mount
  useEffect(() => {
    // Start adding lines
    addNextLine();

    // Cleanup function to clear timeout if the component unmounts early
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount.

  // Effect to scroll to the bottom as new lines are added
  // This useEffect will run after each time `displayedLines` is updated.
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
          behavior: 'auto'
      });
    }
  }, [displayedLines]); // Run whenever displayedLines changes

  // If not visible, render nothing
  if (!isVisible) {
    return null;
  }

  // Render the boot screen
  return (
    <div
      ref={containerRef} // Assign ref to the scrollable div
      id="boot-screen-container"
      className="bootLine" // Full screen, black background, green mono text
      style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }} // Ensure lines wrap correctly
    >
      {/* Using a nested div for text content is fine, or map directly */}
      {/* The map approach for rendering lines is kept as per your last version */}
      {displayedLines.map((line, index) => (
        <div key={index}>{line}</div>
      ))}
      {/* Blinking cursor simulation */}
      {currentLineIndex.current < BOOT_MESSAGES.length && (
         <span className="animate-pulse">_</span>
      )}
    </div>
  );
}

// --- How to use it in your App.jsx ---
/*
import React, { useState } from 'react';
import BootScreen from './BootScreen'; // Assuming you save the component as BootScreen.jsx

function App() {
  const [booting, setBooting] = useState(true);

  const handleBootComplete = () => {
    console.log("Boot sequence finished!");
    setBooting(false); // Update state to hide boot screen / show main app
  };

  return (
    <div className="App">
      {booting ? (
        <BootScreen onBootComplete={handleBootComplete} />
      ) : (
        // --- Your main application content goes here ---
        <main className="p-8">
          <h1 className="text-2xl font-bold">Application Loaded!</h1>
          <p>Welcome to the main application.</p>
        </main>
        // --- End of your main application content ---
      )}
    </div>
  );
}

export default App;
*/

// Export the component for use in other files
export default BootScreen;
