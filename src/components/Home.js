import React from "react";
import "./Style.css";
import adminlogo from "../images/admin-new.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import cardthree from "../images/card3.jpg";
import cardfour from "../images/card4.jpg";
import calenderimg from "../images/Calendar2.jpg";
import middleimg from "../images/middlecard1.jpg";
import one from "../images/one.jpg";
import two from "../images/two.jpg";

function Home() {
  return (
    <div>
      <div className="viewbackimg ">
        <div className="d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 white-text text-center text-md-left mt-xl-5 fadeInLeft"
                data-wow-delay="0.3s"
              >
                <h1 className="font-weight-bold mt-sm-5">
                  Make purchases with our app
                </h1>

                <h6 className="pt-4 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                  repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                  sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
                  iste. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                  veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                  molestiae iste.
                </h6>
                <a className="btn btn-info">Know More</a>
              </div>

              <div className="col-md-6 col-xl-5 mt-xl-5 wow fadeInRight">
                <img src={adminlogo} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* three cards */}
      <div className="">
        <div className="card-group">
          <div className="card firstcard">
            <div className="card-body">
              <h5 className="card-title">Card One</h5>
              <p className="card-text text-justify pl-5 pr-5">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div className="card secondcard">
            <div className="card-body">
              <h5 className="card-title">Card Two</h5>
              <p className="card-text text-justify pl-5 pr-5">
                This card has supporting text below as a natural lead-in to
                additional content.This content is a little bit longer.
              </p>
            </div>
          </div>
          <div className="card thirdcard">
            <div className="card-body">
              <h5 className="card-title">Card Three</h5>
              <p className="card-text text-justify pl-5 pr-5">
                This card has supporting text below as a natural lead-in to
                additional content.This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* UpcomExam */}

      <div className="container">
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="card calendercard">
              <div className="card-body">
                <h4 className="card-title">Upcoming Examination</h4>
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card calendercardtwo">
              <div className="card-body">
                <div>
                  <i className="fa fa-thin fa-briefcase"></i>
                </div>
                <h6>
                  <b>02th October 2014</b>
                </h6>
                <p className="card-text text-justify pb-3">
                  This is a wider card with supporting text below as a natural.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card calendercardtwo">
              <div className="card-body">
                <div>
                  <i className="fa fa-thin fa-briefcase"></i>
                </div>
                <h6>
                  <b>02th October 2014</b>
                </h6>
                <p className="card-text text-justify pb-3">
                  This is a wider card with supporting text below as a natural.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card calendercardtwo">
              <div className="card-body">
                <div>
                  <i className="fa fa-thin fa-briefcase"></i>
                </div>
                <h6>
                  <b>02th October 2014</b>
                </h6>
                <p className="card-text text-justify pb-3">
                  This is a wider card with supporting text below as a natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CarouselSection */}

      <div className="container">
        <div className="mt-4">
          <div>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              // navigation
              pagination={{ clickable: true }}
              autoplay={true}
              disableOnInteraction={false}
              className="mySwiper"
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="Container mb-3 mt-3">
                  <div className="container slideimg text-white p-3">
                    <h5>Lorem Ipsum</h5>
                    <p className="text-justify pl-2 pr-2">
                      Get started with Bootstrap, the world’s most popular
                      framework for building responsive, mobile-first sites
                    </p>
                    <Link to="" className="text-white">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Container mb-3 mt-3">
                  <div className="container slideimg text-white p-3">
                    <h5>Lorem Ipsum</h5>
                    <p className="text-justify pl-2 pr-2">
                      Get started with Bootstrap, the world’s most popular
                      framework for building responsive, mobile-first sites
                    </p>
                    <Link to="" className="text-white">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Container mb-3 mt-3">
                  <div className="container slideimg text-white p-3">
                    <h5>Lorem Ipsum</h5>
                    <p className="text-justify pl-2 pr-2">
                      Get started with Bootstrap, the world’s most popular
                      framework for building responsive, mobile-first sites
                    </p>

                    <Link to="" className="text-white">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Container mb-3 mt-3">
                  <div className="container slideimg p-3 text-white">
                    <h5>Lorem Ipsum</h5>
                    <p className="text-justify pl-2 pr-2">
                      Get started with Bootstrap, the world’s most popular
                      framework for building responsive, mobile-first sites
                    </p>
                    <Link to="" className="text-white">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Container mb-3 mt-3">
                  <div className="container slideimg p-3 text-white">
                    <h5>Lorem Ipsum</h5>
                    <p className="text-justify pl-2 pr-2">
                      Get started with Bootstrap, the world’s most popular
                      framework for building responsive, mobile-first sites
                    </p>
                    <Link to="" className="text-white">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Container mb-3 mt-3">
                  <div className="container slideimg p-3 text-white">
                    <h5>Lorem Ipsum</h5>
                    <p className="text-justify pl-2 pr-2">
                      Get started with Bootstrap, the world’s most popular
                      framework for building responsive, mobile-first sites
                    </p>
                    <Link to="" className="text-white">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="Container mb-3 mt-3">
                  <div className="container slideimg p-3 text-white">
                    <h5>Lorem Ipsum</h5>
                    <p className="text-justify pl-2 pr-2">
                      Get started with Bootstrap, the world’s most popular
                      framework for building responsive, mobile-first sites
                    </p>
                    <Link to="" className="text-white">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      {/* NumberCountSec */}

      <div className="bggray mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-3 paracolor">
              <p>Lorem ipsum</p>
              <h1 className="pt-1">
                <CountUp end={123} duration={5} />+
              </h1>
              <h6>Lorem ipsum</h6>
              <p className="card-text text-justify pl-2 pr-2 pb-4">
                This is a wider card with supporting text below as a natural.
              </p>
            </div>

            <div className="col-md-3 p-3 paracolor">
              <p>Lorem ipsum</p>
              <h1 className="pt-1">
                <CountUp end={15} duration={1} />+
              </h1>
              <h6>Lorem ipsum</h6>
              <p className="card-text card-text text-justify pl-2 pr-2 pb-4">
                This is a wider card with supporting text below as a natural.
              </p>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <p>Lorem ipsum</p>
              <h1 className="pt-1">
                <CountUp end={12} duration={1} />+
              </h1>
              <h6>Lorem ipsum</h6>
              <p className="card-text text-justify pl-2 pr-2 pb-4">
                This is a wider card with supporting text below as a natural.
              </p>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <p>Lorem ipsum</p>
              <h1 className="pt-1">
                <CountUp end={123} duration={5} />+
              </h1>
              <h6>Lorem ipsum</h6>
              <p className="card-text text-justify pl-2 pr-2 pb-4">
                This is a wider card with supporting text below as a natural.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="secondchart">
        <div className="container">
          <div className="row">
            <div className="col-md-3 p-3 paracolor">
              <h6 className="pt-4 text-info">January20,2011</h6>
              <h5 className="text-white pt-2">
                Lorem ipsum <br></br>dolor sit amet
              </h5>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <h6 className="pt-4 text-info">January20,2011</h6>
              <h5 className="text-white pt-2">
                Lorem ipsum <br></br>dolor sit amet
              </h5>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <h6 className="pt-4 text-info">January20,2011</h6>
              <h5 className="text-white pt-2">
                Lorem ipsum <br></br>dolor sit amet
              </h5>
            </div>
            <div className="col-md-3 p-3 paracolor">
              <h6 className="pt-4 text-info">January20,2011</h6>
              <h5 className="text-white pt-2">
                Lorem ipsum <br></br>dolor sit amet
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="container ">
        <div className="row mt-5 mb-5">
          <div className="col-md-4">
            <div className="card roundcircle">
              <img
                className="card-img-top"
                src={cardfour}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>

              <small className="text-muted pb-4">
                <Link to="">Know More</Link>
              </small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card roundcircle">
              <img
                className="card-img-top"
                src={cardthree}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>

              <small className="text-muted pb-4">
                <Link to="">Know More</Link>
              </small>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card roundcircle">
              <img
                className="card-img-top"
                src={cardfour}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text text-justify">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>

              <small className="text-muted pb-4">
                <Link to="">Know More</Link>
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* DeloitteSection */}
      <div className="bggray">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 mt-4 mb-5">
              <h4 className="mb-4 paracolor">Lorem ipsum</h4>
              <div className="card roundcircle">
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="calenderpic float-left mt-4 mr-5 ml-3">
                      <img src={one} />
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
                <hr className="ml-3 mr-3"></hr>
                <div className="row">
                  <div className="col-md-4 ">
                    <div className="calenderpic float-left mt-3 mr-5 ml-3">
                      <img src={middleimg} />
                    </div>
                  </div>
                  <div className="col-md-6 p-2">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to adzditional content.
                    </p>
                  </div>
                </div>
                <hr className="ml-3 mr-3"></hr>
                <div className="row mb-4">
                  <div className="col-md-4 mb-2">
                    <div className="calenderpic float-left mt-3 mr-5 ml-3">
                      <img src={two} />
                    </div>
                  </div>
                  <div className="col-md-6 p-2">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 ">
              <h4 className="pb-3 paracolor">Lorem ipsum</h4>
              <div className="card roundcircle mb-4">
                <div className="row ">
                  <div className="col-md-4 mb-5 p-3">
                    <div className="calenderimg float-left mt-4 mr-5 ml-3">
                      <img src={calenderimg} />
                    </div>
                  </div>
                  <div className="col-md-7 pt-3 ml-3">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.below as a natural
                      lead-in to additional content
                    </p>
                    <p className="pt-4">
                      <Link to="">Register Now</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card roundcircle">
                <div className="row ">
                  <div className="col-md-4 mb-5 p-3">
                    <div className="calenderimg float-left mt-4 mr-5 ml-3">
                      <img src={calenderimg} />
                    </div>
                  </div>
                  <div className="col-md-7 pt-3 ml-3">
                    <p className="text-justify">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <p className="pt-4">
                      <Link to="">Register Now</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="animatepic">
        <div className="container">
          <div className="row animatepic">
            <div className="col-md-6 mt-5">
              <h4 className="text-justify text-info">Subscribe</h4>
              <p className="text-justify">
                Create better websites with mobile-responsive templates,
                <br></br>
                seamless drag & drop and unlimited customization.
              </p>
              <div>
                <form className="form-inline">
                  <div className="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">
                      Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Your Address"
                    />
                  </div>
                  <button
                    type="submit"
                    class="btn btn-primary mb-2 rounded-pill"
                  >
                    Subscribe Now
                  </button>
                </form>
              </div>
            </div>
            <div className="subscription "></div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footerimg">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <h5 className="text-justify">Contact Us</h5>
              <address className="text-justify mt-4">
                Iris Watson P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620
                Celeste Slater 606-3727 Ullamcorper. Street (372) 587-2335
              </address>
            </div>
            <div className="col-md-4 mt-5">
              <h5>Follow us</h5>
              <div className="row mx-auto">
                <div className="col-md-1 socialicon ml-5">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </div>
                <div className="col-md-1 socialicon">
                  <i className="fa fa-quora" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 mb-5">
              <h5 className="text-justify pl-4">Head Office</h5>
              <div className="d-flex">
                <div>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="pl-3 text-justify">
                  There are many different kinds of animals that live in China.
                  Tigers.
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="pl-3 text-justify">
                  There are many different kinds of animals that live in China.
                  Tigers.
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </div>
                <div className="pl-3 text-justify">
                  There are many different kinds of animals that live in China.
                  Tigers.
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <i className="fa fa-bus" aria-hidden="true"></i>
                </div>
                <div className="pl-3 text-justify">
                  There are many different kinds of animals that live in China.
                  Tigers .
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footerbackground p-2">
          <p className="">@ 2021 All Right Reserved.Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
