import React from 'react'
import "./Footer.css"
const Footer = () => {
    const date = new Date();
  return (
    <div className='footer'>
        <p>Built with love by Yasser {date.getFullYear()}&copy;</p>
    </div>
  )
}

export default Footer