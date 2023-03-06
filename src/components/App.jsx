import { Routes, Route } from 'react-router-dom';

import { Home } from './Home/Home';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};
