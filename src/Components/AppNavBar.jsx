import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import logo from '../assets/img/logo.svg'
import {Button, Form} from "react-bootstrap";
import {useEffect, useState} from "react";
import {GetToken, RemoveToken} from "../Utility/TokenHelper.js";


const AppNavBar = () => {
     const [token, setToken] = useState();
     const [Change, setChange] = useState(0)

     useEffect(()=>{
          if(GetToken()){
              setToken(true)
          }else{
              setToken(false)
          }
     },[Change])

    const Remove = ()=>{
        RemoveToken()
        setChange(Change+1)
    }


    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>
                    <img className='nav-logo' src={logo} alt='img'/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Link className='nav-link' to='/' >Product </Link>
                    {token?(<Link className='nav-link' to='/card' >Card</Link>):(<></>)}

                </Nav>

                <Form className="d-flex">
                    {token?(<Button onClick={Remove} className='btn btn-success mb-0'>Logout</Button>):(<Link to='/login' className='btn btn-danger mb-0'>Login</Link>)}
                </Form>
            </Container>
        </Navbar>
    );
};

export default AppNavBar;