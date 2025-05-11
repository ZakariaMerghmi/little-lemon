import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import BookingPage from "../components/BookingPage";
import { BrowserRouter } from "react-router-dom";

test("renders the booking form", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  expect(screen.getByText(/book a table/i)).toBeInTheDocument(); // أو عدّله حسب النص الفعلي
});
