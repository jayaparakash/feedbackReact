import React from 'react';
import { Route, Routes } from "react-router-dom";
import FeedbackForm from '../Feedback/FeedbackForm';
import About from '../About/About';

const Routing = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </>
  )
}

export default Routing