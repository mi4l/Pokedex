import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>Hello world</h1>;



createRoot(document.getElementById('HelloWorld') as Element).render(<App />);