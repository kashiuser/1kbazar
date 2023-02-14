import React from "react";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import { useRouter } from "next/router";
function LoginPage() {
  const Router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const router = useRouter();
  const payload = {
    username: username,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://1kbazzar-api.moshimoshi.cloud/admin/login",
        payload
      );

      if (!response.data.error) {
        toast.success("Login successful!");

        console.log(response);
        router.push("/Dashboard");
      } else {
        console.error(response.data.error);
      }
    } catch (error) {
      console.error(error);
      toast.error("Try logining in with a differet crendentials");
    }
  };
  return (
    <div>
      <section className="bg-red-50 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 "
          >
            <img className="w-8 h-8 mr-2" src="/Logo.png" alt="logo" />
            BAZAR ADMIN PANEL
          </a>
          <div className="w-full bg-orange-50 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    for="username"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your username
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your username here"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text- hover:underline "
                  >
                    Forgot password?
                  </a>
                </div>
                {/* <Link href="/"> */}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full text-white bg-black mt-2 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
                {/* </Link> */}

                <p className="text-sm font-light text-gray-500 ">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline "
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
