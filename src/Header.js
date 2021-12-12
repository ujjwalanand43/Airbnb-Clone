import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { useNavigate  } from "react-router-dom";

function Header() {
    let Navigate = useNavigate();
    const go = ()=>{
        Navigate('/search')
    }
    return (
        <>
           <div className="header">
               <Link to='/'>
               <img className="header_icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="" />
               
               </Link>

               <div className="header__center">
                   <input type="text" />
                   <SearchIcon onclick={go}/>
               </div>
               <div className="header__right">
                   <p>Become a host</p>
                   <ExpandMoreIcon/>
                     <Avatar/>
               </div>
               </div> 

        </>
    )
}

export default Header
