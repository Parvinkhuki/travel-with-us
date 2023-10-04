import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/img/logo.png'
const Link=()=>{
    const style=
    ({ isActive}) => {
        return {
          backgroundColor: isActive ? "transparent"  : "",
          fontWeight: isActive ? "bold" : "",
          color:isActive? "#F9A51A":"",
          textDecoration:isActive? 'underline':''
          
     
        };
      }
    return(
        <>
         <div className="form-control">
      <input type="text" placeholder="Search your Destination..." className="input border-2 border-black text-black bg-transparent lg:mx-5 w-[80%] md:w-auto" />
    </div>
        <li><NavLink to='/' style={ style}  className='text-2xl font-medium'>Home</NavLink></li>
        <li><NavLink to='/destination' style={ style} className='text-2xl font-medium'>Destination</NavLink></li>
        <li><NavLink to='/blog' style={ style} className='text-2xl font-medium'>Blog</NavLink></li>
        <li><NavLink to='/news' style={ style} className='text-2xl font-medium'>News</NavLink></li>
       
        
      
        </>
    )
}

const NavBar = () => {
    return (
        <>
       <div className='' >
       <div className='lg:absolute  text-center  max-w-screen-2xl left-1/4'>
        <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <Link></Link>
      </ul>
    </div>
   <img className='w-[150px] bg-white p-3 rounded text-white' src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     <Link></Link>
    </ul>
  </div>
  <div className="navbar-end">
   <NavLink className="btn bg-pro">login</NavLink>
  </div>
</div>
        </div>
       </div>

        </>
    );
};

export default NavBar;