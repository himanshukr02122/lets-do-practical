"use client"

import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log("Login Data:", form);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 h-screen-minus-header flex items-center justify-center">
      <div className="w-full max-w-md border border-gray-300 rounded-xl p-6">
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600 dark:text-gray-400">
          Don’t have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p>
      </div>
    </section>
  );
};

export default Login;