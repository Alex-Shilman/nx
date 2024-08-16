import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Remote2 = React.lazy(() => import('remote-2/Module'));

const Remote1 = React.lazy(() => import('remote-1/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote-2">Remote2</Link>
        </li>
        <li>
          <Link to="/remote-1">Remote1</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host-shell" />} />
        <Route path="/remote-2" element={<Remote2 />} />
        <Route path="/remote-1" element={<Remote1 />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
