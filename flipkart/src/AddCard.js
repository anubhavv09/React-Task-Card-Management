import React, { useContext, useState } from 'react'
import './Styles/Add.css'
import Card1 from './Card1';
import NoteContext from './context/NoteContext';

const AddCard = ({updateData}) => {
const a=useContext(NoteContext);
  

  return (
    <div>
    <div className='box-1'>
     <p className='text-3'onClick={a.appear} > &#43; ADD A NEW CARD</p> 
    </div>
     <div className='appear'>
       {a.show ?<Card1  onClose={a.appear}/>:null}
     </div>
    </div>
  )
}

export default AddCard