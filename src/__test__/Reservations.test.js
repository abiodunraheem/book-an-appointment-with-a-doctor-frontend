import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('App tests', () => {
  it('should contains the heading 1', () => {
    render(<App />);
    const heading = screen.getByText(/List of reservations/i);
    expect(heading).toBeInTheDocument();
  });
});
