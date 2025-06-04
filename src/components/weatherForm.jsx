import React, { useRef } from 'react'

export default function WeatherForm(props) {

  const inputRef = useRef(); // React.useRef(null); // access the input element directly.

  const onSearchClick = (ev) => {
    // ev.preventDefault();
    let town = inputRef.current.value; // inputRef.current is the DOM element.
    console.log(town);
    props.doApi(town);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearchClick();
    }
  };

  return (

    <nav className='container-fluid bg-warning p-2'>
      <div className='container'>
        <div className="row">
          <div className="logo col-auto text-light">
            <h2>Weather App</h2>
          </div>
          <div className="d-flex col-md-4">
            {/* <form className='d-flex w-100'> */}
            <input ref={inputRef} id='id_input' 
            type="search" className='form-control' placeholder='Enter city name'
            onKeyDown={handleKeyDown} />
            <button onClick={onSearchClick} id='search_btn' className='btn btn-dark ms-2'>Search</button>
            {/* </form> */}
          </div>
        </div>

      </div>
    </nav>
  )
}
