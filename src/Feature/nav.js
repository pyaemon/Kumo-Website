import React from 'react'

const Nav = () => {
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">

        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <div className="navbar-nav">
        //                 <a className="nav-link active" aria-current="page" href="/home">Home</a>
        //                 <a className="nav-link" href="/about"> About Us</a>
        //                 <a className="nav-link" href="/services"> Services</a>
        //                 <a className="nav-link" href="/products"> Products</a>
        //                 <a className="nav-link" href="/contact"> Contact</a>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
        <div>
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <div class="container mx-xl-5 mx-lg-5 mx-md-4 mx-sm-2 mx-sm-1 mx-1 justify-content-between">
                    <a class="navbar-brand">Kumo</a>
                    <div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link me-2" href="/home">Home</a>
                                <a className="nav-link me-2" href="/about"> About Us</a>
                                <a className="nav-link me-2" href="/services"> Services</a>
                                <a className="nav-link me-2" href="/products"> Products</a>
                                <a className="nav-link" href="/contact"> Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Nav;