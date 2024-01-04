import NoteContext from "./NoteContext";
import React, { useEffect, useState } from 'react'

const NoteState = (props) => {
    const[shop,setShop]=useState([]);
    const [Data, setData] = useState([]);
    const[show,setShow]=useState(false);

    const[formData,setFormData]=useState(null);
    const [editedObject, setEditedObject] = useState(null);
    const[edd,setEdd]=useState(false);

    const edd1=()=>{

        setEdd(!edd);

    }



    const enterData1=async(list)=>{
        const a=[...shop,list];
       localStorage.setItem('carData',JSON.stringify(a));
        setShop(a);
       
        console.log("See whats inside here",a);
    }

    const delete1=(index)=>{
     console.log(index);
      let a=[...shop];
      a.splice(index,1);
      localStorage.setItem('carData',JSON.stringify(a))
      setShop(a);
    }

    const edit1=(index)=>{
        console.log(index,"Index from localstorage")
        appear();
        console.log("See what does the edit values hold",shop[index]);
        const editedObject1=shop[index];
        setEditedObject(editedObject1);
        edd1();
        

      }

      const appear=()=>{
      
        console.log("Hey i have been clicked");
        setShow(!show);
    }


    useEffect(() => {
      const fetchData = async () => {
        const storedData = JSON.parse(localStorage.getItem('carData'));
  
        if (storedData) {
         
          setShop(storedData);
        }
      };
  
      fetchData();
    }, []); 

  


  return (
   <NoteContext.Provider  value={{enterData1,shop,setShop,Data,setData,delete1,edit1,appear,show,setShow,editedObject,setEditedObject,edd1,edd
   ,setEdd}} >
   {props.children}

   </NoteContext.Provider>
  )
};

export default NoteState;