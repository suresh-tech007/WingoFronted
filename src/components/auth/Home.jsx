import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex items-center absolute  z-50 w-full justify-center min-h-screen bg-blue-900 text-white">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Welcome to Tiranga Games</h1>
        <div className="space-x-4">
          <Link to="/register" className="bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Register</Link>
          <Link to="/login" className="bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
