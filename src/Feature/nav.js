import React from 'react'

const Nav=()=>{
    return(
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                   
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        <a className="nav-link" href="/about"> About Us</a>
                        <a className="nav-link" href="/services"> Services</a>
                        <a className="nav-link" href="/projects"> Projects</a>
                        <a className="nav-link" href="/contact"> Contact</a>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav;



