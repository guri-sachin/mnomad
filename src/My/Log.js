import {Form,Button,Container} from 'react-bootstrap';
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";
import React, { useState,useEffect } from 'react';
import './App.css';

  

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
  
const response = await fetch ('http://16.171.172.126:3306/userlog',config)

const data3 = await response.json();
console.log(data3)
if(data3 =="success"){
 
 sessionStorage.setItem("data", JSON.stringify(data3));

 console.log(data3)
    navigate("/Dasboard")
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

  <section class="vh-100" style={{backgroundColor: "#b0d9af"}}>

  <div class="container py-5 h-100">
    
    {/* <img src={"images/final.png"} ></img> */}
    
  
                     
    <div class="row d-flex justify-content-center align-items-center h-100">
    <img src="images/final.png"
                     alt="logo" style={{height:"200px",width:"500px"}} />
      <div class="col col-xl-10">
        <div class="card" style={{borderRadius:"1rem"}}>
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
              <img src="images/NOmad.png"
                alt="login form" class="img-fluid" style={{borderRadius:" 1rem 0 0 1rem",height:"400px"}} />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">
           
                <form>

                  <div class="d-flex align-items-center mb-3 pb-1">
                
                  </div> 

                  <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example17" class="form-control form-control-lg"  onChange={handelDemo3}/>
                    <label class="form-label" for="form2Example17">Email address</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example27" class="form-control form-control-lg" onChange={handelDemo2}/>
                    <label class="form-label" for="form2Example27">Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    
                    <button class="btn btn-success btn-lg btn-block" type="button"  onClick={Show1}>Login</button>
                  </div>
{/* 
                  <a class="small text-muted" href="#!">Forgot password?</a>
                  <p class="mb-5 pb-lg-2" style={{color: "#393f81"}}>Don't have an account? <a href="#!"
                      style={{color: "#393f81"}}>Register here</a></p> */}
              
                </form>

              </div>
            </div>
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