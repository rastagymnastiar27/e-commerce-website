import React from "react";

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col bg-white/20 justify-center items-center shadow-[0_0_10px_1px_rgba(0,0,0,0.3)] rounded-lg transition-shadow duration-100 p-4 max-w-xs lg:max-w-md w-full">
        <h1 className="text-3xl lg:text-4xl font-bold mb-6 font-mono text-primary py-4 uppercase">Login Culture</h1>
        <form className="grid gap-3 justify-center items-center w-full">
          <label className="w-full">
            Email:
            <input
              type="email"
              name="email"
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <label className="w-full">
            Password:
            <input
              type="password"
              name="password"
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </label>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
          >
            Login
          </button>
          <button
            type="button"
            className="bg-transparent text-black py-2 px-4 rounded-md border-2 border-black mt-4 hover:bg-black hover:text-white w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
