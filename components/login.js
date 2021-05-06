import Header from "../components/header";
import Head from "next/head";
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
    <div>
      <Head>
        <title>Log In</title>
        <link rel="icon" href="" />
        {/* from https://css-tricks.com/emojis-as-favicons/ */}
      </Head>
      <Header title="Talk Dev to Me" />
      <form onSubmit={submitHandler} className="">
        <div className="">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            id="username"
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
            value={values.password}
            onChange={inputChangeHandler}
            placeholder="password"
            className=""
          />
        </div>

        <button type="submit" className="">
          Sign In
        </button>
      </form>
    </div>
  );
}
