import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignRight, faAngleLeft, faAngleRight, faCalendarAlt, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Footer() {
  return (
    <div>
      <footer className=' bg-black mb-4 fixed-bottom'>
        <div className='offset-md-1'>
          <div className='container text-center justify-center align-middle self-center'>
            <div className='col-sm-12 col-md-7 offset-md-2 d-flex justify-around'>
              <Link to="/About" className='d-block d-lg-none'>
                  <button className=' text-white-3 py-2 rounded'>
                    <FontAwesomeIcon icon={faCalendarAlt} className="text-white" />
                  </button>
                </Link>

                <Link to="" className='d-block d-lg-none'>
                  <button className='text-whit3 py-2 rounded'>
                    <FontAwesomeIcon icon={faLinkedinIn}  className="text-white" />
                  </button>
                </Link>

                <Link to="" className='d-block d-lg-none'>
                  <button className='text-whit3 py-2 rounded'>
                    <FontAwesomeIcon icon={faTwitter}  className="text-white" />
                  </button>
                </Link>

                <Link to="" className='d-block d-lg-none'>
                  <button className='text-whit3 py-2 rounded'>
                    <FontAwesomeIcon icon={faGithub}  className="text-white" />
                  </button>
                </Link>
            </div>
            
            <div className='col-sm-12 col-md-7 offset-md-2 border d-flex justify-around rounded-lg'>           
              <NavLink to="/" className="py-2.5">
                <button className='bg-zinc-800 text-white px-3 py-2 rounded transition ease-in-out duration-300'>
                  <FontAwesomeIcon icon={faHome} className="text-white" />
                </button>
              </NavLink>
            
              <NavLink to="/About" className="py-2.5 ">
                <button className='bg-zinc-800 text-white px-3 py-2 rounded'>
                  <FontAwesomeIcon icon={faUser} className="text-white" />
                </button>
              </NavLink>
            
              <NavLink to="/Projects" className="py-1 ">
                <button className='bg-zinc-800 px-2.5 py-[0.75rem] rounded  my-1.5 d-flex'>
                  <FontAwesomeIcon icon={faAngleLeft} className="text-red-500" />
                    <span className='ml-2'></span>
                  <FontAwesomeIcon icon={faAngleRight} className="text-yellow-400" />
                </button>
              </NavLink>

              <NavLink to="/Contact" className="py-2.5 ">
                <button className='bg-zinc-800 text-white px-3 py-2 rounded'>
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                </button>
              </NavLink>

              <Link to="/About" className='d-none d-lg-block py-2.5 '>
                <button className='bg-zinc-800 text-white px-3 py-2 rounded'>
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-white" />
                </button>
              </Link>

              <Link to="" className='d-none d-lg-block py-2.5 '>
                <button className='bg-zinc-800 text-white px-3 py-2 rounded'>
                  <FontAwesomeIcon icon={faLinkedinIn}  className="text-white" />
                </button>
              </Link>

              <Link to="" className='d-none d-lg-block py-2.5 '>
                <button className='bg-zinc-800 text-white px-3 py-2 rounded'>
                  <FontAwesomeIcon icon={faTwitter}  className="text-white" />
                </button>
              </Link>

              <Link to="" className='d-none d-lg-block py-2.5 '>
                <button className='bg-zinc-800 text-white px-3 py-2 rounded'>
                  <FontAwesomeIcon icon={faGithub}  className="text-white" />
                </button>
              </Link>

              <div className='py-2.5 d-lg-none '>
                <button className='bg-zinc-800 text-white px-3 py-2 rounded'>
                  <FontAwesomeIcon icon={faAlignRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;