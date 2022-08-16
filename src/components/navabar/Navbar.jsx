import React, { useContext } from 'react'
import Sidebar from '../sidebar/Sidebar'
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./navbar.scss"
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='Navbar'>
    <div className='wrapper'>
        <div className='search'>
            <input type="text" placeholder='Search...' />
            <SearchOutlinedIcon />
        </div>

        <div className='items'>
            <div className='item'>
            <LanguageOutlinedIcon className="icon" />
            English
            </div>

            <div className='item' onClick={()=>dispatch({type:"TOGGLE"})}>
            <DarkModeOutlinedIcon className="icon" />
         
            </div>

            <div className='item'>
            <FullscreenExitOutlinedIcon className="icon" />
           
            </div>

            <div className='item'>
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className='counter'>1</div>
            
            </div>

            <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className='counter'>2</div>
            </div>

            <div className='item'>
            <ListOutlinedIcon className="icon" />
            
            </div>

            <div className='item'>
               <img alt='' src='https://media-exp1.licdn.com/dms/image/C5603AQHh_pG6rHc4jA/profile-displayphoto-shrink_800_800/0/1645592659695?e=1663200000&v=beta&t=7qHwyR3AuX887-mGi9LFEk7L2iKuKSwEa7QSrqczIDM' className='avatar'/>
            
            </div>

        </div>
    </div>
    
   

    </div>
  )
}

export default Navbar