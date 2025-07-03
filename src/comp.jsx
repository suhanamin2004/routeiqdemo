import React,{useState} from 'react';
function Color(){
    const[ color,setColor]=useState("#ffffff");
    
    return(
        <div>
            <h1>Color picker</h1>
            <p style={{backgroundColor:color}}>Selected Color is :{color}</p>
            <label>Select color:</label>
            <input type="color" value={color} onChange={(e)=>{setColor(e.target.value)}}/>
        </div>
    )
}
export default Color