// src/components/AboutUs.js
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f8f9fc;
  min-height: 100vh;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #555;
  max-width: 700px;
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AdvocateCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AdvocateName = styled.h3`
  font-size: 1.6rem;
  color: #007bff;
  margin: 15px 0 5px;
`;

const AdvocateTitle = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`;

function AboutUs() {
  return (
    <AboutContainer>
      <Heading>About Us</Heading>
      <Description>
        Our law firm is committed to providing comprehensive legal services to our clients with integrity,
        professionalism, and dedication. Led by experienced advocates, we specialize in a range of legal matters,
        from civil cases to corporate disputes. With a commitment to excellence, our team ensures that each case is
        handled with utmost care and precision.
      </Description>

      <CardContainer>
        <AdvocateCard>
          <AdvocateName>V. Perinbamathu</AdvocateName>
          <AdvocateTitle>M.Com, LL.B. (Hons)<br />Commissioner of Oaths</AdvocateTitle>
        </AdvocateCard>

        <AdvocateCard>
          <AdvocateName>R. Dharani Dharan</AdvocateName>
          <AdvocateTitle>B.Com, LL.B. (Hons)<br />Advocate - High Court, Madras</AdvocateTitle>
        </AdvocateCard>
      </CardContainer>
    </AboutContainer>
  );
}

export default AboutUs;
