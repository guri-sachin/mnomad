import {Form,Button,Container} from 'react-bootstrap';
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";
import React, { useState,useEffect } from 'react';
import '../My/App.css';

  

function Admin(){

  const  [email, setEmail] =useState('');
  const  [password, setPassword] =useState('');
  const navigate = useNavigate();
  function handelDemo2(e)
  {
      setPassword(e.target.value);
      console.log(password);
  }
  function handelDemo3(e)
  {
      setEmail(e.target.value);
      console.log(email);
  }


async function Show1()
{
 
    const data2 ={"username":email,"password":password};
    
    const config = {
        method :'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
     },
        body: JSON.stringify(data2)
     }
  
const response = await fetch ('http://16.171.172.126:3306/loguser',config)

const data3 = await response.json();
console.log(data3)
if(data3 =="success"){
 
 sessionStorage.setItem("data", JSON.stringify(data3));
 sessionStorage.setItem("data1", JSON.stringify(data2.username));
 console.log(data3)
    navigate("/Copdash")
}else{
 console.log("not");
 Swal.fire({
   icon: 'warning',
   // title: 'Password Changed',
   text: "wrong email or password",
})
}

  
    }


return(
    <>
         <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
  <link href="css/ruang-admin.min.css" rel="stylesheet"></link>



<section className="vh-100" style={{ backgroundColor: "#b0d9af" }}>

  <div className="container py-5 h-100">
  
    {/* <img src={"images/final.png"} /> */}
  
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-6 col-lg-5">
        <img
          src="images/NOmad.png"
          alt="login form"
          className="img-fluid"
          style={{ borderRadius: "1rem 0 0 1rem", height: "400px", width: "100%" }}
        />
      </div>
      <div className="col-12 col-md-6 col-lg-7 d-flex align-items-center">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-4 p-lg-5 text-black">
            <form>
              <div className="d-flex align-items-center mb-3 pb-1"></div>

              <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>
                Sign into your account
              </h5>

              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form2Example17"
                  className="form-control form-control-lg"
                  onChange={handelDemo3}
                />
                <label className="form-label" htmlFor="form2Example17">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example27"
                  className="form-control form-control-lg"
                  onChange={handelDemo2}
                />
                <label className="form-label" htmlFor="form2Example27">
                  Password
                </label>
              </div>

              <div className="pt-1 mb-4">
                <button className="btn btn-success btn-lg btn-block" type="button" onClick={Show1}>
                  Login
                </button>
              </div>

              {/* <a className="small text-muted" href="#!">
                Forgot password?
              </a>
              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account? <a href="#!" style={{ color: "#393f81" }}>Register here</a>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
       
   );

}
export default Admin;