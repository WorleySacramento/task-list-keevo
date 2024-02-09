import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './components/home/HomePage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Router>
     <Routes>
      <Route  path="/" Component={HomePage} />
        <Route path="/tasks" Component={App} />
        </Routes>
     </Router>
  </React.StrictMode>
);
