import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Search from '../Search/Search'

export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid ">
    <NavLink className="navbar-brand logo" to={'/'}>Cinema Movie</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link nav-list" aria-current="page" href={'#home'}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-list" href={'#schedule'}>Schedule</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-list" href={'#trend'}>Trend</a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav-list" href={'#blogs'}>Blog</a>
        </li>
      </ul>

          <Search/>
        <Link to={''} className="btn-sign text-white rounded-3 mt-3 mt-lg-0"><ion-icon name="log-in-outline"></ion-icon>Sign in</Link>


    </div>
  </div>
</nav>

  </>
}
