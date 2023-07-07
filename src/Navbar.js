import React, { useState,useEffect } from "react";
import "./navbar.css";

function Navbar(){
     const [show,setShow] = useState(false);
     useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                setShow(true);
            }
            else{
                setShow(false);
            }
        });
        return ()=>window.removeEventListener("scroll",() => {
            if(window.scrollY > 100){
                setShow(true);
            }
            else{
                setShow(false);
            }
        })
      }, []);
    
     
    
    
    return(
        <div className={`nav ${show && "nav_black"} `}  >
           <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="Netfilx Logo"></img> 
           <img 
        className="user"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user"
      />
        </div>
    )
}
export default Navbar;