import React from 'react';

import { BrowserRouter, Form, Link, Route, Routes } from 'react-router-dom';
import { logo } from './assets';

import { Home, CreatePost } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="sm:p-8 px-4 py-8 w-full">
        <header
          className="max-w-7xl mx-auto flex justify-between items-center bg-[#linear-gradient(
    97.86deg,
    hsla(17, 95%, 50%, 1) 0%,
    hsla(42, 94%, 57%, 1) 53.65%,
    hsla(17, 95%, 50%, 1) 100%
  );]
    "
        >
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </Link>
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#252422] text-white px-4 py-2 rounded-sm"
          >
            Create
          </Link>
        </header>
      </nav>
      <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
