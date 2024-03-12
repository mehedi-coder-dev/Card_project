import axios from "axios";
import {GetToken, ManageExpireToken, SetEmail, SetToken} from "../Utility/TokenHelper.js";

const baseURL = 'https://cart-api.teamrabbil.com/api';

//user Login Request
export async function UserLoginRequest(postBody){
  try{
      const res = await axios.post(`${baseURL}/user-login`,postBody);
      SetEmail(postBody['UserEmail'])
      return res.data['msg']

  }catch (e){
     return false
  }
}
//user otp verify Request
export async function UserOTPVerifyRequest(postBody){
    try{
        const res = await axios.post(`${baseURL}/verify-login`,postBody);
        SetToken(res.data['data'])
        return res.data['msg']

    }catch (e){
        return false
    }
}
//Product List Request
export async function ProductListRequest(){
    try{
        const res = await axios.get(`${baseURL}/product-list`);
        return res.data['data']

    }catch (e){
        return false
    }
}

const config = {
    headers: {
        "token" : GetToken()
    }
}

//Create Card Request
export async function CreateCardRequest(id){
    try{
        const res = await axios.get(`${baseURL}/create-cart/${id}`,config);

        return res.data['msg']

    }catch (e){

        ManageExpireToken(e.response.status)
    }
}


//Remove Card Request
export async function RemoveCardRequest(id){
    try{
        const res = await axios.get(`${baseURL}/remove-cart/${id}`,config);
        return res.data['msg']

    }catch (e){
        ManageExpireToken(e.response.status)
    }
}

//Card List Request
export async function CardListRequest(){
    try{
        const res = await axios.get(`${baseURL}/cart-list`,config);
        return res.data['data']

    }catch (e){
        ManageExpireToken(e.response.status)
    }
}