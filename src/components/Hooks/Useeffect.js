import React ,{ useEffect, useState} from 'react'
import'./style.css'


const Useeffect = () => {
const[newdata, setNewdata]=useState(0)
useEffect(()=>{
document.title=`Chats (${newdata})`
})



  return (
    <>
    <div className="container-fluid d-flex flex-column h-100 justify-content-center align-items-center my-custom-margin">
      <div className="text-center wrapper">
        {newdata}
        
      </div>
    
      <div className="d-flex">
   
        <button className='glow-on-hover' onClick={() => setNewdata(newdata + 1)} >Increment</button>
      
      </div>
    </div>
  </>
  
  )
}

export default Useeffect