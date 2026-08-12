import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContactQuoteSection from './Components/Contact/ContactQuoteSection';
import RootLayout from './RootLayout';
import AppRoutes from "./AppRoutes.jsx";
import ScrollToTop from './ScrollToTop.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Main shell/navbar layout
    // errorElement: <NotFound />, // 404 handler
    children: [
      { path: '/contact', element: <ContactQuoteSection /> }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
