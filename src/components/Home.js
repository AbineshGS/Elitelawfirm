// src/components/Home.js
import React from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f8fa;
  min-height: 100vh;
  padding: 40px 20px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 20px;
  text-align: center;
`;

const Introduction = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 700px;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const ServiceSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 1000px;
  margin-bottom: 60px;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 300px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const ContactSection = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 40px 20px;
  width: 100%;
  text-align: center;
`;

const ContactHeading = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  font-size: 1.5rem;
`;

const ContactLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #f0a500;
  }
`;

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const AdvocateCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 300px;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AdvocateName = styled.h4`
  font-size: 1.6rem;
  color: #007bff;
  margin-bottom: 10px;
`;

const AdvocateTitle = styled.p`
  font-size: 1rem;
  color: #666;
`;

function Home() {
  return (
    <HomeContainer>
      <Heading>Welcome to Elite Law Firm</Heading>
      <Subheading>Your Trusted Legal Partners</Subheading>
      <Introduction>
        At Elite Law Firm, we specialize in a wide range of legal services, ensuring the best solutions for
        our clients. Our experienced team is here to assist with civil, criminal, banking, family disputes, and more.
        We aim to provide exceptional legal counsel and representation with a personalized approach.
      </Introduction>

      {/* Services Section */}
      <ServiceSection>
        <ServiceCard>
          <ServiceIcon>
            <FaPhone />
          </ServiceIcon>
          <ServiceTitle>Contact Us</ServiceTitle>
          <ServiceDescription>
            Reach out for any legal assistance or inquiries, and our team will be happy to assist.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon>
            <FaEnvelope />
          </ServiceIcon>
          <ServiceTitle>Email Us</ServiceTitle>
          <ServiceDescription>
            Send us an email for any legal consultation or advice you may need.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon>
            <FaMapMarkerAlt />
          </ServiceIcon>
          <ServiceTitle>Visit Us</ServiceTitle>
          <ServiceDescription>
            Our office is located at No 12, First Floor, Govindhasamy Nagar, Kandanchavadi, Chennai.
          </ServiceDescription>
        </ServiceCard>
      </ServiceSection>

      {/* Contact Section */}
      <ContactSection>
        <ContactHeading>Get in Touch</ContactHeading>
        <ContactLinks>
          <ContactLink href="tel:+917092455809">Call Us</ContactLink>
          <ContactLink href="mailto:elitelawfirm@gmail.com">Email Us</ContactLink>
          <ContactLink href="https://www.instagram.com/dharani_advoc" target="_blank" rel="noopener noreferrer">
            Instagram
          </ContactLink>
        </ContactLinks>
      </ContactSection>

      {/* About Section */}
      <AboutSection>
        <Heading>Meet Our Advocates</Heading>
        <AdvocateCard>
          <AdvocateName>V. Perinbamathu</AdvocateName>
          <AdvocateTitle>M.Com, LL.B. (Hons)<br />Commissioner of Oaths</AdvocateTitle>
        </AdvocateCard>

        <AdvocateCard>
          <AdvocateName>R. Dharani Dharan</AdvocateName>
          <AdvocateTitle>B.Com, LL.B. (Hons)<br />Advocate - High Court, Madras</AdvocateTitle>
        </AdvocateCard>
      </AboutSection>
    </HomeContainer>
  );
}

export default Home;
