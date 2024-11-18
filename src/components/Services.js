// src/components/Services.js
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  max-width: 120px;
  height: auto;
  margin-right: 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const ServiceContent = styled.div`
  flex: 1;

  h3 {
    margin: 0 0 10px;
  }

  p {
    margin: 0;
    color: #555;
  }
`;

const services = [
  {
    title: "Civil Matters",
    description: "Handling non-criminal legal disputes, including property issues, contract disputes, and personal injury cases.",
    image: "/images/civil-matters.jpg"
  },
  {
    title: "Criminal Matters",
    description: "Defending clients against criminal charges and navigating the criminal justice process to safeguard their rights.",
    image: "/images/criminal-matters.jpg"
  },
  {
    title: "Banking Disputes",
    description: "Resolving conflicts related to loans, mortgages, account discrepancies, and other financial services.",
    image: "/images/banking-disputes.jpg"
  },
  {
    title: "Family Disputes",
    description: "Assisting with divorce, child custody, alimony, and other family-related legal issues.",
    image: "/images/family-disputes.jpg"
  },
  {
    title: "Appeal Matters",
    description: "Helping clients file appeals in higher courts to challenge unfavorable decisions or verdicts.",
    image: "/images/appeal-matters.jpg"
  },
  {
    title: "Taxation Issues",
    description: "Providing counsel on tax disputes, compliance, and negotiations with tax authorities.",
    image: "/images/taxation-issues.jpg"
  },
  {
    title: "Intellectual Property Disputes",
    description: "Protecting clients' intellectual property rights in cases of copyright, patent, and trademark infringement.",
    image: "/images/intellectual-property.jpg"
  },
  {
    title: "Accident Claims",
    description: "Assisting individuals in claiming compensation for injuries sustained in accidents due to negligence.",
    image: "/images/accident-claims.jpg"
  },
  {
    title: "Arbitration",
    description: "Offering alternative dispute resolution services to settle conflicts outside of court efficiently and confidentially.",
    image: "/images/arbitration.jpg"
  },
  {
    title: "Legal Opinion for Property",
    description: "Providing expert legal advice on property transactions, title verification, and related matters.",
    image: "/images/legal-opinion.jpg"
  }
];

function Services() {
  return (
    <ServicesContainer>
      <h2>Our Services</h2>
      {services.map((service, index) => (
        <ServiceCard key={index}>
          <ServiceImage src={service.image} alt={service.title} />
          <ServiceContent>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </ServiceContent>
        </ServiceCard>
      ))}
    </ServicesContainer>
  );
}

export default Services;
