import React from 'react'
import './BookingHomePage.css'
import { Link } from 'react-router-dom'
function BookingHomePage() {
  return (
    <div className='BookingHomePage'>
      <div className='Loginbox' style={{backgroundColor:'rgb(44,185,28)'}}>
        <h1>Patient</h1>
        <div className='LogiBoxbutton'>
        <Link to='/PatientLogin'><button>Login</button></Link>
        <Link to='/PatientRegister'><button>Registration</button></Link>
        </div>
        
      </div>
      <div className='Loginbox' style={{backgroundColor:'rgb(255, 64, 0)'}}>
        <h1>Doctor</h1>
        <div className='LogiBoxbutton' >
        <Link to='DoctorLogin'><button>Login</button></Link>
        <Link to='DoctorRegister'><button>Registration</button></Link>
        </div>
      </div>
      <div className='Loginbox' style={{backgroundColor:'rgb(19, 165, 153)'}}>
        <h1>Admin</h1>
        <div className='LogiBoxbutton'>
        <Link to='/AdminLogin'><button>Login</button></Link>
        </div>
      </div>

    </div>
  )
}

export default BookingHomePage