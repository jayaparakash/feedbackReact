import React from 'react';
import { Route, Routes } from "react-router-dom";
import FeedbackForm from '../Feedback/FeedbackForm';
import About from '../About/About';
import Home from '../Home/Home';
import Blog from '../Blog/Blog';

const Routing = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default Routing