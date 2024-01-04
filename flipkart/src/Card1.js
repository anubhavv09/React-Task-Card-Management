import React, { useContext, useEffect, useState } from 'react'
import './Styles/Card.css'
import NoteContext from './context/NoteContext';

const Card1 = ({onClose}) => {
    const[cardNo,setCardNo]=useState('');
    const[trial,setTrial]=useState('');
    const[cvv,setCVV]=useState('');
    const[future,setFuture]=useState('');

    const a = useContext(NoteContext);
   

    useEffect(()=>{
        if (a.editedObject) {
            setCardNo(a.editedObject.CardNo);
            setTrial(a.editedObject.Trial);
            setCVV(a.editedObject.CVV);
            setFuture(a.editedObject.Future);
          }
    },[a.editedObject])

    const data=(e)=>{
        e.preventDefault();

        const list={
            id:Math.random(),
            CardNo:cardNo,
            Trial:trial,
            CVV:cvv,
            Future:future
        }


        if (a.edd) {
            //finding the index in shop state where id=editedObjectId/
            const editedIndex = a.shop.findIndex((item) => item.id === a.editedObject.id);

            const updatedShop = [...a.shop];
            //setting it with the new values//
            updatedShop[editedIndex] = list;
            console.log("see here",updatedShop[editedIndex],"updatedShop",updatedShop);
        
            a.setShop(updatedShop);
            console.log("Value of shop after updation",a.shop)
            localStorage.setItem('carData',JSON.stringify(updatedShop));
            a.setEditedObject(null);
            a.edd1();
          } else {
            a.enterData1(list);
          }
        setCardNo("");
        setCVV("");
        setTrial("");
        setFuture("");
        a.appear();
       
        

    }
     
    const blank=()=>{
        setCardNo("");
        setCVV("");
        setTrial("");
        setFuture("");
    }

  return (
    <div>
        <form onSubmit={data}>
        <div className='card-main'>
        <div className='heading'>ADD A NEW CARD</div>
        <div className='row-1'>
         <input type="number" className='card-no'  placeholder='Enter card no' value={cardNo}   onChange={(e) => setCardNo(e.target.value)}></input>
        <input type='text' value={trial} onChange={(e)=>{setTrial(e.target.value)}}></input>
        </div>
        <div className='row-2'>
        <input type='text' className='cvv-1' placeholder='Enter CVV' value={cvv} onChange={(e)=>setCVV(e.target.value)} pattern='\d{3}'  maxLength="3" title="Please enter a three-digit number"></input>
        <input type='text' className='card-name' placeholder='Name this card for future use' value={future} onChange={(e)=>setFuture(e.target.value)}  pattern="[A-Za-z]+" title='Should consist Characters'></input>
        </div>

        <div className='row-3'>
        <button type='submit' className='btn-1'>SAVE THIS CARD</button>
        <button className='btn-2' onClick={blank}>CANCEL</button>
        </div>
 
      </div>   
        </form>
      
    </div>
  )
}

export default Card1