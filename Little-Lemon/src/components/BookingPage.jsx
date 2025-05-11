import React, { useState } from "react";
import { Link , useLocation} from "react-router-dom";
import TermsAndConditions from "./TermsAndConditions";
import { useEffect } from "react";

const BookingForm = () => {
  const location = useLocation();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: 1,
  });

  const [agreed, setAgreed] = useState(false);

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

    if (!agreed) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    if (isFormValid) {
      setSuccess(true);
    }
  };
  useEffect(() => {
    setSuccess(false);
    setFormData({
      name: "",
      date: "",
      time: "",
      guests: 1,
    });
    setAgreed(false);
  }, [location.pathname]); 
  return (
   

    <section className="flex flex-col justify-evenly items-center rounded-4xl min-h-screen bg-green-900  w-[40%] px-8 py-12">
       { !success ? <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-10 rounded-xl shadow-xl space-y-8"
        aria-label="Booking form"
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800">Reserve a Table</h2>

        {["name", "date", "time", "guests"].map((field, index) => (
          <div key={index} className="flex flex-col space-y-2">
            <label
              htmlFor={field}
              className="text-gray-700 font-medium capitalize"
            >
              {field === "guests" ? "Number of Guests" : field}
            </label>
            <input
              required
              type={field === "guests" ? "number" : field}
              name={field}
              id={field}
              min={field === "guests" ? "1" : undefined}
              max={field === "guests" ? "10" : undefined}
              value={formData[field]}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}

        <div className="flex justify-evently gap-3.5 space-x-3">
          <input
            type="checkbox"
            id="terms"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mt-1"
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the{" "}
            <Link to="/TermsAndConditions" className="text-blue-500 underline">
              Terms and Conditions
            </Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={!isFormValid || !agreed}
          className={`w-full py-3 rounded-lg text-white transition-all duration-300 ${
            isFormValid && agreed
              ? "bg-yellow-500 hover:scale-105 cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Save
        </button>
      </form> : <p className="text-white text-center">Reservation successful!</p>}
      
  
       <div className="flex flex-row justify-between gap-4 mt-10 w-full max-w-md">
        <Link to="/" className="w-full">
          <button className="w-full py-3 transition-all ease-in duration-300 bg-yellow-500 text-black rounded-lg shadow hover:bg-gray-100 hover:scale-105 cursor-pointer">
            Back to Home
          </button>
        </Link>
        <Link to="/OnlineMenu" className="w-full">
          <button  className="w-full py-3 bg-yellow-500 text-black rounded-lg shadow hover:bg-gray-100 transition-all ease-in duration-300 hover:scale-105 cursor-pointer">
            Online Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BookingForm;
