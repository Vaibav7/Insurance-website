import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if email already exists before submitting form
      const emailResponse = await fetch("http://localhost:5000/api/check-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });

      if (!emailResponse.ok) {
        const errorMessage = await emailResponse.text();
        console.error("Error checking email:", errorMessage);
        setError(`Error checking email: ${errorMessage}`);
        return;
      }

      const emailData = await emailResponse.json();
      if (emailData.exists) {
        setError("Email already exists. Please log in.");
        return;
      }

      // Proceed to sign up if email doesn't exist
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        console.error("Error during sign-up:", data.message || "Unknown error");
        setError(data.message || "Sign-Up failed");
      } else {
        alert("Account created successfully!");
        // Redirect to the login page after successful sign-up
        navigate("/signin");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#88BDBC] to-[#254E58]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-[#254E58] mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="flex items-center border-b-2 border-gray-200 py-2">
            <FaUser className="text-[#254E58] mr-3" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full focus:outline-none text-gray-700"
              onChange={handleChange}
              required
            />
          </div>
          {/* Email */}
          <div className="flex items-center border-b-2 border-gray-200 py-2">
            <FaEnvelope className="text-[#254E58] mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full focus:outline-none text-gray-700"
              onChange={handleChange}
              required
            />
          </div>
          {/* Password */}
          <div className="flex items-center border-b-2 border-gray-200 py-2">
            <FaLock className="text-[#254E58] mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full focus:outline-none text-gray-700"
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#254E58] hover:bg-[#112D32] text-white py-2 rounded-lg transition duration-300"
          >
            Create Account
          </button>
        </form>
        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-[#254E58] hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignupPage;
