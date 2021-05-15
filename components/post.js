import { useState } from "react";

export default function PostForm({ onCreate }) {
  const initialValues = {
    post: "",
  };

  const [values, setValues] = useState(initialValues);

  function submitHandler(event) {
    event.preventDefault();
    onCreate(values);
    setValues(initialValues);
  }

  function inputChangeHandler(event) {
    let { name, value, type } = event.target;

    if (type === "number") {
      value = parseFloat(value);
    }

    setValues({ ...values, [name]: value });
  }

  return (
    <div className="my-4 mx-4 md:mx-16 lg:mx-16 xl:mx-16">
      <form onSubmit={submitHandler} className="">
        <textarea
          rows="7"
          name="post"
          id="post"
          value={values.post}
          onChange={inputChangeHandler}
          className="w-full bg-gray pl-3.5 text-base overflow-scroll"
          placeholder="What's On Your Mind?">
          </textarea>
        <div className="my-4 w-1/2 md:w-1/4 lg:w-1/3 xl:w-1/3 grid grid-cols-2 divide-x divide-gray-400">
          <button
            type="submit"
            className="h-8 px-2 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50"
          >
            Post It
          </button>

          <button
            className="h-8 px-2 text-base md:text-xl lg:text-xl xl:text-xl text-dark-blue hover:outline-none hover:ring-4 hover:ring-gray-600 hover:ring-opacity-50"
          >
            <a>Clear</a>
          </button>
        </div>
      </form>
    </div>
  );
}
