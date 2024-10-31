// quote.js returns a randomly generated spell from the HP API 
// app.js is going to import from quote.js 

import React, { useState, useEffect } from 'react';

// Credit to AI 
const Quote = () => {
  const [spells, setSpells] = useState([]); // Array to store all spells
  const [randomSpell, setRandomSpell] = useState(''); // Selected spell
  const [loading, setLoading] = useState(true); // Loading state
  // fetch data from the HP API 
  useEffect(() => {
    const fetchSpells = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/spells');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSpells(data);
        generateRandomSpell(data); // Generate a random spell when data is fetched
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error('Error fetching spells:', error);
        setLoading(false); // Ensure loading is set to false even on error
      }
    };

    fetchSpells();
  }, []);
  // because the output returns all spells, we need to randomly pick a spell using the Math.random()
  const generateRandomSpell = (spellsArray) => {
    if (spellsArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * spellsArray.length);
      const spell = spellsArray[randomIndex]; // Get a random spell
      setRandomSpell(`${spell.name}: ${spell.description}`); // Format spell name and description
    }
  };
  
  // this is where the final output is rendered, which is in JSX. 
  return (
    <div className="quote">
      <h2>Here is a spell for your Entertainment!</h2>
      <p className="quote-text">{loading ? 'Loading...' : randomSpell || 'No spells available.'}</p>
    </div>
  );
};

export default Quote;


