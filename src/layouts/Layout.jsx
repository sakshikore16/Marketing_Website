import React from 'react';
import "../styles/global.css";
import Navbar from '../components/Navbar';

const Layout = ({ title, children }) => {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Astro description" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>
        <meta
          name="description"
          content="A beautiful and functional landing page design created specifically for digital marketing agencies. With its clean and modern design, Positivus is the perfect template to showcase your agency's services and case studies to potential clients. Built with Astro and TailwindCSS"
        />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white font-SpaceGrotesk">
        <Navbar />
        {children}
      </body>
    </>
  );
};

export default Layout;
