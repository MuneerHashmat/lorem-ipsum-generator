import { useState } from 'react'
import './App.css'
import paragraphs from "./data.json"

function App() {
  const [paraCount,setParaCount]=useState(0);
  const [paraArray,setParaArray]=useState([]);

  const generatePragraphs=()=>{
    if(paraCount<0 || paraCount>10){
      alert("🧐 paragraph count should be between 1 and 10 🧐");
      return;
    }

    let newArr=paragraphs.slice(0,paraCount);
    console.log(newArr);
    setParaArray(newArr);
  }
  return (
    <div className='w-9/12 mx-auto mt-7'>
       <div>
          <h1 className='font-bold text-2xl'>LOREM IPSUM GENERATOR</h1>
          <span className=' text-2xl'>Paragraphs: </span>
          <input type="number" value={paraCount} onChange={(e)=>setParaCount(e.target.value)} className='mt-8 w-16 p-1 rounded-md'/>
          <button onClick={generatePragraphs} className='px-3 py-2 ml-4 bg-blue-700 text-white font-bold rounded-md hover:scale-110 transition-all'>Generate</button>
       </div>


       <div className=' mt-10 w-7/12 text-md mx-auto'>
          {
            paraArray.map((paraItem)=>
                <div key={paraItem.sno} className=' my-6'>{paraItem.sno}) {paraItem.paragraph}</div>
            )
          }
       </div>
    </div>
  )
}

export default App
