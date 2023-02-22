import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

 //test(name,fn,setTimeout)
 //creating a virtual DOM of the app component using the render libary
 //screen object that contains queries to query the virtual DOM.E.g getBtText
 //CRA test and expect are from jest which are globally imported in react 
 //so its a combination of jest and RTL
 //matcher function .tobeInTHeDocument



test.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
