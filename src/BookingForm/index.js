import React, { useState } from "react";
import bookingImg from "../Assets/imgs/booking.jpg";
import "./index.scss";

const BookingForm = (props) => {
  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const updateDate = (e) => {
    setResDate(e.target.value);
    props.dispatch({ type: e.target.value });
    console.log("New State", props.availableTimes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  return (
    <div className="container-booking">
      <img className="booking-img" src={bookingImg} alt="book now" />
      <h1 className="title">Book Now!</h1>
      <div className="booking-form">
        <form onSubmit={handleSubmit}>
          <div className="form-columns">
            <label htmlFor="res-date">Choose Date</label>
            <input
              type="date"
              id="res-date"
              value={resDate}
              onChange={updateDate}
              required
            />
          </div>
          <div className="form-columns">
            <label htmlFor="res-time">Choose Time</label>
            <select
              id="res-time "
              value={resTime}
              onChange={(e) => setResTime(e.target.value)}
              required
            >
              {props.availableTimes.map
                ? props.availableTimes.map((avTime) => (
                    <option value={avTime.value} key={avTime.value}>
                      {avTime.value}
                    </option>
                  ))
                : console.log("props: ", props.availableTimes)}
            </select>
          </div>

          <div className="form-columns">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            ></input>
          </div>

          <div className="form-columns">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
          </div>
          <div className="submit-columns">
            <input type="submit" value="Make Your reservation"></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
