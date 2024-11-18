// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 1.2rem 2rem;
  background-color: #007bff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  text-decoration: none;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 100vh;
    background-color: #007bff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: left 0.3s ease;
    z-index: 999;
  }
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f0a500;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo as={Link} to="/">Elite Law Firm</Logo>
      <NavMenu open={menuOpen}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </NavMenu>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
    </HeaderContainer>
  );
};

export default Header;
