import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from '../../components/Header';
import { Nav } from '../../components/Nav';
import { useNavigate } from 'react-router';
import lays from '../../images/lays.jpg'
export const Chips = () => {
    let navigate=useNavigate()
  return (
    <div>
        <Header/>
        <Nav/>
        <div className='d-flex justify-content-center'><img style={{height:"250px",width:"250px"}} src={lays} alt="lays" /></div>
        <main style={{height:"50vh"}} className=' container d-flex align-items-center justify-content-center'>

            <div style={{width:"max-content"}} className='pt-4 pb-4 ps-3 pe-3 bg-primary rounded-3  text-light fs-2 fw-bolder ' >
<p>Ohh! Out of stock</p>
<ul style={{margin:"0px",padding:"0px"}}><li style={{cursor:"pointer"}}  className='text-black text-center' onClick={()=>navigate(-1)} >Go Back</li></ul>
            </div>
        </main>
    </div>
  )
}
