import React, { createContext, useState, useContext, ReactNode } from 'react';


const modeContext = createContext(undefined);

export const useMode= () => {
  
  const context = useContext(modeContext);

  if (!context) {
    throw new Error('useNotification must be used within a modeProvider');
  }

  return context;
};

export const modeProvider= ({ children }) => {

  const [currentMode, setCurrentMode] = useState('dark');

  useEffect(() => {
   
    let elem = document.body;

    // Remove existing theme classes
    elem.classList.remove("dark", "light");

    // Add the current theme class
    elem.classList.add(currentMode);
  }, [currentMode]); 

  const toggleMode = () => {
    setCurrentMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <modeContext.Provider value={{ currentMode, toggleMode }}>
      {children}
    </modeContext.Provider>
  );
};
