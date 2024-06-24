import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ setId }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info-subtle shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/userdetails'>User Details</Link>
              </li>
              <li className="nav-item">
                <Link to='/form' onClick={() => setId(undefined)}>Create</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
