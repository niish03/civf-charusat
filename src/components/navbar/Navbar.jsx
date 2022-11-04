import React from 'react'
import logo from '../../images/CIVF.png'

const Navbar = () => {
    return (
        <>
        
            <header className="header_area" >
                <nav className="navbar navbar-expand-lg menu_one menu_four">
                    <div className="container">
                        <a className="navbar-brand sticky_logo" href="/"><img src={logo} width={70} alt="" /></a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span />
                                    <span />
                                    <span />
                                </span>
                                <span className="hamburger-cross">
                                    <span />
                                    <span />
                                </span>
                            </span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                            <ul className="navbar-nav menu w_menu ml-auto mr-auto">
                                
                                <li className="dropdown submenu nav-item"><a title="Pages" className="dropdown-toggle nav-link" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="/about">About us</a>
                                    
                                </li>

                                <li className="nav-item dropdown submenu">
                                    <a className="nav-link dropdown-toggle" href="/acceleration-program" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Acceleration Program
                                    </a>
                                   
                                </li>
                                {/* <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Start-up Portfolio
                                    </a>
                                    
                                </li> */}
                                <li className="nav-item dropdown submenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Benefits
                                    </a>
                                    <ul className="dropdown-menu mt-3">
                                        <li className="nav-item"><a href="blog-grid.html" className="nav-link">Facilities</a></li>
                                        <li className="nav-item"><a href="blog-grid-two.html" className="nav-link">Services</a></li>
                                        <li className="nav-item"><a href="blog-list.html" className="nav-link">Blogs</a></li>
                                        <li className="nav-item"><a href="blog-right-sidebar.html" className="nav-link">Reports</a></li>
                                        <li className="nav-item"><a href="blog-masonry.html" className="nav-link">Policy documents</a></li>
                                        {/* <li className="nav-item"><a href="blog-masonry-two.html" className="nav-link">Training, workshop and seminar services</a></li> */}
                                        
                                    </ul>
                                </li>

                                {/* <li className="nav-item dropdown submenu">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Market Trend
                                    </a>
                                    <ul className="dropdown-menu mt-3">
                                        <li className="nav-item"><a href="blog-grid.html" className="nav-link">Blogs</a></li>
                                        <li className="nav-item"><a href="blog-grid-two.html" className="nav-link">Reports</a></li>
                                        <li className="nav-item"><a href="blog-list.html" className="nav-link">Policy documents</a></li>
                                        
                                    </ul>
                                </li> */}

                                <li className="nav-item ">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Gallery
                                    </a>
                              
                                </li>
                                
                                <li className="nav-item ">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Donate
                                    </a>
                              
                                </li>
                                
                                
                            </ul>
                            <a className="btn_get btn_hover hidden-sm hidden-xs" href="#get-app">Contact us</a>
                        </div>
                    </div>
                </nav>
            </header>
            

        </>
    )
}

export default Navbar