import {Form,Button,Container} from 'react-bootstrap';
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";
import React, { useState,useEffect } from 'react';
import './log.css';

  

function Admin(){
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [cname, setCname] = useState('');
    const [ctype, setCtype] = useState('');
    const [caddress, setCaddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [member, setMember] = useState('');
    const [govt, setGovt] = useState(''); 
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('0');
    const [image, setImage] = useState([])
  
  //   function Saveproduct(e) {
  //     var data = {"name":name,"cname":cname,"ctype":ctype,"caddress":caddress,"email":email,"status":status,"phone":phone,"member":member,"govt":govt,"password":password};
  //     console.log(data);
  //     sessionStorage.setItem("data1", JSON.stringify(data.email));
  //     axios.post("http://16.171.172.126:3306/addcorpratef",data).then(
  //         res=> console.log(res)
     
  //      )
  //      Swal.fire({
  //         icon: 'success',
  //         // title: 'Password Changed',
  //         text: "message sand ",
  //     })
  //     navigate('/Thank',{state:data})
  
  // };
  function Saveproduct(e) {

    const formData = new FormData();
    formData.append('name', name);
    formData.append('cname', cname);
    formData.append('status', status);
    formData.append('caddress', caddress);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('member', member);
    formData.append('ctype', ctype);
    formData.append('password', password);


    Array.from(image).forEach(item => {
        formData.append('filename', item)
        console.log(item)
    })


    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    console.log(email)
    sessionStorage.setItem("data1", JSON.stringify(email));

    axios.post("http://16.171.172.126:3306/copaddapilk", formData, config).then(
        res => console.log(res)

    )

    Swal.fire({
      icon: 'success',
      // title: 'Password Changed',
      text: "message sand ",
  })
  navigate('/Thank',{ state: email})

};
  
  
  function handelDemo2(e) {
    setName(e.target.value);
  
  }
  function handelDemo3(e) {
    setCname(e.target.value);
    console.log(e.target.value)
  
  }
  function handelDemo4(e) {
    setCtype(e.target.value);
  
  }
  function handelDemo5(e) {
      setCaddress(e.target.value);
  
  }
  function handelDemo6(e) {
    setEmail(e.target.value);
  
  }
  function handelDemo7(e) {
    setPhone(e.target.value);
  }
  
  
  function handelDemo8(e) {
    setMember(e.target.value);
  
  }
  function handelDemo9(e) {
      setGovt(e.target.value);
    
    }
    function handelDemo10(e) {
      setPassword(e.target.value);
    
    }


return(
    <>
         <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
  <link href="css/ruang-admin.min.css" rel="stylesheet"></link>

  <div>
      <div class="section-wrapper">
        <div class="guided-form-wrapper ">
          <div class="left-section content">
            
            {/* <div class="heading"><img src='../favicon.ico' style={{ height: "40px", width: "40px" }}></img></div> */}
            <div class="title center-content">Corporate, partner & Hire Right</div>
            <div class="center-content brand">
              <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/content_creator_xeju.svg" width="250px" />
            </div>
          </div>
          <div class="right-section content">
            <div id='sg1'>
            <h2>Create A Account</h2>
            {/* <button class="loginBtn loginBtn--facebook">
              Login with Facebook
            </button> */}
            <br/>
            <button class="loginBtn loginBtn--google">
              Login with Google
            </button>
           <br></br>
           <br></br>
            <div class="form">
            <form onSubmit={(event) => event.preventDefault()}>
               
               <div class="form-group">
               {/* <label for="exampleInputPlan">Fullname</label> */}
               <input type="plan" class="form-control" id="exampleInputPlan" aria-describedby="planlHelp" placeholder="Enter Name" onChange={handelDemo2}/>
               
             </div>
             <div class="form-group">
               {/* <label for="exampleInputPlan">Corporate Name</label> */}
               <input type="plan" class="form-control" id="exampleInputPlan" aria-describedby="planlHelp" placeholder="Corporate Name" onChange={handelDemo3}/>
               
             </div>
           <div class="form-group">
               {/* <label for="exampleInputUsers">Corporate Type</label> */}
              <select class="form-control mb-3" onChange={handelDemo4}>
             <option>Room1</option>
              <option>Room2</option>
               <option>Room3</option>
               <option>Live Sessions</option>
               <option>Corporate</option>
           </select>
             </div>
          
           
             <div class="form-group">
               {/* <label for="exampleInputEmail1">Company Address</label> */}
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Company Address" onChange={handelDemo5}/>
               
             </div>
             <div class="form-group">
               {/* <label for="exampleInputEmail1">Email Address</label> */}
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Email Address" onChange={handelDemo6}/>
               
             </div>
             <div class="form-group">
               {/* <label for="exampleInputEmail1">Phone Number</label> */}
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Phone Number" onChange={handelDemo7}/>
               
             </div>
             <div class="form-group">
               {/* <label for="exampleInputEmail1">Members required</label> */}
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Members required" onChange={handelDemo8}/>
               
             </div>
             <div class="form-group">
                  {/* <label for="exampleInputUser">File Upload</label> */}
                      <div class="custom-file">
                        <input type="file" class="" id="customFile"  name="filename" placeholder="enter product price" accept="image/*" multiple onChange={(e) => { setImage(e.target.files) }} />
                        <label class="custom-file-label" for="customFile" >Government Registration ID</label>
                      </div>
                    </div>
             {/* <div class="form-group">
              
               <label for="exampleInputEmail1">Government Registration ID</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Government Registration ID" onChange={handelDemo9}/>
               
             </div> */}
             <div class="form-group">
               {/* <label for="exampleInputEmail1">Password</label> */}
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Password" onChange={handelDemo10}/>
               
             </div>
      
      
             
          
             
             
           
             
             
             
             <button type="submit" class="btn " style={{backgroundColor:"#b0d8da"}} onClick={Saveproduct}>Submit</button>
             <p>Already have account <a href='Clog'>Login</a></p>
           </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
{/* <div class="container-fluid">
    <div class="row no-gutter">
  
        <div class="col-md-6 d-none d-md-flex bg-image"></div>


       
        <div class="col-md-6 bg-light ghg">
            <div class="login d-flex align-items-center py-5">

                <div class="container ">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 mx-auto">
                        <p class="text-muted mb-4">Sign up with google</p>
                            <form onSubmit={(event) => event.preventDefault()}>
               
               <div class="form-group">
               <label for="exampleInputPlan">Fullname</label>
               <input type="plan" class="form-control" id="exampleInputPlan" aria-describedby="planlHelp" placeholder="Enter Name" onChange={handelDemo2}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputPlan">Corporate Name</label>
               <input type="plan" class="form-control" id="exampleInputPlan" aria-describedby="planlHelp" placeholder="Corporate Name" onChange={handelDemo3}/>
               
             </div>
           <div class="form-group">
               <label for="exampleInputUsers">Corporate Type</label>
              <select class="form-control mb-3" onChange={handelDemo4}>
             <option>Room1</option>
              <option>Room2</option>
               <option>Room3</option>
               <option>Live Sessions</option>
               <option>Corporate</option>
           </select>
             </div>
          
           
             <div class="form-group">
               <label for="exampleInputEmail1">Company Address</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Company Address" onChange={handelDemo5}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Email Address</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Email Address" onChange={handelDemo6}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Phone Number</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Phone Number" onChange={handelDemo7}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Members required</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Members required" onChange={handelDemo8}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Government Registration ID</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Government Registration ID" onChange={handelDemo9}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Password</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Password" onChange={handelDemo10}/>
               
             </div>
      
      
             
          
             
             
           
             
             
             
             <button type="submit" class="btn btn-primary" onClick={Saveproduct}>Submit</button>
           </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div> */}

  {/* <div class="container-fluid">
      <div class="row no-gutter">
        <div class="col-md-6 d-none d-md-flex bg-image">
          <div className="overlay-image">
            <img
              src="images/image2.png"
              alt="overlay"
              className="img-fluid"
            />
          </div>
        </div>
        <div class="col-md-6 bg-light">
          <p class="text-muted mb-4">Sign up with google</p>
                            <form onSubmit={(event) => event.preventDefault()}>
               
               <div class="form-group">
               <label for="exampleInputPlan">Fullname</label>
               <input type="plan" class="form-control" id="exampleInputPlan" aria-describedby="planlHelp" placeholder="Enter Name" onChange={handelDemo2}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputPlan">Corporate Name</label>
               <input type="plan" class="form-control" id="exampleInputPlan" aria-describedby="planlHelp" placeholder="Corporate Name" onChange={handelDemo3}/>
               
             </div>
           <div class="form-group">
               <label for="exampleInputUsers">Corporate Type</label>
              <select class="form-control mb-3" onChange={handelDemo4}>
             <option>Room1</option>
              <option>Room2</option>
               <option>Room3</option>
               <option>Live Sessions</option>
               <option>Corporate</option>
           </select>
             </div>
          
           
             <div class="form-group">
               <label for="exampleInputEmail1">Company Address</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Company Address" onChange={handelDemo5}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Email Address</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Email Address" onChange={handelDemo6}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Phone Number</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Phone Number" onChange={handelDemo7}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Members required</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Members required" onChange={handelDemo8}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Government Registration ID</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Government Registration ID" onChange={handelDemo9}/>
               
             </div>
             <div class="form-group">
               <label for="exampleInputEmail1">Password</label>
               <input type="" class="form-control" id="exampleInputPrice" aria-describedby="pricelHelp" placeholder="Password" onChange={handelDemo10}/>
               
             </div>
      
      
             
          
             
             
           
             
             
             
             <button type="submit" class="btn btn-primary" onClick={Saveproduct}>Submit</button>
           </form>
        
        </div>
      </div>
    </div> */}






{/*  */}

</>
       
   );

}
export default Admin;