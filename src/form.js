import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { handleSubmit } from 'react';


export default function Form() {
    const data = {name:"", email:"", password:""};
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(() =>{
        console.log("Registered")
    }, [flag])
    function handleData(e){
        setInputData({...inputData, [e.target.name]: 
            e.target.value})
            console.log(inputData)
            
    }

    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All Input Fields are Mandatory")
        }
        else{
            setFlag(true)
        }
    }
   
return (
    <form class="container"><div class="header"><h1>Registration Form</h1></div>
     <div>
            <input type="text" placeholder='Enter Your Name' name='name' value={inputData.name} onChange=
             {handleData} ></input>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Email' name='email' value={inputData.email} onChange=
             {handleData} ></input>
        </div>
        <div>
            <input type="text" placeholder='Enter Your Password' name='password' value={inputData.password} onChange=
             {handleData} ></input>
        </div>
        <div><button type='button' onClick={handleSubmit} >Submit</button></div>
        <>
        <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name}, You've Registered Successfully</h2>:""}</pre>
    </>
    </form>
    
)
}
// -----