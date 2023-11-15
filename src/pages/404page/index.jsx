import React from 'react'
import errorimg from "../../images/Error.jpg"
import "./error.css"
import { useNavigate } from 'react-router'
import "bootstrap/dist/css/bootstrap.min.css";
import { ROUTER } from '../../constants/router'
export const ErrorPage = () => {
    const navigate=useNavigate();
  return (
    <div>
     
      <div className='d-flex flex-column gap-3 align-items-center  mt-5'>
<img style={{width:"250px",height:"150px"}} src={errorimg} alt="error" />
<p  onClick={()=>navigate(ROUTER.home)} className='text-danger fs-3 fw-bold error  '>Go Home</p>
      </div>
    </div>
  )
}
