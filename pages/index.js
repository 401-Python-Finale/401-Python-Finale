import { useState } from "react";
import { getToken } from "../services/data-fetcher";
import Home from "./home";
import LoginForm from "../components/login";
import Footer from "../components/footer";

export default function LandingPage() {
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
        <div className="">
          <LoginForm onSubmit={loginHandler} />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    );

  return <Home username={username} token={token} onLogout={logoutHandler} />;
}
