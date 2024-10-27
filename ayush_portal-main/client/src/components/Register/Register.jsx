import React, { useState } from "react";
import "../../styles/Register.css";

function Register() {
  // State for form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  // State for storing validation or submission messages
  const [message, setMessage] = useState("");

  // Handle input changes for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (you can add more advanced validation or API calls)
    if (!formData.username || !formData.password || !formData.email) {
      setMessage("All fields are required.");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // For demonstration: you can replace this with an API call for actual registration
    setMessage(`Registration successful for ${formData.username}`);

    // You can also clear the form after submission
    setFormData({
      username: "",
      password: "",
      email: "",
    });
  };

  return (
    <div className="register">
      <h1>Register</h1>
      {message && <p>{message}</p>} {/* Display message */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;

