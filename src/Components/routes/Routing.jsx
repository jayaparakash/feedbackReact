import React from "react";
import { Route, Routes } from "react-router-dom";
import FeedbackForm from "../Feedback/FeedbackForm";
import About from "../About/About";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Reviews from "../Reviews/Reviews";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </>
  );
};

export default Routing;
