import { Link } from "react-router-dom";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import v1 from "../../Videos/Ait.mp4"
import img1 from "../../Images/IMG_20230327_133757704.jpg";
import img2 from "../../Images/IMG_20230327_133656755.jpg";

const Blog = () => {
  return (
    <div className="blog">
     
        {/*.........Carousel..............*/}

      <Carousel data-bs-theme="dark">
        <Carousel.Item>         
        <video className="w-100" controls autoPlay src={v1}> </video>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className ="d-block w-100"
            src={img1}
            height={500}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className ="d-block w-100"
            src={img2}
            height={500}
            alt="Third slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div>
     
     </div>

        {/*............. Locations............ */}

      <div className="locations mt-5">
        <div className="container text-center">
          <h2
            className="heading-7 wow fadeInUp animated animated"
            style={{ visibility: "visible" }}
          >
            {" "}
            Locations{" "}
          </h2>
          <h6
            classNameName="heading-8 wow fadeInDown animated animated"
            style={{ visibility: "visible" }}
          >
            {" "}
            Come and discuss with us about your goals ,We transform your goals
            into success!!!{" "}
          </h6>
          <div className="pad_t30">
            <div className="row">
              <div className="col-md-6">
                <div
                  className="card cursorPointer wow fadeInUp animated animated"
                  style={{ visibility: "visible" }}
                >
                  {" "}
                  <img
                    src="https://www.achieversit.com/assets/images/btm.jpg"
                    className=""
                    alt="Locations"
                  />
                  <div className="card-body">
                    <h5>BTM Layout - Bangalore</h5>
                    <p>
                      #63, 1st Floor, 16th Main, 8th Cross BTM 1st Stage, BTM
                      Layout, Bengaluru, Karnataka 560029
                    </p>
                    <Link
                      href="https://goo.gl/maps/2MjLXNVCSahJSrE19"
                      target="_blank"
                    >
                      <i
                        className="fa fa-map-marker text-danger"
                        aria-hidden="true"
                      ></i>
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="card cursorPointer wow fadeInUp animated animated"
                  style={{ visibility: "visible" }}
                >
                  {" "}
                  <img
                    src="https://www.achieversit.com/assets/images/mar.jpg"
                    className=""
                    alt="Locations"
                  />
                  <div className="card-body">
                    <h5>Marathahalli - Bangalore</h5>
                    <p>
                      {" "}
                      #1, 4th Main Rd, Extension, Ayyappa Layout, Chandra
                      Layout, Marathahalli, Bengaluru, Karnataka 560037
                    </p>
                    <Link
                      href="https://goo.gl/maps/tt4hse2FqZ3ughvP6"
                      target="_blank"
                    >
                      <i
                        className="fa fa-map-marker text-danger"
                        aria-hidden="true"
                      ></i>{" "}
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div
                  className="card cursorPointer wow fadeInUp animated animated"
                  style={{ visibility: "visible" }}
                >
                  {" "}
                  <img
                    src="https://www.achieversit.com/assets/images/hyd.jpg"
                    className  =""
                    alt="Locations"
                  />
                  <div className ="card-body">
                    <h5>Kukatpally - Hyderabad</h5>
                    <p>
                      #101, 1st floor, Vandana's Trade Center, Beside Padmavathi
                      Plaza, Above Union Bank, Kukatpally Housing Board Colony,
                      Kukatpally, Hyderabad, Telangana 500072
                    </p>
                    <Link
                      href="https://goo.gl/maps/nSGK2V5CKf5LMwHv6"
                      target="_blank"
                    >
                      <i
                        className ="fa fa-map-marker text-danger"
                        aria-hidden="true"
                      ></i>{" "}
                      Get Directions
                    </Link>
                  </div>
                </div>
              </div>
              <div className ="col-md-6 mt-5">
                <div
                  className ="card cursorPointer wow fadeInUp animated animated"
                  style={{ visibility: "visible" }}
                >
                  {" "}
                  <img
                    src="https://www.achieversit.com/assets/images/btm.jpg"
                    className =""
                    alt="Locations"
                  />
                  <div className ="card-body">
                    <h5>RajajiNagar - Bangalore</h5>
                    <p>Upcoming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
