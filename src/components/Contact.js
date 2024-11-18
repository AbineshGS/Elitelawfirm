// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f5f8fa;
  min-height: 100vh;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const ContactCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 500px;
  width: 100%;
  margin-bottom: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  font-size: 1rem;
  color: #555;

  svg {
    color: #007bff;
    margin-right: 15px;
    font-size: 1.5rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LocationLink = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background: #e0e0e0;
  margin: 20px 0;
  width: 100%;
`;

function Contact() {
  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>

      <ContactCard>
        <ContactItem>
          <FaPhone />
          <div>
            <a href="tel:+917092455809">70924 55809</a>
            <br />
            <a href="tel:+918608008116">86080 08116</a>
          </div>
        </ContactItem>

        <Divider />

        <ContactItem>
          <FaEnvelope />
          <a href="mailto:elitelawfirm@gmail.com">elitelawfirm@gmail.com</a>
        </ContactItem>

        <Divider />

        <ContactItem>
          <FaInstagram />
          <a href="https://www.instagram.com/dharani_advoc" target="_blank" rel="noopener noreferrer">
            dharani_advoc
          </a>
        </ContactItem>

        <Divider />

        <ContactItem>
          <FaMapMarkerAlt />
          <LocationLink
            href="https://www.google.com/maps/search/?api=1&query=No+12+First+Floor+Govindhasamy+Nagar+Kandanchavadi+Chennai+600096"
            target="_blank"
            rel="noopener noreferrer"
          >
            No 12, First Floor, Govindhasamy Nagar, Kandanchavadi, Chennai - 600096
          </LocationLink>
        </ContactItem>
      </ContactCard>
    </ContactContainer>
  );
}

export default Contact;
