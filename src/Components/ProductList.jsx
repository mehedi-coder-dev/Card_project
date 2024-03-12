import React, {useEffect, useState} from 'react';
import {CreateCardRequest, ProductListRequest} from "../Services/apiRequest.js";
import {toast, Toaster} from "react-hot-toast";
import FullScreenLoader from "./FullScreenLoader.jsx";
import {GetToken} from "../Utility/TokenHelper.js";

const ProductList = () => {
   const [data, setData] = useState([]);
   const [loader, setLoader] = useState('d-none')

   useEffect(()=>{
       (async ()=>{
           const res = await ProductListRequest()
          setData(res)
       })()
   },[])

    const addCard  = async (id)=>{
          GetToken()?setLoader(''):''

          const res = await CreateCardRequest(id);
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
                                 <img className='card-img' src={item.image} alt=''/>
                                 <div className='card-body'>
                                     <h5>{item.title}</h5>
                                     <button onClick={()=>addCard(item['id'])} className='btn btn-success'>Add to card</button>
                                 </div>
                             </div>
                         </div>
                     ))}
                 </div>
                 <Toaster position='bottom-center'/>
             </div>

             <FullScreenLoader visibility={loader}/>
         </>
    );
};

export default ProductList;