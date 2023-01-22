import React from 'react'
import HomeImg from '../assets/casual-life-3d-boy-sitting-at-the-desk-with-open-book.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpress, faJs, faBootstrap, faReact, faNodeJs, faWhatsapp, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import MongoDB from "../assets/mongodb.png"

function Home() {
  return (
    <div className="">
      <section className=' my-28 min-w-fit'>
        <div className='container min-w-fit'>
          <div className='border-4 w-52 h-48 p-3.5 rounded-circle mx-auto'>
            <img src={HomeImg} alt="reading" />
          </div>
          <div className='text-center text-white'>
            <h1 className="min-w-max" >Oaikhienan Cornelius</h1>
            <h3 className="min-w-max">Full Stack Developer</h3>
            
            <div className='d-flex justify-center my-3'>
              <FontAwesomeIcon icon={faWordpress} className="text-blue-200 mx-2 scale-125"/>
              <FontAwesomeIcon icon={faJs} className="text-yellow-400 mx-2 scale-125"/>
              <FontAwesomeIcon icon={faBootstrap} className="text-yellow-400 mx-2 scale-125"/>
              <FontAwesomeIcon icon={faReact} className="text-[#34efef] mx-2 scale-125"/>
              <FontAwesomeIcon icon={faNodeJs} className="text-green-500 mx-2 scale-125"/>
              <img src={ MongoDB } alt="MongoDB" className="w-7 h-4 scale-125" />
            </div>

            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4'>
              <p className=" justify-between">
                Bringing product designs to reality through pixel perfect coding that is
                fully functional and responsive to all devices and also working on the Web, 
                Android and IOS platform
              </p>
            </div>

            <div className='min-w-max'>
              <button className='bg-blue-700 text-white px-3 py-2.5 rounded'>
                Let's Talk <FontAwesomeIcon icon={faPaperPlane} className="text-white ml-2" />
              </button>

              <button className='bg-green-500 text-white px-3 py-2.5 rounded ml-5'>
                <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
              </button>

              <button className='bg-white text-white px-3 py-2.5 rounded ml-2'>
                <FontAwesomeIcon icon={faGooglePlusG} className="text-red-500" />
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home