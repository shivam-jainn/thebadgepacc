import React from 'react';
import UsernameNav from '@/components/usernameNav';

export default function Layout({ children }) {

  return (
    <>

        <UsernameNav />
        <main className="container flex-grow px-6 pt-4 mx-auto max-w-7xl">
          {children}
        </main>
    </>
  );
}
