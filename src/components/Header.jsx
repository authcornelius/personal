import React from 'react'
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Cornelius-designstyle-kiddo-m.png'

function Header() {
  return (
    <div>
      <header className=' fixed-top min-w-fit bg-[#000000c9] relative'>
        <div className="container">
          <div className=" max-w-fit mx-auto">
            <Link to='/'>
              <img className=' w-48' src={Logo} alt='Site Logo' />
            </Link>
          </div>
        </div>
      </header>
      
    </div>
  )
}

export default Header
