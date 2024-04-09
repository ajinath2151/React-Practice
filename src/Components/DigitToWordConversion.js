import React, { useState } from 'react';

const DigitToWordConversion = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [convertedWord, setConvertedWord] = useState('');

  const convertDigitToWord = () => {
    const number = parseInt(inputNumber);
    const words = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
    const tensWords = [
      '', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    const teensWords = [
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    if (number === 0) {
      setConvertedWord('zero');
    } else if (number < 10) {
      setConvertedWord(words[number]);
    } else if (number < 20) {
      setConvertedWord(teensWords[number - 10]);
    } else {
      const digit1 = number % 10;
      const digit10 = Math.floor(number / 10);

      setConvertedWord(`${tensWords[digit10]} ${words[digit1]}`);
    }
  };

  return (
    <div>
      <h1>Digit to Word Converter</h1>
      <input 
        type="number" 
        value={inputNumber} 
        onChange={(e) => setInputNumber(e.target.value)} 
        placeholder="Enter a number" 
      />
      <button onClick={convertDigitToWord}>Convert</button>
      <p>{convertedWord}</p>
    </div>
  );
};

export default DigitToWordConversion;
