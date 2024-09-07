import React from 'react'
import { useState } from 'react'
import '../style.css'

function PromptBar() {
    const [promt,setPromt] = useState('');
  const handle=(event)=>{
      event.preventDefault();
           console.log(promt);

  }
  return (
    
        <form className='promt_form'>
        <input 
        type='text' 
         value={promt}
         onChange={(e)=>setPromt(e.target.value)}
         className='promt_text cont2'
         
        />
        <input type='submit' 
        className='promt_btn cont'
        value="Ask"
        onClick={handle} />

        </form>
   
  )
}

export default PromptBar