import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.date !== "" &&
    formData.time !== "" &&
    formData.guests >= 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      alert("Form submitted!");
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-full bg-gray-400">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 mx-auto mt-6 border w-[40%] bg-white rounded shadow-md p-4"
        aria-label="Booking form"
      >
        <h2 className="text-xl font-semibold text-center">Reserve a Table</h2>

        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 w-full m-2"
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            required
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <input
            required
            type="time"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="guests">Number of Guests</label>
          <input
            required
            type="number"
            name="guests"
            id="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            className="border p-2 w-full"
          />
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          aria-label="Submit booking form"
          className={`px-4 py-2 rounded text-white ${
            isFormValid ? "bg-green-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default BookingForm;
