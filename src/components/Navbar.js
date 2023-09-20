import React from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.about}</a>
            {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light'?'black':'white'} mx-2`}>
        <input onClick={props.togglemode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label text-right" htmlFor="flexSwitchCheckDefault">{props.tag}</label>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'black':'white'} mx-2`}>
        <input onClick={props.redDarkMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label class="form-check-label text-right" htmlFor="flexSwitchCheckDefault">{props.tag1}</label>
      </div>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
    </nav>
  )
}
Navbar.propTypes ={
        title : propTypes.string,
        about : propTypes.string
}

Navbar.defaultProps = {
    title : 'Text Ultilis',
    about : 'About'
}

