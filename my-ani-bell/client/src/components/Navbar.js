import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';


function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}
//i love andrea<3

export default Navbar;
