import React from "react";
import Home from "./Home";
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import '../styles.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
          {/* <Route
            path="*"
            element={
              <div style={{ padding: "1rem" }}>
                <p>There is nothing here!</p>
              </div>
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
