import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AnnouncementBar from './AnnouncementBar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-10">
        <Outlet />
      </main>
      <AnnouncementBar />
      <Footer />
    </>
  );
};

export default Layout;
