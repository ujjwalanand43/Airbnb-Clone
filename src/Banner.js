import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@material-ui/core';
import Search from './Search'
import { useNavigate  } from "react-router-dom";
function Banner() {
    let Navigate = useNavigate();
    const go = ()=>{
        Navigate('/search')
    }
    const [showSearch , setshowSearch] = useState(false);
    return (
        <>
            <div className="banner">
                <div className="banner__search">
                    {showSearch && <Search/>}
                    <Button className="banner__searchButton" variant="outlined" onClick={()=>setshowSearch(!showSearch)}>{showSearch?'Hide':'Search Dates'}</Button>
                </div>
             <div className="banner__info">
                 <h1>Get out and stretch your imagination</h1>
                 <h5>Plan a different kind getaway to uncover the hidden gems for you</h5>
                 <Button variant='outlined' onClick={go
                 }>Explore Nearby</Button>
             </div>
            </div>
        </>
    )
}

export default Banner
