// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #007bff;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f0a500;
  }
`;

const FooterIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  font-size: 1.4rem;
  justify-content: center;

  a {
    color: #fff;
    transition: color 0.3s ease;

    &:hover {
      color: #f0a500;
    }
  }
`;

const FooterInfo = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>Elite Law Firm</Logo>
        
        <FooterLinks>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About</FooterLink>
          <FooterLink to="/services">Services</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterLinks>
        
        <FooterInfo>
          <p><FaPhoneAlt /> 70924 55809, 86080 08116</p>
          <p><FaEnvelope /> elitelawfirm@gmail.com</p>
          <p><FaMapMarkerAlt /> No 12, First Floor, Govindhasamy Nagar, Kandanchavadi, Chennai - 600096</p>
        </FooterInfo>
        
        <FooterIcons>
          <a href="https://www.instagram.com/dharani_advoc" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:elitelawfirm@gmail.com">
            <FaEnvelope />
          </a>
        </FooterIcons>
      </FooterContent>
      
      <p style={{ marginTop: "1.5rem", fontSize: "0.85rem" }}>
        &copy; {new Date().getFullYear()} Elite Law Firm. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;