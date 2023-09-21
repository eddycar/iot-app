import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./assets/css/nucleo-icons.css";
//  import "react-notification-alert/dist/animate.css";  // no funciona en react 18  // alternativa react-notifications
import "./assets/scss/black-dashboard-pro-react.scss";
import "./assets/demo/demo.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
