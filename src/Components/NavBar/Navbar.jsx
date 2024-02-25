import React from 'react'
import './NavBar.css'
import search_icon from '../../assets/search.png'
import profile_icon from '../../assets/jack.png'
import youtube_icon from '../../assets/youtubelo.png'
import { Link } from 'react-router-dom'
const Navbar = ({setsidebar}) => {
  return (
    <nav className='flex-div'>

        <div className='nav-left flex-div'>
            <span class="material-symbols-outlined" onClick={()=>setsidebar(prev=>prev===false?true:false)}>
                    menu
            </span>
            <Link to='/' className='ytlogo'>
                 <h1>Youtube</h1>
                <img src={youtube_icon} alt="" />
            </Link>
        </div>

        <div className="nav-middle flex-div">
            <div className="search-box flex-div">
                <input type="text" placeholder='Search' />
                <img src={search_icon} alt="" />
            </div>
        </div>

        <div className="nav-right flex-div">
            <span class="material-symbols-outlined">
                video_call
            </span>
            <span class="material-symbols-outlined">
                interests
            </span>
            <span class="material-symbols-outlined">
                notifications
            </span>
            <img src={profile_icon} className='user-icon' alt="" />
        </div> 
    </nav>
  )
}

export default Navbar