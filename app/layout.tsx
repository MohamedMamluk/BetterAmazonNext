'use client';

import '../styles/globals.css';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import StateProvider from './components/StateProvider';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <StateProvider>
          <main className='flex '>
            <Sidenav />
            <div className='w-full'>
              <Header />
              {children}
            </div>
          </main>
        </StateProvider>
      </body>
    </html>
  );
}
