import {Form,Button,Container} from 'react-bootstrap';
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes,useLocation} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";
import React, { useState,useEffect } from 'react';
import './App.css';


function Admin(){
  const [product,setProducts] =useState([]);
  const  [categories, setCategories] =useState('');
  const[subcategories,setSubcategories]= useState();
  const[status,setStatus]= useState('');
  const [image, setImage] = useState([]) 
  const location = useLocation();
  const  [id, setId] =useState('');
  const [room, setRoom] = useState('');

  console.log()
  useEffect(()=>{
    axios.get("http://16.171.153.71:3306/listcate").then(res=>setProducts(res.data));
    
    
},[]);
console.log(product)

function handelDemo1(e)
{
  setSubcategories(e.target.value);

}



function handelDemo13(e)
{

  console.log(e.target.value)
  setCategories(e.target.value);
}
function handelDemo8(e) {
  setRoom(e.target.value);

}

function Saveproduct(e) {

  const formData = new FormData();
  formData.append('id', id);
  formData.append('categories', categories);
        formData.append('subcategories', subcategories);
        formData.append('status', status);

        formData.append('room', room);


  Array.from(image).forEach(item => {
      formData.append('filename', item)
      console.log(item)
  });

  const config = {
      headers: {
          'content-type': 'multipart/form-data'
      }
  }


  axios.post("http://16.171.153.71:3306/updatesubcate", formData, config).then(
      res => console.log(res)

  )

  Swal.fire({
      icon: 'success',
      // title: 'Password Changed',
      text: "subcate added successfuly",
  })

};

useEffect(() => {
    setId(location.state[0].id);
    setCategories(location.state[0].catename)
    setSubcategories(location.state[0].subname)
    setStatus(location.state[0].status)
    setImage(location.state[0].image);
    setRoom(location.state[0].room);

}, []);
  
return(
 <div  >
   <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css"/>
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
  <link href="css/ruang-admin.min.css" rel="stylesheet"></link>

  <div id="wrapper">

    
    <ul class="navbar-nav sidebar sidebar-light accordion " id="accordionSidebar">
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon">
         
        </div>
        <div class="sidebar-brand-text mx-3">Nomad Admin</div>
      </a>
      <hr class="sidebar-divider my-0"/>
      <li class="nav-item active">
        <a class="nav-link" href="/Dasboard">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span></a>
      </li>
      <hr class="sidebar-divider"/>
      
      
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap"
          aria-expanded="true" aria-controls="collapseBootstrap">
          <i class="far fa-fw fa-user"></i>
          <span>Users</span>
        </a>
        <div id="collapseBootstrap" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            <h6 class="collapse-header">Users</h6>
            <a class="collapse-item" href="Register">Registered Users</a>
            <a class="collapse-item" href="Paid">Paid Users</a>
            <a class="collapse-item" href="Subscribed">Subscribed Users</a>
            <a class="collapse-item" href="Reported">Reported Users</a>
          
          </div>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Subscriptions">
          <i class="fas fa-fw fa-user-plus"></i>
          <span>Subscriptions</span>
        </a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="Categories">
          <i class="fa fa-list-alt"></i>
          <span>Categories</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Subcategore">
          <i class="fa fa-list-alt"></i>
          <span>Sub Categories</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Content1">
          <i class="fa fa-file"></i>
          <span>Manage Content</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Content">
          <i class="fa fa-newspaper"></i>
          <span>Analyse Content Trend</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Message">
          <i class="fa fa-envelope"></i>
          <span>Inspirational Message</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Social">
          <img src="img/social.jpg"/>
          <span>Social Media Groups</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Video">
         <i class="fa fa-play-circle" ></i>
          <span>Dance Videos</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Live">
         <i class="fa fa-stream" ></i>
          <span>Live Sessions</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseBootstrap1"
          aria-expanded="true" aria-controls="collapseBootstrap1">
          <i class="fa fa-building"></i>
          <span>Corporate Users</span>
        </a>
        <div id="collapseBootstrap1" class="collapse" aria-labelledby="headingBootstrap" data-parent="#accordionSidebar">
          <div class="bg-white py-2 collapse-inner rounded">
            
          <a class="collapse-item" href="Corporate1">Corporate Users</a>
            <a class="collapse-item" href="Corporateaccept">Accpted User</a>
            <a class="collapse-item" href="Rejectcorporate">Rejected User</a>
            <a class="collapse-item" href="Invoicelist">Invoice List</a>
           
          
          </div>
        </div>
      </li>
      
            <li class="nav-item">
        <a class="nav-link" href="Transaction">
         <i class="fa fa-credit-card" ></i>
          <span>Transaction History</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Ticket">
         <i class="fas fa-ticket-alt" ></i>
          <span>Ticket Raised</span>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="Enquiry">
         <i class="fa fa-question-circle" ></i>
          <span>Inquiry Form</span>
        </a>
      </li>
      
      
      
      
      
      <hr class="sidebar-divider"/>
     
    </ul>
   
   
    <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">

        <nav class="navbar navbar-expand navbar-light bg-navbar topbar mb-4 static-top">
          <button id="sidebarToggleTop" class="btn btn-link rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" data-target="#colk"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"  id='colk'>
                <form class="navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-1 small" placeholder="What do you want to look for?"
                      aria-label="Search" aria-describedby="basic-addon2" style={{border_color: "#3f51b5;"}}/>
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
        
            
            <div class="topbar-divider d-none d-sm-block"></div>
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" data-target="#wetrg"
                aria-haspopup="true" aria-expanded="false">
                <img class="img-profile rounded-circle" src="img/boy.png" />
                <span class="ml-2 d-none d-lg-inline text-white small">Admin</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown" id='wetrg'>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                  Profile
                </a>
                {/* <a class="dropdown-item" href="#">
                  <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                  Settings
                </a>
                <a class="dropdown-item" href="#">
                  <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                  Activity Log
                </a> */}
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="javascript:void(0);" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </nav>

           <div class="container-fluid" id="container-wrapper">
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Add Sub Categories</h1>
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item">Sub Categories</li>
              <li class="breadcrumb-item active" aria-current="page">Add</li>
            </ol>
          </div>
         
          <div class="row">
     
            <div class="col-lg-12">
             
              <div class="card mb-10">
                
                <div class="card-body">
                  <form onSubmit={(event) => event.preventDefault()}>
                  <div class="form-group">
                      <label for="exampleInputCategory">Category Name</label>
                      <div >
                      <select name="cate" className="form-control" i onChange={handelDemo13}>
                   <option>{categories}</option>
                   {
                     product.map( (products,index)=>(                    
                   <option key={index} value={products.catename} onChange={handelDemo13}>{products.catename}</option>
                   
                  
                     ))
                     }
    
                 </select>
                 
                      </div>
                      </div>
                      <div class="form-group">
                      <label for="">Select Room</label>
                      <div class="form-group">
                   
                     <select class="form-control mb-3"  onChange={handelDemo8}>
                     <option>{room}</option>
                    <option>Room1</option>
                     <option>Room2</option>
                      <option>Room3</option>
                      <option>Live Sessions</option>
                      <option>Corporate</option>
                  </select>
                    </div>

                      </div>
                       <div class="form-group">
                      <label for="exampleInputSubCategory">Sub Category Name</label>
                      <input type="user" class="form-control" id="exampleInputsubcategory" aria-describedby="planSubCategory" placeholder="Enter Sub Category name" style={{height: "calc(1.5em + 0.75rem + 1px)!important;"}} onChange={handelDemo1} value={subcategories}/>
                      </div>
                      
                  <div class="form-group">
                  <label for="exampleInputUser">File Upload</label>
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile" accept="image/*"  multiple onChange={(e) => { setImage(e.target.files) }} />
                        <label class="custom-file-label" for="customFile"  >Choose file</label>
                      </div>
                    </div>
                  
                  
                    
                    
                    
                    
                    
                    
                    
                    
                    
                  
                    
                    
                    
                    <button type="submit" class="btn btn-primary" onClick={Saveproduct}>Submit</button>
                  </form>
                </div>
              </div>

          
              
            </div>

            
          </div>
       
          <div class="card-body"  align="right">
               
                  <a href="subcategories.html"><button type="button" class="btn btn-outline-primary mb-1">Back</button></a>
                 
                  
                </div>
               

       
          <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabelLogout" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabelLogout">Ohh No!</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Are you sure you want to logout?</p>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-primary" data-dismiss="modal">Cancel</button>
                  <a href="login.html" class="btn btn-primary">Logout</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
 
      <footer class="sticky-footer bg-white">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>copyright &copy; <script> document.write(new Date().getFullYear()); </script> - developed by
              <b><a href="https://omkatech.com/" target="_blank">Omka Tech LLP</a></b>
            </span>
          </div>
        </div>

        
      </footer>

    </div>
  </div>


  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>




</div> 
       
   );

}
export default Admin;