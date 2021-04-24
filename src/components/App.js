
import Card from './Card';
import React from 'react';
import data from '../data';
import Header from './Header';

const App=()=>{
    return(
        <>
        
        <Header/>
       <Card imgsrc={data[0].path} title={data[0].Title} info={data[0].info}   />
       <Card imgsrc={data[1].path} title={data[1].Title} info={data[1].info}   />
       <Card imgsrc={data[2].path} title={data[2].Title} info={data[2].info}   />
       <Card imgsrc={data[3].path} title={data[3].Title} info={data[3].info}   />
       <Card imgsrc={data[4].path} title={data[4].Title} info={data[4].info}   />
       <Card imgsrc={data[5].path} title={data[5].Title} info={data[5].info}   />
       <Card imgsrc={data[6].path} title={data[6].Title} info={data[6].info}   />
       <Card imgsrc={data[7].path} title={data[7].Title} info={data[7].info}   />

       

       
      
        </>
    );

}

export default App;