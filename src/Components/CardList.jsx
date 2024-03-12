import React, {useEffect, useState} from 'react';
import {CardListRequest, RemoveCardRequest} from "../Services/apiRequest.js";
import {GetToken} from "../Utility/TokenHelper.js";
import {toast, Toaster} from "react-hot-toast";
import FullScreenLoader from "./FullScreenLoader.jsx";

const CardList = () => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState('d-none')
    const [change, setChange]  = useState(0)

    useEffect(()=>{
        (async ()=>{
            const res = await CardListRequest()
            setData(res)
        })()
    },[change])

    const removeCard  = async (id)=>{
        GetToken()?setLoader(''):''
        const res = await RemoveCardRequest(id);
        setChange(change+1)
        setLoader('d-none')
        if(res=== 'success'){
            toast.success('success')
        }else{
            toast.error('fail')
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {data?.map((item,i)=>(
                        <div key={i.toString()} className='col-md-4 mb-4'>
                            <div className='card'>
                                <img className='card-img' src={item['product'].image} alt=''/>
                                <div className='card-body'>
                                    <h5>{ item['product'].title}</h5>
                                    <button onClick={()=>removeCard(item["product"]['id'])} className='btn btn-danger'>Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Toaster position='bottom-center'/>
            </div>

            <FullScreenLoader visibility={loader}/>
        </>)
}

export default CardList;