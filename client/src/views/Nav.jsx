import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className="container">
                <div className='card'>
                    <div className="card-header d-flex justify-content-center" style={{backgroundColor: "orange"}}>
                        {/* <h1 className='ms-5'>Pirate Crew</h1> */}
                        <Link className='btn text-white me-1' style={{width: "150px", height: "50px", backgroundColor: "darkblue"}} to={`/pirate`}><p>Home</p></Link>
                        <Link className='btn text-white' style={{width: "150px", height: "50px", backgroundColor: "darkblue"}} to={`/new`}><p>Add Pirate</p></Link>
                        {/* <Link className='btn ' to={`/status/1`}><p>Manage Player Status</p></Link> */}
                    </div>
                </div>
        </div>
    )
}
export default Nav