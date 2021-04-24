import React from 'react';
import './Card.css'; 
import InfoButton from './InfoButton';

const Card = (props) => {

    return (
        <>
            <div className="card">
                <img src={props.imgsrc} alt="Avatar" style={{width:"100%"}} />
                <div className="container">
                    <h3><b>{props.title}</b></h3>
                    
                    <InfoButton value={props.info}/>
                </div>

            </div>


        </>
    );
}

export default Card;