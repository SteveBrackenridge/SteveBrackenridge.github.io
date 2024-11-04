import React from 'react';
import Header from './Header';
import Footer from './Footer';
import App from './App';

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <App />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;