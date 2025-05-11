import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import TermsAndConditions from './components/TermsAndConditions';
import OnlineMenu from './components/OnlineMenu';

function App() {
  return (
    <div className="absolute left-0 top-0 p-0 m-0 grid grid-rows-[auto_1fr_auto] min-h-screen min-w-screen gap-12">

      {/* Nav */}
      <Nav />

      {/* Main */}
      <main className="h-full px-4 py-12 space-y-6 flex flex-col items-center justify-center bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Booking" element={<BookingPage />} />
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          <Route path="/OnlineMenu" element={<OnlineMenu/>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 flex flex-row justify-around items-center p-6 mt-10 text-white">
        <div className="w-1/3 flex flex-col  items-center gap-3 text-center ">
          <img src="/logo.png" alt="" className="w-[50%] " />
          <p>
            We are a family owned Mediterranean restaurant <br />
            focused on traditional recipes served <br />
            with a modern twist.
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-center gap-3 text-center">
          <h2>Location: Munich</h2>
          <p>&copy; 2025 All rights reserved</p>
        </div>

        <div className="w-1/3 flex flex-col items-center gap-2 text-center">
          <p>Contact us:</p>
          <p>+1 234 567 890</p>
          <p><a href="mailto:support@example.com">support@example.com</a></p>
        </div>
      </footer>

    </div>
  );
}

export default App;

