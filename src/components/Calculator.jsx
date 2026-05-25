import React, { useState } from 'react';

export default function Calculator() {
  const [display, setDisplay] = useState('');
  const [equation, setEquation] = useState('');

  // Handle number and operator inputs
  const handleInput = (value) => {
    // Prevent multiple consecutive operators
    if (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(display.slice(-1))) {
      return;
    }
    setDisplay((prev) => prev + value);
  };

  // Clear the display
  const clearDisplay = () => {
    setDisplay('');
  };

  // Calculate the result safely
  const calculateResult = () => {
    try {
      // Using Function evaluation here as a safe alternative to eval() for a basic math string
      if (!display) return;
      const result = new Function(`return ${display}`)();
      setDisplay(String(result));
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="flex justify-center items-center ">
      {/* Calculator Container with grayish background and green border */}
      <div className="w-80  p-6 rounded-2xl border-4 border-emerald-500 shadow-2xl">
        
        {/* Screen Display */}
        <div className="w-full h-16 bg-slate-900 text-emerald-400 font-mono text-right text-3xl px-4 flex items-center justify-end rounded-lg mb-6 overflow-hidden border border-slate-700">
          {display || '0'}
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Clear Button */}
          <button 
            onClick={clearDisplay}
            className="col-span-2 bg-rose-500/20 text-rose-400 border border-rose-500/30 hover:bg-rose-500 hover:text-white p-4 rounded-xl font-bold transition duration-200"
          >
            Clear
          </button>
          
          {/* Operators */}
          <button onClick={() => handleInput('/')} className="bg-slate-700 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 p-4 rounded-xl font-bold transition duration-200">/</button>
          <button onClick={() => handleInput('*')} className="bg-slate-700 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 p-4 rounded-xl font-bold transition duration-200">×</button>

          {/* Numbers 7, 8, 9 & Minus */}
          <button onClick={() => handleInput('7')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">7</button>
          <button onClick={() => handleInput('8')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">8</button>
          <button onClick={() => handleInput('9')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">9</button>
          <button onClick={() => handleInput('-')} className="bg-slate-700 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 p-4 rounded-xl font-bold transition duration-200">-</button>

          {/* Numbers 4, 5, 6 & Plus */}
          <button onClick={() => handleInput('4')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">4</button>
          <button onClick={() => handleInput('5')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">5</button>
          <button onClick={() => handleInput('6')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">6</button>
          <button onClick={() => handleInput('+')} className="bg-slate-700 text-emerald-400 hover:bg-emerald-500 hover:text-slate-900 p-4 rounded-xl font-bold transition duration-200">+</button>

          {/* Numbers 1, 2, 3 & Equals */}
          <button onClick={() => handleInput('1')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">1</button>
          <button onClick={() => handleInput('2')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">2</button>
          <button onClick={() => handleInput('3')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">3</button>
          
          {/* Equals Button spanning 2 rows vertically */}
          <button 
            onClick={calculateResult}
            className="row-span-2 bg-emerald-500 text-slate-900 hover:bg-emerald-400 p-4 rounded-xl font-extrabold text-xl flex items-center justify-center transition duration-200 shadow-md shadow-emerald-500/20"
          >
            =
          </button>

          {/* Zero and Decimal */}
          <button onClick={() => handleInput('0')} className="col-span-2 bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">0</button>
          <button onClick={() => handleInput('.')} className="bg-slate-700/50 text-slate-200 hover:bg-slate-600 p-4 rounded-xl font-semibold transition duration-200">.</button>
        </div>

      </div>
    </div>
  );
}