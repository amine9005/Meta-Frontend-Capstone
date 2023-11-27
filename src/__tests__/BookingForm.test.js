import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingForm from "../BookingForm";

const initializeTimes = [
  { value: "17:00", name: "17:00" },
  { value: "18:00", name: "18:00" },
  { value: "19:00", name: "19:00" },
  { value: "20:00", name: "20:00" },
  { value: "21:00", name: "21:00" },
  { value: "22:00", name: "22:00" },
];

test("Render the background Heading", () => {
  render(<BookingForm availableTimes={initializeTimes} />);
  const headingElement = screen.getByText("Book Now!");
  expect(headingElement).toBeTruthy();
});
