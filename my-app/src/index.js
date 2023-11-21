<<<<<<< HEAD
<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
>>>>>>> Stashed changes
=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import { AppRoutes } from "./components/AppRoutes";

ReactDOM.render(
  <Router>
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  </Router>,
  document.getElementById("root")
>>>>>>> 87c53252ffb6d17601b351b7d6f95ab0d786c51b
);
