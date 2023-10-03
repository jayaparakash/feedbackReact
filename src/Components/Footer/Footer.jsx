import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
  BsLinkedin,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { BiMap, BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted mt-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block mt-3">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="icons">
          <Link
            to="https://www.facebook.com/AchieversITTrainings/"
            className=""
          >
            <BsFacebook className="icons_link" />
          </Link>
          <Link to="https://www.instagram.com/achieversit/" className="">
            <BsInstagram className="icons_link" />
          </Link>
          <Link to="" className="">
            <BsWhatsapp className="icons_link" />
          </Link>
          <Link
            to="https://www.linkedin.com/company/achieversit-trainings/"
            className=""
          >
            <BsLinkedin className="icons_link" />
          </Link>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                AchieversIT Trainings
              </h6>
              <p>
                AchieversIT - provides a wide group of opportunities for
                freshers and Experienced candidate who can develop their
                skillsHere you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">TRENDING COURSES</h6>
              <p>
                <Link
                  to="https://www.achieversit.com/ui-development-training-course-institute-in-bangalore"
                  className="text-reset"
                >
                  UI Developement
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.achieversit.com/angular-training-course-institute-in-bangalore"
                  className="text-reset"
                >
                  AngularJS
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.achieversit.com/react-training-training-course-institute-in-bangalore"
                  className="text-reset"
                >
                  ReactJS
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.achieversit.com/python-training-course-institute-in-bangalore"
                  className="text-reset"
                >
                  Python
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company </h6>
              <p>
                <Link
                  to="https://www.achieversit.com/placement-page.html"
                  className="text-reset"
                >
                  Placement
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.achieversit.com/corporate-training-page.html"
                  className="text-reset"
                >
                  Corporate training
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Contact US
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <BiMap />
                <MDBIcon icon="home" className="me-2" />
                #63, 1st Floor, 16th Main, 8th Cross,BTM 1st Stage, Bangalore,
                India - 560029
              </p>
              <p>
                <BiLogoGmail />
                <MDBIcon icon="envelope" className="me-3" />
                info@achieversit.com
              </p>
              <p>
                <BsFillTelephoneOutboundFill />
                <MDBIcon icon="phone" className="me-3" /> India : +91
                8431-040-457
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        Copyright © 2020 AchieversIT. All Rights Reserved
      </div>
    </MDBFooter>
  );
}
