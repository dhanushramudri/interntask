import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const navigate = useNavigate(); // Hook to perform navigation

  useEffect(() => {
    // If token exists in localStorage, redirect to home page
    const tokenFromStorage = localStorage.getItem("token");
    if (tokenFromStorage) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setLoginStatus("Login successful!");

        // Store the token in localStorage for future use
        localStorage.setItem("token", data.token);

        // Redirect to home page after successful login
        navigate("/");
      } else {
        setLoginStatus("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
      setLoginStatus("Error during login. Please try again.");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {token && <p>Token: {token}</p>}
      <p>{loginStatus}</p>
    </div>
  );
}

export default Login;
