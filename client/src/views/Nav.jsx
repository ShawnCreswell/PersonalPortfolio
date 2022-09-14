import React from 'react'
import {Link} from 'react-router-dom'



const Nav = () => {
    return (
        
        <div className="container">
            <div className="bg-light">
                <Link className='btn ' to={`/author`}><p>Home</p></Link>
                <Link className='btn ' to={`/new`}><p>Create</p></Link>
            </div>
        </div>
    )
}
export default Nav