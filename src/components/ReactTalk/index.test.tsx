import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactTalk from './index';
import { act } from 'react-dom/test-utils';

test('ReactTalk Button', () => {
  render(<ReactTalk />);
 
  const btnElement = screen.getByText(/React/i);
  expect(btnElement).toBeInTheDocument();

  act(() => {
    window.dispatchEvent(new CustomEvent('MootoolsTalk', {detail: 'Three'}));
  });

  expect(btnElement.innerHTML).toBe('Three');
});
