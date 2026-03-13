import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FluidCanvas from './FluidCanvas';

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="flex-grow relative min-h-screen">
        {/* The fluid canvas runs globally behind the pages */}
        <FluidCanvas />
        <div className="relative z-10 w-full h-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}


