"use client";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { store } from '@/store/store';
import React from 'react';
import { Provider } from 'react-redux';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className='fixed w-full z-50'>
        <Provider store={store}><Navbar /></Provider>
      </header>

      {/* Main Content */}
      <main className="flex-grow mt-10">
       <Provider store={store}>{children}</Provider>
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;