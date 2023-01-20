import React from 'react'
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/Cornelius-designstyle-kiddo-m.png'
import faBarcode from '../assets/hotspot.png'
import QrCode from './QrCode';

function Header() {
  return (
    <div>
      <header className=' fixed-top min-w-fit bg-[#000000c9] relative'>
        <QrCode /> 
        <div className='container'>
          <div className='d-flex py-3 min-w-max'>
            <div className=''>
              <Link to='/' className="min-w-max">
                <img className='w-40' src={Logo} alt='Site Logo' />
              </Link>
            </div>

            <div className='ml-auto mt-1.5 leading-3'>
              <button className='d-flex bg-zinc-700 text-white px-3 py-2.5 rounded min-w-max'>  
                share <img src={faBarcode} alt="Bar code scan" className='w-3 h-3 ml-2.5' />
              </button>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  )
}

export default Header
