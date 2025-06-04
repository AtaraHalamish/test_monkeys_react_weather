import React from 'react'

export default function WeatherForm() {
  return (
   
    <nav className='container-fluid bg-warning p-2'>
      <div className='container'>
        <div className="row">
          <div className="logo col-auto text-light">
            <h2>Weather App</h2>
          </div>
          <div className="d-flex col-md-4">
            {/* <form className='d-flex w-100'> */}
              <input id='id_input' type="search" className='form-control' placeholder='Enter city name' />
              <button id='search_btn' className='btn btn-dark ms-2'>Search</button>
            {/* </form> */}
          </div>
        </div>
        
      </div>
    </nav>
  )
}
