import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import cx from "./Home.module.scss";
import {
  article1,
  article2,
  article3,
  bannerImg,
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  decore0,
  decore1,
  decore2,
  decore3,
  livingImg,
  userIcon,
} from "../../assets";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiMiniArrowSmallRight } from "react-icons/hi2";
import {} from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
const Home = () => {
  return (
    <>
      <section className={`${cx.bannerSec}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.bannerImg}`}>
                <img src={bannerImg} alt="banner Img" />
              </div>

              <div className={`${cx.titleSec}`}>
                <h1>
                  Let Your Home <br /> Be Unique
                </h1>
                <p>
                  There are many variations of the passages of <br /> lorem
                  Ipsum fromavailable, majority.
                </p>
                <NavLink to="/">
                  Get Started{" "}
                  <HiMiniArrowSmallRight className={`${cx.moreIcon}`} />{" "}
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.plansDetailsSec}`}>
        <Container>
          <Row>
            <Col lg={4} md={4}>
              <div className={`${cx.plansDetail}`}>
                <h3>Project Plan</h3>
                <p>
                  There are many variations of the passages of lorem Ipsum from
                  available, majority.
                </p>
                <NavLink to="#">
                  Read More
                  <HiMiniArrowSmallRight className={`${cx.moreIcon}`} />
                </NavLink>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className={`${cx.plansDetail}`}>
                <h3>Interior Work</h3>
                <p>
                  There are many variations of the passages of lorem Ipsum from
                  available, majority.
                </p>
                <NavLink to="#">
                  Read More{" "}
                  <HiMiniArrowSmallRight className={`${cx.moreIcon}`} />
                </NavLink>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className={`${cx.plansDetail}`}>
                <h3>Realization</h3>
                <p>
                  There are many variations of the passages of lorem Ipsum from
                  available, majority.
                </p>
                <NavLink to="#">
                  Read More{" "}
                  <HiMiniArrowSmallRight className={`${cx.moreIcon}`} />
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.livingSec}`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className={`${cx.livingTitle}`}>
                <h2>We Create The Art Of Stylish Living Stylishly</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the of readable content of a page when lookings at its
                  layouts the points of using that it has a more-or-less normal.
                </p>

                <div className="d-flex gap-3 py-2 mb-5">
                  <div className={`${cx.callicon}`}>
                    <IoCallOutline />
                  </div>
                  <div className={`${cx.callDetail}`}>
                    <h5>012345678</h5>
                    <span>Call Us Anytime</span>
                  </div>
                </div>
                <NavLink to="/">
                  Get Free Estimate
                  <HiMiniArrowSmallRight className={`${cx.moreIcon}`} />{" "}
                </NavLink>
              </div>
            </Col>
            <Col lg={6}>
              <div className={`${cx.imgSec}`}>
                <img src={livingImg} alt="art of living image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.aboutPeople}`}>
        <Container >
          <div className={`${cx.bgcolor}`}>
          <Row>
            <Col lg={12}>
              <div className={`${cx.userHeading}`}>
                <h3>
                  What the People Thinks <br />
                  About Us
                </h3>
              </div>
            </Col>
            <Col lg={4}>
              <div className={`${cx.users}`}>
                <div className={`${cx.userDetail}`}>
                  <img src={userIcon} alt="" />
                  <div>
                    <h5>Nattasha Mith</h5>
                    <span>Sydney, USA</span>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={`${cx.users}`}>
                <div className={`${cx.userDetail}`}>
                  <img src={userIcon} alt="" />
                  <div>
                    <h5>Raymond Galario</h5>
                    <span>Sydney, Australia</span>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been scrambled it to make a type book.
                </p>
              </div>
            </Col>
            <Col lg={4}>
              <div className={`${cx.users}`}>
                <div className={`${cx.userDetail}`}>
                  <img src={userIcon} alt="" />
                  <div>
                    <h5>Benny Roll</h5>
                    <span>Sydney, New York</span>
                  </div>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the typesetting industry.
                  Ipsum has been scrambled.
                </p>
              </div>
            </Col>
          </Row>
          </div>
        </Container>
      </section>

      <section className={`${cx.brands}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.brandsList}`}>
                <div>
                  <img src={brand1} alt="" />
                </div>
                <div>
                  <img src={brand2} alt="" />
                </div>
                <div>
                  <img src={brand3} alt="" />
                </div>
                <div>
                  <img src={brand4} alt="" />
                </div>
                <div>
                  <img src={brand5} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.decoreSec}`}>
        <Container>
          <Row>
            <Col lg={8} className="m-auto">
              <div className={`${cx.heading}`}>
                <h3>Follow Our Projects</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the of readable content of page lookings at its layouts
                  points.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={`${cx.decorList} ${cx.pdrclass}`}>
                <img src={decore0} alt="" />
                <div className={`${cx.listdetails}`}>
                  <div>
                    <h5>Modern Kitchan</h5>
                    <span>Decor / Artchitecture</span>
                  </div>
                  <NavLink to="#">
                    
                    <HiOutlineChevronRight className={`${cx.slideIcon}`} />
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={`${cx.decorList} ${cx.pdlclass}`}>
                <img src={decore1} alt="" />
                <div className={`${cx.listdetails}`}>
                  <div>
                    <h5>Modern Kitchan</h5>
                    <span>Decor / Artchitecture</span>
                  </div>
                  <NavLink to="#">
                    {" "}
                    <HiOutlineChevronRight className={`${cx.slideIcon}`} />
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={`${cx.decorList} ${cx.pdrclass}`}>
                <img src={decore2} alt="" />
                <div className={`${cx.listdetails}`}>
                  <div>
                    <h5>Modern Kitchan</h5>
                    <span>Decor / Artchitecture</span>
                  </div>
                  <NavLink to="#">
                    {" "}
                    <HiOutlineChevronRight className={`${cx.slideIcon}`} />
                  </NavLink>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={`${cx.decorList} ${cx.pdlclass}`}>
                <img src={decore3} alt="" />
                <div className={`${cx.listdetails}`}>
                  <div>
                    <h5>Modern Kitchan</h5>
                    <span>Decor / Artchitecture</span>
                  </div>
                  <NavLink to="#">
                    {" "}
                    <HiOutlineChevronRight className={`${cx.slideIcon}`} />
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.workExperience}`}>
        <Container>
          <Row>
            <Col lg={3} md={3}>
              <div className={`${cx.details}`}>
                <h5>12</h5>
                <span>Years Of Experiance</span>
              </div>
            </Col>
            <Col lg={3} md={3}>
              <div className={`${cx.details}`}>
                <h5>85</h5>
                <span>Success Project</span>
              </div>
            </Col>
            <Col lg={3} md={3}>
              <div className={`${cx.details}`}>
                <h5>15</h5>
                <span>Active Project </span>
              </div>
            </Col>
            <Col lg={3} md={3}>
              <div className={`${cx.details} border-0`}>
                <h5>95</h5>
                <span>Happy Customers</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.articlesnews}`}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={`${cx.heading}`}>
                <h3>Articles & News</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the of readable content <br /> of a page when lookings at
                  its layouts the points of using.
                </p>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className={`${cx.articles}`}>
                <div className={`${cx.innerBox}`}>
                  <img src={article1} alt="" />
                  <div className={`${cx.badge}`}>
                    <span> Kitchan Design</span>
                  </div>
                  <h5>Let’s Get Solution For Building Construction Work</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>26 December,2022 </span>
                    <NavLink to="#">
                      {" "}
                      <HiOutlineChevronRight className={`${cx.slideIcon}`} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div
                className={`${cx.articles}`}
                style={{ backgroundColor: "#F4F0EC" }}
              >
                <div className={`${cx.innerBox}`}>
                  <img src={article2} alt="" />
                  <div className={`${cx.badge}`}>
                    <span> Living Design</span>
                  </div>
                  <h5>Low Cost Latest Invented Interior Designing Ideas.</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>22 December,2022 </span>
                    <NavLink to="#" style={{ backgroundColor: "#fff" }}>
                      {" "}
                      <HiOutlineChevronRight className={`${cx.slideIcon}`} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className={`${cx.articles}`}>
                <div className={`${cx.innerBox}`}>
                  <img src={article3} alt="" />
                  <div className={`${cx.badge}`}>
                    <span> Interior Design</span>
                  </div>
                  <h5>Best For Any Office & Business Interior Solution</h5>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>25 December,2022 </span>
                    <NavLink to="#">
                      {" "}
                      <HiOutlineChevronRight className={`${cx.slideIcon}`} />
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={`${cx.joinUs}`}>
        <Container>
          <div className={`${cx.joinUsdetail}`}>
            <h3>Wanna join the interno?</h3>
            <p>It is a long established fact will be distracted.</p>

            <NavLink to="#">
              Contact With Us{" "}
              <HiMiniArrowSmallRight style={{ color: "#292F36", fontSize:"20px" }} />{" "}
            </NavLink>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
