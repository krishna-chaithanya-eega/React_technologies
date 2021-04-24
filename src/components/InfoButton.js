import React from 'react';
import './InfoButton.css'

const InfoButton=(props)=>{
    return(
      
        <button className="button" style={{verticalAlign:"middle"}}><span><a href={props.value} className="anchor">Get info</a></span></button>
        
    );


}


export default InfoButton