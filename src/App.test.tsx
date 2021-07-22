import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

test('renders header links', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const todoElement = screen.getByText(/TODO List/i);
  expect(todoElement).toBeInTheDocument();
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});
