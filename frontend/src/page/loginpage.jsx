import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send login request to the server
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.status === 404) {
      setError(data.message); // "User not found. Please sign up."
      setTimeout(() => navigate("/signup"), 2000); // Redirect to sign-up page after 2 seconds
    } else if (response.ok) {
      // Handle successful login
      alert("Login successful!");
      // Redirect to the landing page after successful login
      navigate("/"); // Navigate to the landing page
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#88BDBC] to-[#254E58]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-[#254E58] mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div className="flex items-center border-b-2 border-gray-200 py-2">
            <FaUserAlt className="text-[#254E58] mr-3" />
            <input
              type="text"
              name="username"
              placeholder="Username"
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
            Log In
          </button>
        </form>
        {/* Sign Up Link */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#254E58] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
