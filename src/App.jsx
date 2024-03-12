import React from 'react';
import {GetToken} from "./Utility/TokenHelper.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CardListPage from "./Pages/CardListPage.jsx";
import ProductListPage from "./Pages/ProductListPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import OtpVerifyPage from "./Pages/OTPVerifyPage.jsx";

const App = () => {

    if(GetToken()){
        return (
            <BrowserRouter>
              <Routes>
                  <Route path='/' element={<ProductListPage/>}/>
                  <Route path='/card' element={<CardListPage/>}/>
              </Routes>
            </BrowserRouter>
        );
    }else{
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<ProductListPage/>}/>
                    <Route path='/login' element={<LoginPage/>}/>
                    <Route path='/otp' element={<OtpVerifyPage/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
};

export default App;