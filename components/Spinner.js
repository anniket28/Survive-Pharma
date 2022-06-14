import React from 'react'

const Spinner = (props) => {
  return (
    <div>
        {props.showSpinner && <div className='text-center my-3'>
            <div className="spinner-border text-sky-500" role="status">
            </div>
            <div className='fs-4'>Loading...</div>
        </div> }
    </div>
  )
}

export default Spinner