import React, { useContext, useEffect, useState } from 'react';
import './Styles/front.css';
import AddCard from './AddCard';
import NoteContext from './context/NoteContext';
import { MdDelete } from 'react-icons/md';




const FrontPage = () => {
  
  const storedData = JSON.parse(localStorage.getItem('carData'));


  const a=useContext(NoteContext);
 
    useEffect(()=>{
      console.log("see it",storedData)
    },[a.shop])
 



  return (
    <div>
      <div className='heading-1'>
        <h6 className='heading-2'>Manage Credit Cards</h6>
        <AddCard/>
      </div>

      <div>
        {storedData=== 0 ? (
          <p>No data available</p>
        ) : (
          <>
           {storedData.map((item, index) => (

            
              
              <div className='last-row'>
               <ul className='list-ul'>
                <li className='first-item'>{item.Future}</li>
                <li className='edit-button'onClick={()=>a.edit1(index)} style={{color:"silver",fontWeight:"280px"}}>Edit</li>
               <li className='delete-button'onClick={() => a.delete1(index)}><MdDelete  style={{fontSize:"20px",color:"silver"}}/></li>
               </ul>

               <div>

                <ul className='list-ul2'>
                  <li>Anubhav</li>
                  <li>{item.CardNo}</li>
                  <li>
                  </li>
                  <li></li>
                </ul>
               </div>

              </div>
              
            
           ))}
          
          </>
        )}
      </div>
    </div>
  );
};

export default FrontPage;
