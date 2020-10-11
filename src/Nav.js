import React, {useEffect, useState} from 'react'
import './Nav.css'

function Nav() {
    const  [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.screenY > 100){
                handleShow(true);
            }else handleShow(false)
        });
        return () =>{
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
           <img 
           alt=""
               src="https://lh3.googleusercontent.com/proxy/q8-ohzU3TiyHXfmxAmbhYzhCKVPT-GJUnzsVPv9W2_m_wBwxQ5FZLbzBEQEDV_9rL8fJMFtQmH-P7g7vTW-j8oXiFrrgr5iAH97aB7Wii_QC_LqqbVY"
               className="nav_logo"
           />
        </div>
    )
}

export default Nav
