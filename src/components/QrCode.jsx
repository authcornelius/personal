import React from 'react'
import '../App.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function QrCode() {
  return (
    <div className="absolute">
      <div className=' bg-[#ffffff49] h-full fixed col-12'>
        <div className='container'>
          <div className='Scanner'>
            <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3 justify-center align-middle">
              <div className='card mx-[15%]'>
                <h1>Hello World</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QrCode
