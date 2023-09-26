import React, { useState, useRef } from "react";
import "./FeedbackForm.css"; // Create a separate CSS file for styling

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    batch: "",
    trainerName: "",
    sessionDate: "",
    feedback: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxACl8jeMx5zgnjLHfnvpYYSK9jrizeGmTq0jbunbhWhLO_66aiXHRPFz7ZJOWwcbjZ/exec",
        {
          method: "POST",
          body: new FormData(formRef.current),
        }
      );

      if (response.ok) {
        alert("Feedback submitted successfully");
      } else {
        throw new Error("Feedback submission failed");
      }
    } catch (error) {
      console.error("Error!", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form ref={formRef} name="form" method="post" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="batch">Batch:</label>
        <select
          id="batch"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          required
        >
          <option value="">Select your Batch</option>
          <option value="AIT-1">AIT-1</option>
          <option value="AIT-2">AIT-2</option>
          <option value="AIT-3">AIT-3</option>
          <option value="AIT-4">AIT-4</option>
          <option value="AIT-5">AIT-5</option>
          <option value="AIT-6">AIT-6</option>
          <option value="AIT-7">AIT-7</option>
          <option value="AIT-8">AIT-8</option>
          <option value="AIT-9">AIT-9</option>
          <option value="AIT-10">AIT-10</option>
        </select>
        <br />
        <br />

        <label htmlFor="trainerName">Trainer Name:</label>
        <input
          type="text"
          id="trainerName"
          name="trainerName"
          value={formData.trainerName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="sessionDate">Session Date:</label>
        <input
          type="date"
          id="sessionDate"
          name="sessionDate"
          value={formData.sessionDate}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          rows="4"
          cols="50"
          required
        ></textarea>
        <br />
        <br />

        <div
          className="spinner"
          style={{ display: isSubmitting ? "inline-block" : "none" }}
        ></div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default FeedbackForm;
