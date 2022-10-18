import React from 'react'
import { Row, Col, Container, Navbar, NavbarBrand } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import $ from 'jquery';
// require("expose?$!jquery");
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Lottie from "lottie-react";
import groovyWalkAnimation from "../16952-group-working.json";
const Home = () => {
  return (
    <>
      <section className="software_banner_area d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="software_banner_content">
                <h3
                  className="f_500 f_size_40 w_color wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  The world is <span className='f_600'>moving fast.</span> <br />We help you <span className='f_600'>move faster.</span>
                </h3>
                <p
                  className="w_color f_size_18 l_height30 mt_30 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  CHARUSAT Innovative Ventures Foundation (CIVF) is an Accelerator facility with a wide
                  network that provides connections with investors and successful entrepreneurs who are not only
                  willing to invest their money but also their time helping enterprises to flourish in the long run.
                  They also add value by providing mentoring and advice along with access to its entire network.
                </p>
                <div
                  className="action_btn d-flex align-items-center mt_40 wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <a href="#" className="software_banner_btn">
                    Boost your startup!
                  </a>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="software_img wow fadeInRight" data-wow-delay="0.2s">
                <Lottie animationData={groovyWalkAnimation} loop={true} />
                {/* <iframe src="https://embed.lottiefiles.com/animation/16952"></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="seo_service_area sec_pad bg_color">
        <div className="container">
          <div
            className="seo_sec_title text-center mb_70 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <h2>Vision and Mission</h2>
            <p>
              Initiation Innovation and Creativity!
            </p>
          </div>

          <div className="row seo_service_info">


            <div className=" col-lg-6 col-md-6">
              <div className="seo_service_item">
                <div className="p_service_item agency_service_item">
                  <div className="icon pt-2">
                    <img src="https://droitthemes.com/html/saasland/img/home5/icon_shape.png" alt="" />

                    <i className="uil uil-rocket" style={{ color: 'black', fontSize: '2.5rem' }}></i>
                  </div>
                  <h5 className="f_600 f_p t_color3">Mission</h5>
                  <p>
                    To create a vibrant ecosystem to accelerate the growth of start-ups.
                    To facilitate commercialization of IPR of the University for Societal Development.
                  </p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="seo_service_item">
                <div className="p_service_item agency_service_item">
                  <div className="icon pt-2">
                    <img src="https://droitthemes.com/html/saasland/img/home5/icon_shape.png" alt="" />
                    <i className="uil uil-eye" style={{ color: 'black', fontSize: '2.5rem' }}></i>
                  </div>
                  <h5 className="f_600 f_p t_color3">Vision</h5>
                  <p>
                    To emerge as a foremost organization leveraging innovation for the benefit of society through
                    supporting new ventures.

                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="event_fact_area sec_pad">
        <div className="container">
          <div className="hosting_title security_title text-center">
            <h2>
              We help startups go further, faster.
            </h2>
          </div>
          <div className="seo_fact_info">
            <div className="seo_fact_item wow fadeIn">
              <div className="text">
                <div className="counter one">18+</div>
                <p>Unicorns</p>
              </div>
            </div>
            <div className="seo_fact_item wow fadeIn" data-wow-delay="0.3s">
              <div className="text">
                <div className="counter two">34%</div>
                <p>Female Founders</p>
              </div>
            </div>
            <div className="seo_fact_item wow fadeIn" data-wow-delay="0.6s">
              <div className="text">
                <div className="counter three">350K+</div>
                <p>Grant Funding</p>
              </div>
            </div>
            <div className="seo_fact_item last wow fadeIn" data-wow-delay="0.9s">
              <div className="text">
                <div className="counter four">60+</div>
                <p>Hours 1:1 Mentorship</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg_color'>
        <div className="container">
          <div class="blog-sidebar row">
            <div className="col-6">
              <div className="widget sidebar_widget recent_post_widget_two mt_60">
                <h3 className="widget_title_two">Latest Announcements</h3>
                <div className="media post_item row">
                  <img className='col-3' src="https://droitthemes.com/html/saasland/img/new/blog/post1.jpg" alt="" />
                  <div className="media-body col-9">
                    <a href="#">
                      <h3>The giant leap from lab to market: Charusat University’s Patent Portfolio is out for
                        Commercialization.</h3>
                    </a>
                    <a href="#" className="entry_post_info">
                      Swati Joshi ON AUGUST 30, 2022
                    </a>
                  </div>
                </div>
                <div className="media post_item row">
                  <img className='col-3' src="https://droitthemes.com/html/saasland/img/new/blog/post1.jpg" alt="" />
                  <div className="media-body col-9">
                    <a href="#">
                      <h3>Services of NABL approved Environmental Engineering Laboratory is extended for solving
                        industrial problems.</h3>
                    </a>
                    <a href="#" className="entry_post_info">
                      Ravi Patel ON AUGUST 30, 2022
                    </a>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-6">
              <div className="widget sidebar_widget recent_post_widget_two mt_60">
                <h3 className="widget_title_two">News/Press Release</h3>
                <div className="media post_item row">
                  <i className='uil uil-arrow-right col-auto f_size_30'></i>
                  <div className="media-body col">

                    <a href="#">
                      <h3>Dr. Prabhin Sukumaran has received a 6-month prestigious Fulbright-Nehru Academic and Professional Excellence Fellowship (Research).</h3>
                    </a>
                    <a href="#" className="entry_post_info">
                      March 14, 2019
                    </a>
                  </div>
                </div>
                <div className="media post_item row" >
                  <i className='uil uil-arrow-right col-auto f_size_30'></i>
                  <div className="media-body col">
                    <a href="#">
                      <h3>Dr. Prabhin Sukumaran has received a 6-month prestigious Fulbright-Nehru Academic and Professional Excellence Fellowship (Research).</h3>
                    </a>
                    <a href="#" className="entry_post_info">
                      March 14, 2019
                    </a>
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </section>

      <section className="feedback_area_three bg_color sec_pad">
        <div className="">
          <div className="sec_title mb_70 wow fadeInUp" data-wow-delay="0.4s">
            <h2 className="f_p f_size_40 l_height50 f_500 t_color text-center">
              Loved by <span className='f_600'>startups</span>, and <br />
              individuals across the <span className='f_600'>globe</span>.
            </h2>
          </div>
          <div className="row">
            <div id="fslider_two" className="feedback_slider_two owl-carousel">


              <Carousel infiniteLoop showStatus={false} centerMode showArrows={false} emulateTouch stopOnHover={true}>
                {/* <OwlCarousel items={3} margin={8} autoplay ={true} > */}
                <div className="item">
                  <div className="feedback_item d-flex flex-column justify-items-center align-items-center">
                    
                    <div className="feed_back_author ">
                      <div className="media d-flex flex-column justify-items-center align-items-center">
                        <div className="img">
                          <img src="https://droitthemes.com/html/saasland/img/home6/feedback_img_two.png" alt="" />
                        </div>
                        <div className="media-body">
                          <h5 className="t_color f_size_15 f_p f_500 pt-2">Bailey Wonger</h5>
                          <h6 className="f_p f_400">web designer</h6>
                        </div>

                      </div>
                    </div>
                    <p className="f_size_16">
                      Show off show off pick your nose and blow off up the duff chimney
                      pot Why chap lost the plot, buggered wellies blatant bender well
                      blimey, what a load of rubbish bodge Richard tosser gutted mate
                      chinwag.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="feedback_item d-flex flex-column justify-items-center align-items-center">
                    
                    <div className="feed_back_author ">
                      <div className="media d-flex flex-column justify-items-center align-items-center">
                        <div className="img">
                          <img src="https://droitthemes.com/html/saasland/img/home6/feedback_img_two.png" alt="" />
                        </div>
                        <div className="media-body">
                          <h5 className="t_color f_size_15 f_p f_500 pt-2">Bailey Wonger</h5>
                          <h6 className="f_p f_400">web designer</h6>
                        </div>

                      </div>
                    </div>
                    <p className="f_size_16">
                      Show off show off pick your nose and blow off up the duff chimney
                      pot Why chap lost the plot, buggered wellies blatant bender well
                      blimey, what a load of rubbish bodge Richard tosser gutted mate
                      chinwag.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="feedback_item d-flex flex-column justify-items-center align-items-center">
                    
                    <div className="feed_back_author ">
                      <div className="media d-flex flex-column justify-items-center align-items-center">
                        <div className="img">
                          <img src="https://droitthemes.com/html/saasland/img/home6/feedback_img_two.png" alt="" />
                        </div>
                        <div className="media-body">
                          <h5 className="t_color f_size_15 f_p f_500 pt-2">Bailey Wonger</h5>
                          <h6 className="f_p f_400">web designer</h6>
                        </div>

                      </div>
                    </div>
                    <p className="f_size_16">
                      Show off show off pick your nose and blow off up the duff chimney
                      pot Why chap lost the plot, buggered wellies blatant bender well
                      blimey, what a load of rubbish bodge Richard tosser gutted mate
                      chinwag.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="feedback_item d-flex flex-column justify-items-center align-items-center">
                    
                    <div className="feed_back_author ">
                      <div className="media d-flex flex-column justify-items-center align-items-center">
                        <div className="img">
                          <img src="https://droitthemes.com/html/saasland/img/home6/feedback_img_two.png" alt="" />
                        </div>
                        <div className="media-body">
                          <h5 className="t_color f_size_15 f_p f_500 pt-2">Bailey Wonger</h5>
                          <h6 className="f_p f_400">web designer</h6>
                        </div>

                      </div>
                    </div>
                    <p className="f_size_16">
                      Show off show off pick your nose and blow off up the duff chimney
                      pot Why chap lost the plot, buggered wellies blatant bender well
                      blimey, what a load of rubbish bodge Richard tosser gutted mate
                      chinwag.
                    </p>
                  </div>
                </div>
                {/* </OwlCarousel> */}
              </Carousel>
            </div>
          </div>
        </div>
      </section>


      <section className="sass_partner_logo_area sec_pad">
  <div className="container">
    <div
      className="sec_title text-center wow fadeInUp"
      data-wow-delay="0.3s"
      style={{
        visibility: "visible",
        animationDelay: "0.3s",
        animationName: "fadeInUp"
      }}
    >
      <h2 className="f_p f_size_30 l_height50 f_600 t_color">
        We are proud of these Successful Startups!
      </h2>
    </div>
    <div className="partner_logo_area_four">
      <div className="row partner_info">
        <div className="logo_item">
          <a href="#">
            <img src="https://droitthemes.com/html/saasland/img/home3/logo_01.png" alt="" />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="https://droitthemes.com/html/saasland/img/home3/logo_02.png" alt="" />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="https://droitthemes.com/html/saasland/img/home3/logo_03.png" alt="" />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="https://droitthemes.com/html/saasland/img/home3/logo_04.png" alt="" />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="https://droitthemes.com/html/saasland/img/home3/logo_05.png" alt="" />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="https://droitthemes.com/html/saasland/img/home3/logo_03.png" alt="" />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="https://droitthemes.com/html/saasland/img/home3/logo_04.png" alt="" />
          </a>
        </div>
        <div className="logo_item">
          <a href="#">
            <img src="https://droitthemes.com/html/saasland/img/home3/logo_05.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Home