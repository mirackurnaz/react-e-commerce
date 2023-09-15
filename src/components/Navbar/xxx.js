import Userr from "./image-navbar/userr.png"
import { Link } from "react-router-dom";
import React, { useRef, useState } from "react"
import "./index.css"

import { Button } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";
const Dropdownn = ()=>{
    const [open,setOpen]=useState(false);
    const menuRef=useRef();
    const imgRef=useRef()

    const { user, logout } = useAuth();
	let navigate = useNavigate();
	const handleLogout = async () => {
		logout(() => {
			navigate("../");
		});
	};

    window.addEventListener("click",(e)=>{
        if(e.target !== menuRef.current && e.target !== imgRef.current){
            setOpen(false);
        }
    })
   return( 
    <div>
            <div className='menu-trigger'>
                <img 
                ref={imgRef}
                onClick={()=>setOpen(!open)}
                src={Userr} 
                alt="user" >

                </img>

                {
                    open &&(
                        <div ref={menuRef} className="dropdown-menu">
                     <h3>Miraç KURNAZ<br/><span>Front End Developer</span></h3>

                <ul className="dropdown-menu-ul">
                <Link to="/profile"> 

                    <li onClick={()=>setOpen(false)}>
                   
                        Profile</li></Link>
                     <Link to={"/admin"}>
                    <li onClick={()=>setOpen(false)}>Edit</li>
                    </Link>
                    <li onClick={()=>setOpen(false)}>Setting</li>
                    <li onClick={()=>setOpen(false)}>İnbox</li>
                    <Button onClick={handleLogout}  bg={"tomato"} color={"white"} _hover={"tomato"}  _active={"tomato"}>
                    <li onClick={()=>setOpen(false)}>
                        Logout</li>
                    </Button>
                </ul>
                </div>
                    )
                }


                
            </div>
        </div>)
    
}
export default Dropdownn