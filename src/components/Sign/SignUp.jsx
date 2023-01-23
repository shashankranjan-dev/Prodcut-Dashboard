import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

function SignUp() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log(user);

    axios
      .post("http://localhost:5000/api/user/register", user)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          Swal.fire({
            title: "Success!",
            text: "You have successfully signed up!",
            icon: "success",
            confirmButtonText: "Cool",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/");
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Please try again!",
            icon: "error",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: "Please try again!",
          icon: "error",
          confirmButtonText: "Cool",
        });
      });
  };

  return (
    <div class="bg-white ">
      <div class="flex justify-center h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          }}
        >
          <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-4xl font-bold text-white">Brand</h2>

              <p class="max-w-xl mt-3 text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="text-center">
              <img
                src="/circle-outline-svgrepo-com.svg"
                alt="logo"
                className="h-16 w-16 items-center justify-center mx-auto"
              />
              <h2 class="text-4xl font-bold text-center text-indigo-600">
                ClarityUI
              </h2>

              <p class="mt-3 font-medium text-gray-500 dark:text-gray-900">
                Sign in to access your account
              </p>
            </div>

            <div class="mt-8">
              <div>
                <div class="flex justify-between mb-2">
                  <label
                    for="password"
                    class="text-sm text-gray-600 dark:text-gray-900"
                  >
                    Name
                  </label>
                </div>

                <input
                  type="text"
                  name="password"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                  id="password"
                  placeholder="Username"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="mt-6">
                <label
                  for="email"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  placeholder="example@example.com"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label
                    for="password"
                    class="text-sm text-gray-600 dark:text-gray-900"
                  >
                    Password
                  </label>
                  <a
                    href="#!"
                    class="text-sm text-gray-800 focus:text-blue-500 hover:text-blue-500 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>

                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  placeholder="Your Password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-100 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="mt-6">
                <button
                  onClick={handleSignUp}
                  class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>

              <p class="mt-6 text-sm text-center text-gray-900">
                Don&#x27;t have an account yet?{" "}
                <Link
                  to="/"
                  class="text-blue-700 focus:outline-none focus:underline hover:underline"
                >
                  Sign In
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
