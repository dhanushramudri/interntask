import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Products from "./Products";

function Home() {
  // Simulated authentication check using token
  const token = localStorage.getItem("token");

  if (!token) {
    // If the user is not authenticated, redirect to login
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Products />
    </>
  );
}

export default Home;
