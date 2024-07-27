import React, { useState, useEffect } from 'react';
import Container from './Container';

// Define your navigation links here
const navLinks = [
  { href: '/about', label: 'About us' },
  { href: '/#services', label: 'Services' },
  { href: '/#projects', label: 'Use Cases' },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('navbar-default');

    // Check if navbar exists before adding event listeners
    if (navbar) {
      const toggleButton = document.querySelector('[data-collapse-toggle="navbar-default"]');
      const navLinks = navbar.querySelectorAll('a');

      if (toggleButton) {
        toggleButton.addEventListener('click', () => setIsMenuOpen(!isMenuOpen));
      } else {
        console.warn('Navbar toggle button not found. Toggle functionality might be affected.');
      }

      navLinks.forEach(link => link.addEventListener('click', () => setIsMenuOpen(false)));
    } else {
      console.warn("Navbar element with ID 'navbar-default' not found. Navigation functionality might be affected.");
    }
  }, [isMenuOpen]);

  return (
    <header className="mt-20">
      <nav className="w-full top-0 left-0 z-50 fixed bg-white">
        <Container>
          <div className="flex flex-wrap items-center justify-between mx-auto py-3">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/logo.png" className="h-12" alt="Logo" /> 
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className={`${isMenuOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    className="md:hidden px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"
                    href="https://github.com/manulthanura/Positivus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2 className="text-center text-xl font-normal leading-7">Request a quote</h2>
                  </a>
                </li>
              </ul>
            </div>
            <div className="hidden w-full md:block md:w-auto">
              <a
                className="px-9 py-5 rounded-2xl border border-zinc-900 bg-white hover:bg-black text-black hover:text-white inline-flex"
                href="https://www.instagram.com/direct/t/17847681566968084"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="text-center text-xl font-normal leading-7">Request a quote</h2>
              </a>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default NavBar;
