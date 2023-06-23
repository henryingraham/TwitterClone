import React from "react";
import Home from "./Home";
import { AuthProvider } from '../context/AuthContext';
import '../styles.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Home />
      </div>
    </AuthProvider>
  );
}

export default App;
