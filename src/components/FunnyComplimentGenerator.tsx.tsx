import { useState } from "react";

interface Props{
  text: string[];
   
}
const FunnyComplimentGenerator = ({text}: Props) => {

  const [compliment,setcompliment] = useState(1);

  
function handleClickEvent () {
  
  const randomindex = Math.floor(Math.random() * text.length);
  setcompliment(randomindex);
}
  


  return (
    <div className="bg-blue-950 container mx-auto max-w-7xl py-20 px-16 my-2 rounded-lg">
      <div className="bg-slate-600 h-2 px-20 rounded-xl p-20">
        <p className="p-10 text-white">{text[1]}</p>
      </div>
      <button onClick={handleClickEvent} className=" my-10 rounded-xl bg-slate-400 py-2 px-4 text-white hover:bg-slate-500">{compliment}</button>    
      </div>
      
    
  )
}

export default FunnyComplimentGenerator;
