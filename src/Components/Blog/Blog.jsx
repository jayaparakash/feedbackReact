import { Link } from "react-router-dom";
import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../../Images/IMG_20230327_132504507.jpg"
import img2 from '../../Images/IMG_20230327_133656755.jpg';
import img3 from '../../Images/IMG_20230327_132504507.jpg';
const Blog = () => {
  return (
    <div className="blog">
    <Carousel data-bs-theme="dark">
   <Carousel.Item>
     <img style={{height:550}}
       className="d-block w-100"
       src={img1}
       alt="First slide"
     />
     <Carousel.Caption>
       <h5>First slide label</h5>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img style={{height:550}}
       className="d-block w-100"
       src={img2}
       alt="Second slide"
     />
     <Carousel.Caption>
       <h5>Second slide label</h5>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img  style={{height:550}}
       className="d-block w-100"
       src={img3}
       alt="Third slide"
     />
     <Carousel.Caption>
       <h5>Third slide label</h5>
       <p>
         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
       </p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>        

 <div className="locations">
        <div className="container text-center">
          <h2
            className="heading-7 wow fadeInUp animated animated"
            style={{ visibility: "visible" }}
          >
            {" "}
            Locations{" "}
          </h2>
          <h6
            className="heading-8 wow fadeInDown animated animated"
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
              <div className="col-md-6">
                <div
                  className="card cursorPointer wow fadeInUp animated animated"
                  style={{ visibility: "visible" }}
                >
                  {" "}
                  <img
                    src="https://www.achieversit.com/assets/images/hyd.jpg"
                    className=""
                    alt="Locations"
                  />
                  <div className="card-body">
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
                        className="fa fa-map-marker text-danger"
                        aria-hidden="true"
                      ></i>{" "}
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
                    src="https://www.achieversit.com/assets/images/btm.jpg"
                    className=""
                    alt="Locations"
                  />
                  <div className="card-body">
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
