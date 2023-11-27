import React, { useReducer } from "react";
import HomePage from "../HomePage";
import BookingForm from "../BookingForm";
import { Route, Routes } from "react-router-dom";

const updateTimes = (state, action) => {
  // if(action.type === "dateX") return {availableTimes:state.availableTimes}
  console.log(state);
  return state;
};
const initializeTimes = [
  { value: "17:00", name: "17:00" },
  { value: "18:00", name: "18:00" },
  { value: "19:00", name: "19:00" },
  { value: "20:00", name: "20:00" },
  { value: "21:00", name: "21:00" },
  { value: "22:00", name: "22:00" },
];

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking"
        element={
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        }
      />
    </Routes>
  );
};

export default Main;
