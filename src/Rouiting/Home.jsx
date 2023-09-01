import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='main'>
         <div className="left">
           <h2 className='homeSlogan'>
           Leading MEP & Facility management company in <br/> Dubai
           </h2>
           <h4 className='homepara'>
           Urban Science is always ready to accept your challenges
Meeting your goals is our main objective. Professional services for facility management & MEP works.
           </h4>

            <div className="buttons">
                <button className='profilebtn'>company profile</button> <button className='watchbtn' >watch video</button>
            </div>
       </div>

       <div className="right">
        <img className='homeImg' src='https://www.urbansciencemep.com/_next/static/images/banner-thumb-ce9763d5a9793e4688afdc229399007a.png' />
       </div>


    </div>
  )
}

export default Home