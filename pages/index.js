import { useState } from "react";
import { getToken } from "../services/data-fetcher";
import LoginForm from "../components/login";

export default function Home() {
  const [token, setToken] = useState();

  const [username, setUsername] = useState("");

  async function loginHandler(values) {
    const fetchedToken = await getToken(values);

    setToken(fetchedToken);

    setUsername(values.username);
  }

  function logoutHandler() {
    setToken(null);
  }

  if (!token)
    return (
      <div className="">
        <LoginForm onSubmit={loginHandler} />
      </div>
    );

  return <Admin username={username} token={token} onLogout={logoutHandler} />;
}
