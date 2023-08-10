import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { logo } from "../../assets";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import cx from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <section className={`${cx.footer}`}>
        <Container>
          <Row>
            <Col lg={4}  md={12}>
              <div className={`${cx.logoBox}`}>
                <img src={logo} alt="logo" />
                <p>
                  It is a long established fact that a reader will be distracted
                  lookings.
                </p>
                <ul>
                  <li>
                    <CgFacebook />
                  </li>
                  <li>
                    <AiOutlineTwitter />
                  </li>
                  <li>
                    <RiLinkedinFill />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={4}>
              <div className={`${cx.services}`}>
                <ul> 
                  <li> <h5> Pages </h5></li>
                  <li>About Us</li>
                  <li>Our Projects</li>
                  <li>Our Team</li>
                  <li>Contact Us</li>
                  <li>Services</li>
                </ul>
              </div>
            </Col>
            <Col lg={2} md={4} >
              <div className={`${cx.services}`}>
                <ul>
                  <li><h5> Services </h5></li>
                  <li>Kitchen</li>
                  <li>Living Area</li>
                  <li>Bathroom</li>
                  <li>Dinning hall</li>
                  <li>Bedroom</li>
                </ul>
              </div>
            </Col>
            <Col lg={4} md={4}>
              <div className={`${cx.contact}`}>
                <h5>Contact</h5>
                <p>
                  55 East Birchwood Ave. Brooklyn, New York 11201
                  </p>
                  <span>
                  contact@interno.com </span> <br /> <span> (123) 456 - 7890
                </span>
              </div>
            </Col>
          </Row>
        </Container>
        <div className={`${cx.copyright}`}>
          <h6>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</h6>
        </div>
      </section>

    </>
  );
};

export default Footer;
