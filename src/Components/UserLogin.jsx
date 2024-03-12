import React, {useState} from 'react';
import FullScreenLoader from "./FullScreenLoader.jsx";
import {toast, Toaster} from "react-hot-toast";
import {UserLoginRequest} from "../Services/apiRequest.js";
import {useNavigate} from "react-router-dom";

const UserLogin = () => {
    const [inputChange, setInputChange] = useState({
        UserEmail:""
    })
    const [loader, setLoader] = useState('d-none')

    const navigate = useNavigate()

    const onInputChange = (key,value)=>{
       setInputChange(prev=>({
           ...prev,
           [key] :value
       }))
    }

    const submit = async ()=>{
       if(inputChange.UserEmail.length === 0){
           toast.error('Email Address is Required!')
       }else{
           setLoader('')
           const res  = await UserLoginRequest(inputChange)
           setLoader('d-none')
           if(res==='success'){
               toast.success('Your email address submitted')
              navigate('/otp')
           }
       }
    }

    return (
         <>
             <div className='container mt-5'>
                 <div className='row justify-content-center'>
                     <div className='col-md-5'>
                         <div className='card p-4'>
                             <h4 className=''>User Login</h4>
                             <input type='text' value={inputChange.UserEmail} onChange={(e)=> onInputChange("UserEmail",e.target.value)} className='form-control' placeholder='Enter your email'/>
                             <button onClick={submit} className='btn w-100 mt-3 btn-success'>Submit</button>
                         </div>
                     </div>
                 </div>
                 <Toaster position='bottom-center'/>
             </div>
             <FullScreenLoader visibility={loader}/>
         </>
    );
};

export default UserLogin;