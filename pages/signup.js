import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

export default function SignUpForm() {
  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);

  function onSubmit(event) {
    event.preventDefault();
    const values = {
      fname: event.target.fname.value,
      lname: event.target.lname.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    };

    setValues({ ...values, value });
  }

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
    <div className="">
      <Head>
        <title>Sign Up</title>
        <link rel="icon" href="" />
      </Head>
      {/* <Header title="Talk Dev to Me" /> */}
      <form onSubmit={submitHandler} className="">
        <div className="">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            name="fname"
            id="fname"
            required
            value={values.fname}
            onChange={inputChangeHandler}
            placeholder="First Name"
            className=""
          />
        </div>

        <div className="">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            name="lname"
            id="lname"
            required
            value={values.lname}
            onChange={inputChangeHandler}
            placeholder="Last Name"
            className=""
          />
        </div>

        <div className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={values.email}
            onChange={inputChangeHandler}
            placeholder="email"
            className=""
          />
        </div>

        <div className="">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            value={values.username}
            onChange={inputChangeHandler}
            placeholder="User Name"
            className=""
          />
        </div>

        <div className="">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={values.password}
            onChange={inputChangeHandler}
            placeholder="password"
            className=""
          />
        </div>

        <button type="submit" className="">
          Sign Up
        </button>
      </form>
      <Link href="about" className="">
        Meet the Makers
      </Link>
      <div className="h-24"></div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
