import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-gray-800 h-full w-full">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

      <p className="mb-4">
        By using our booking system, you agree to abide by the following terms
        and conditions. Please read them carefully before submitting your
        reservation.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Booking Policy</h2>
      <p className="mb-4">
        All reservations are subject to availability. Please ensure all
        information provided is accurate.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Cancellation Policy</h2>
      <p className="mb-4">
        You may cancel your booking up to 24 hours in advance. Late cancellations
        may not be eligible for a refund.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Privacy</h2>
      <p className="mb-4">
        Your personal information will be handled in accordance with our privacy
        policy and will not be shared without your consent.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Agreement</h2>
      <p className="mb-4">
        By clicking "Submit", you agree to the above terms and confirm that all
        details provided are correct to the best of your knowledge.
      </p>

      <p className="mt-8">
        If you have any questions, please contact us at{" "}
        <a href="mailto:support@example.com" className="text-blue-500 underline">
          support@example.com
        </a>.
      </p>
    </section>
  );
};

export default TermsAndConditions;
