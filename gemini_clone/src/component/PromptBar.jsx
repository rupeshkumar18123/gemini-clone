import React, { useState } from 'react';
import '../style.css';
import axios from 'axios';

function PromptBar({ setAnswer }) {
  const [promt, setPromt] = useState('');

  const handle = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://gemini-clone-1dl4.vercel.app/promt', {
        params: { userpromt: promt }
      });
      setAnswer(response.data.answer); // Pass answer to parent
    } catch (error) {
      console.error('Error fetching answer:', error);
      setAnswer("Error fetching answer.");
    }
  };

  return (
    <div>
      <form className='promt_form'>
        <input 
          type='text' 
          value={promt}
          onChange={(e) => setPromt(e.target.value)}
          className='promt_text cont2'
        />
        <input 
          type='submit' 
          className='promt_btn cont'
          value="Ask"
          onClick={handle} 
        />
      </form>
    </div>
  );
}

export default PromptBar;
