import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const Search = () => <h1>Search</h1>;

const Identify = () => <h1>Identify</h1>;

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/identify">Identify</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={Search} />
        <Route path="/search" Component={Search} />
        <Route path="/identify" Component={Identify} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('HelloWorld') as Element).render(<App />);