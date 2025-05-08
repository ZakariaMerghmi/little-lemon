import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <div className='absolute left-0 top-0 p-0 m-0 grid grid-rows-[auto_1fr] min-h-screen min-w-screen'>
      <Nav />
      <main className='p-6' aria-label="Main content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Booking" element={<BookingPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
