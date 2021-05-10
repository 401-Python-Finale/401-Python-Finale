import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm({ onSubmit }) {
  const initialValues = {
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);

  function submitHandler(event) {
    event.preventDefault();
    onSubmit(values);
    setValues(initialValues);
  }

  function inputChangeHandler(event) {
    let { name, value } = event.target;

    setValues({ ...values, [name]: value });
  }

  return (
    // Container div
    <div >
      <Head>
        <title>Log In</title>
        <link rel="icon" href="" />
      </Head>
        {/* <h2 className="text-5xl">Talk Dev to Me</h2> */}
      <div className="h-28">
        {/* Empty Div */}
      </div>

      {/* Inner Section with pic and form*/}
      <div className="flex">
        {/* Logo and Title section */}
        <div className="mx-32 w-1/3">
          <img src={"/static/images/tdtm_logo_words.png"} alt="our logo" class="" />
        </div>

        {/* Form Section */}
        <div className="flex-center w-1/3">
            <form onSubmit={submitHandler} className="mx-32 my-32">
              <label htmlFor="username" className="text-dark-blue flex-row text-lg" >User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                value={values.username}
                onChange={inputChangeHandler}
                placeholder=""
                className="mb-8 h-8 w-96 bg-gray-200 pl-3.5 text-sm"
              />

              <label htmlFor="password" className="text-dark-blue flex-row text-lg" >Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={values.password}
                onChange={inputChangeHandler}
                placeholder=""
                className="mb-4 h-8 w-96 bg-gray-200 pl-3.5 text-sm"
              />
              {/* Button Section */}
              <div className="grid grid-cols-2 divide-x divide-gray-400">
                <button type="submit" className=" h-10 text-lg text-dark-blue hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">
                  Log In
                </button>
                <Link href="signup" >
                  <a className="py-1.5 h-10 text-lg text-dark-blue text-center hover:outline-none hover:ring-2 hover:ring-gray-600 hover:ring-opacity-50">Sign Up</a>
                </Link>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
}
