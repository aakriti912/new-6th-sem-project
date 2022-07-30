import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import Register from "./Register";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  return (
    <div className=" mt-20 flex justify-center ">
      <form
        className="w-[500px] h-[400px] pt-[50px] 
      bg-white rounded-xl shadow-xl "
        style={{
          boxShadow: "2px 2px 2px  2px gray",
        }}
      >
        <h1 className="flex items-center text-center justify-center text-xl font-bold text-[#6A91A0] pb-[40px]">
          Ncit NoteSewa
        </h1>
        <div className="mb-6 px-[30px] flex">
          <MdEmail className="block m-3 text-2xl  text-[#6A91A0] dark:text-gray-300" />
          <input
            type="email"
            id="email"
            className="w-[400px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@ncit.edu.com"
            required=""
          />
        </div>
        <div class="mb-6 px-[30px] flex">
          <RiLockPasswordFill className=" m-3 text-2xl  text-[#6A91A0] dark:text-gray-300" />
          <input
            type="password"
            id="password"
            class="bg-gray-50 w-[400px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
            placeholder="password.."
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              class=" mx-[40px] w-4 h-4  bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <label
            for="remember"
            class="ml-2  text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Remember me
          </label>
        </div>
        <Link to="/register">
          <button
            type="submit"
            class="text-white mx-[40px] bg-[#6A91A0] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
export default Login;
