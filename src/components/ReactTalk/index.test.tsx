import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactTalk from './index';

test('renders ReactTalk Button', () => {
  render(<ReactTalk />);
  const btnElement = screen.getByText(/React/i);
  expect(btnElement).toBeInTheDocument();
});
