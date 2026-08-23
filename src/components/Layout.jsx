import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[72px] lg:pt-[84px] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
