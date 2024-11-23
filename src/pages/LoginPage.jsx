import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col bg-black/40 justify-center items-center shadow-[0_0_10px_1px_rgba(0,0,0,0.3)] 
      rounded-lg transition-shadow duration-100 py-10 max-w-xs lg:max-w-md w-full">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 font-mono text-primary uppercase">
          Culture
        </h1>
        <form className="grid gap-6 justify-center items-center w-full">
          <label className="w-full text-white">
            Email address
            <input
              type="email"
              name="email"
              placeholder="example@address.com"
              required
              className="border border-gray-300 text-black rounded-md p-2 w-full mt-1"
            />
          </label>
          <label className="w-full text-white">
            Password
            <input
              type="password"
              name="password"
              placeholder="Mypassword01"
              required
              className="border text-black border-gray-300 rounded-md p-2 w-full mt-1"
            />
          </label>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:text-black 
            w-full"
          >
            Login
          </button>
          <p className="flex justify-center text-gray-300">
            <span>Not a member?</span>
            <Link
              to="/signUp"
              className="bg-transparent ml-2 font-bold text-white hover:text-black"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
