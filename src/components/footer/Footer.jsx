import React from 'react'
import logo from '../../images/CIVF.png'
const Footer = () => {
  return (
    <>
    <footer className="payment_footer_area payment_footer_area_two">
  <div className="footer_top_six">
    <div className="container">
      <div className="row">
        {/* <div className="col-lg-4 col-sm-6">
          <div className="f_widget company_widget">
            <a href="index.html" className="f-logo">
              <img
                src="img/logo3.png"
                srcSet="img/logo-3-2x.png 2x"
                alt="logo"
              />
            </a>
            <p className="mt_40">
              Copyright © 2022 Desing by <a href="#">CIVF</a>
            </p>
          </div>
        </div> */}
        <div className="col-lg-3 col-sm-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">Quick Links</h3>
            <ul className="list-unstyled f_list">
              <li>
                <a href="#">Latest Announcements</a>
              </li>
              <li>
                <a href="#">News/press Release</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Desktop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">About Us</h3>
            <ul className="list-unstyled f_list">
              <li>
                <a href="#">Ethos (Vision/mission)</a>
              </li>
              <li>
                <a href="#">Message from the Desk of Directors</a>
              </li>
              <li>
                <a href="#">Advisory Committee</a>
              </li>
              <li>
                <a href="#">CIVF Team</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">Start-up Portfolio</h3>
            <ul className="list-unstyled f_list">
              <li>
                <a href="#">Active Start-ups</a>
              </li>
              <li>
                <a href="#">Start-up Achievements</a>
              </li>
              <li>
                <a href="#">Career at Start-ups</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">Acceleration Program</h3>
            <ul className="list-unstyled f_list">
              <li>
                <a href="#">About the Program (Attach policy handbook)</a>
              </li>
              <li>
                <a href="#">Application Process Flow Chart</a>
              </li>
              <li>
                <a href="#">Apply for Acceleration (Registration Form)</a>
              </li>
              <li>
                <a href="#">Track Application</a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>

      <div className="row mt-5">
      <div className="col-lg-3 col-sm-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">Facilities</h3>
            <ul className="list-unstyled f_list">
              <li>
                <a href="#">Co-working Space</a>
              </li>
              <li>
                <a href="#">Mentorship (Mentors on-board)</a>
              </li>
              <li>
                <a href="#">Funding</a>
              </li>
              <li>
                <a href="#">Networking</a>
              </li>
              <li>
                <a href="#">Patent Filing and Commercialization</a>
              </li>
              <li>
                <a href="#">Infrastructural facilities</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">Services</h3>
            <ul className="list-unstyled f_list">
              <li>
                <a href="#">Legal support</a>
              </li>
              <li>
                <a href="#">Prototype development</a>
              </li>
              <li>
                <a href="#">Business Plan development</a>
              </li>
              <li>
                <a href="#">IT Support</a>
              </li>
              <li>
                <a href="#">Financial and Accounting services</a>
              </li>
              <li>
                <a href="#">Training, workshop and seminar services</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="f_widget about-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">Extras</h3>
            <ul className="list-unstyled f_list">
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Reports</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Faqs</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-sm-6">
          <div className="f_widget social-widget">
            <h3 className="f-title f_600 w_color f_size_18 mb_40">Follow Us</h3>
            <div className="f_social_icon">
              <a href="#" style={{margin:'auto'}} className="ti-facebook" />
              <a href="#" style={{margin:'auto'}} className="ti-twitter-alt" />
              <a href="#" style={{margin:'auto'}} className="ti-vimeo-alt" />
              <a href="#" style={{margin:'auto'}} className="ti-pinterest" />
            </div>

            <img src={logo} style={{width: '100%', marginTop:'1rem'}} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer