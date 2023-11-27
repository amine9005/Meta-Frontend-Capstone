import React, { useReducer } from "react";
import HomePage from "../HomePage";
import BookingForm from "../BookingForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import ConfirmedBooking from "../ConfirmedPage";

const Main = () => {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push({ value: i + ":00" });
      }
      if (random() < 0.5) {
        result.push({ value: i + ":30" });
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };

  const initialState = fetchAPI(new Date());
  // console.log("initialState", initialState);

  function updateTimes(state, date) {
    return fetchAPI(new Date(date.type));
  }
  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking"
        element={
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        }
      />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
};

export default Main;
