import React from 'react';
import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import BookingPage from '../components/BookingPage'

test('renders booking page heading', () => {
  render(<BookingPage />)
  const heading = screen.getByText(/booking/i)
  expect(heading).toBeInTheDocument()
})
