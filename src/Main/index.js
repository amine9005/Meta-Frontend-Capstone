import React from "react";
import HomePage from "../HomePage";
import BookingPage from "../BookingPage";
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  );
};

export default Main;
