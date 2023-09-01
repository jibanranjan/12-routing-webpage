import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
          <div className="up">
            <h4>0509418224</h4> <h4>enquiry@urbansciencemep.com</h4>


          </div>


          <div className="lower">

           <img width="auto" height="40rem" src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" />
        
               <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Project">Project</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Contact">Contact</Link>
               </div>

               <div className="btn">
                <button className='enqbtn'>Enquiry Now</button>
               </div>

          </div>

    </div>
  )
}

export default Nav