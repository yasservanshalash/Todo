import React from 'react'
import EventNoteIcon from '@mui/icons-material/EventNote';

import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <EventNoteIcon fontSize={"large"}/>
        <h1>ToDO</h1>
    </div>
  )
}

export default Header