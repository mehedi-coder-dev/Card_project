import React, {useState} from 'react';
import {GetEmail} from "../Utility/TokenHelper.js";
import {toast, Toaster} from "react-hot-toast";
import {UserOTPVerifyRequest} from "../Services/apiRequest.js";
import FullScreenLoader from "./FullScreenLoader.jsx";

const OtpVerify = () => {
    const [inputChange, setInputChange] = useState({
        UserEmail:GetEmail(),
        OTP:''

    })
    const [loader, setLoader] = useState('d-none')


    const onInputChange = (key,value)=>{
        setInputChange(prev=>({
            ...prev,
            [key] :value
        }))
    }

    const submit = async ()=>{
        if(inputChange.OTP.length === 0){
            toast.error('OTP is Required!')
        }else{
            setLoader('')
            const res  = await UserOTPVerifyRequest(inputChange)
            setLoader('d-none')
            if(res==='success'){
                toast.success('OTP verification success')
                window.location.href= '/'
            }else{
                toast.error('invalid OTP')
            }
        }
    }

    return (
        <>
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-5'>
                        <div className='card p-4'>
                            <h4 className=''>OTP  verification</h4>
                            <input type='text' value={inputChange.OTP} onChange={(e)=> onInputChange("OTP",e.target.value)} className='form-control' placeholder='Enter your email'/>
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

export default OtpVerify;