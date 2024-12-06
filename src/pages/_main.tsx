import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './home';
import Landing from './landing';
import UserStats from './userStats';


function PrivateRoute({ element }) {
  const authToken = localStorage.getItem("token");
  if (!authToken) {
    return <Navigate to="/" replace />;
  }
  return element;
}


const Main = () => (
  <BrowserRouter>
    <Suspense fallback={<div />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/userstats" element={<UserStats />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Main;
