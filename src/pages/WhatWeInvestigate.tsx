import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";
import styled from "styled-components";
import { useAuth } from "../AuthContext";
import ChatBot from "../components/ChatBot";

const Main = styled.main`
  padding: 3rem 2rem;
  background-color: #f8f9fa;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #337ab7;
  margin-bottom: 2rem;
  text-align: center;
`;

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #337ab7;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #333;
  text-align: center;
`;

const investigations = [
  {
    title: "Terrorism",
    description:
      "To counter terrorism, the FBI's top investigative priority, we use our investigative and intelligence capabilities to neutralize domestic extremists and help dismantle terrorist networks worldwide.",
    image: "/assets/images/inv1.webp",
  },
  {
    title: "Violent Crime",
    description:
      "The FBI, with its law enforcement partners, plays a key role in combating violent crime involving gangs, crimes against children, crimes in Indian Country, fugitives and missing persons, kidnappings, and bank robberies.",
    image: "/assets/images/inv2.webp",
  },
  {
    title: "Cybercrime",
    description:
      "The FBI is the lead federal agency for investigating cyberattacks by criminals, overseas adversaries, and terrorists. The threat is incredibly serious—and growing.",
    image: "/assets/images/inv3.webp",
  },
  {
    title: "Transnational Organized Crime",
    description:
      "The FBI is dedicated to eliminating transnational organized crime groups that pose the greatest threat to the national and economic security of the United States.",
    image: "/assets/images/inv4.webp",
  },
  {
    title: "Counterintelligence",
    description:
      "The FBI is the lead agency for exposing, preventing, and investigating intelligence activities, including espionage, in the U.S.",
    image: "/assets/images/ci.webp",
  },
  {
    title: "Weapons of Mass Destruction",
    description:
      "The WMD Directorate investigates and works to prevent incidents involving nuclear, radiological, biological, or chemical weapons.",
    image: "/assets/images/inv6.webp",
  },
  {
    title: "Civil Rights",
    description:
      "The FBI, the lead agency for enforcing civil rights law, investigates hate crime, color of law abuses, human trafficking, and clinic access violations.",
    image: "/assets/images/inv7.jpeg",
  },
  {
    title: "Public Corruption",
    description:
      "Public corruption is the FBI’s top criminal investigative priority, including border corruption, election crimes, and prison corruption.",
    image: "/assets/images/inv8.webp",
  },
  {
    title: "White-Collar Crime",
    description:
      "White-collar crimes can destroy companies, wipe out savings, cost billions, and erode public trust in institutions.",
    image: "/assets/images/inv9.webp",
  },
];

const WhatWeInvestigate = () => {
  const { isAuthenticated, username } = useAuth();
  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />
      <Main>
        <Header>What We Investigate</Header>
        <Grid>
          {investigations.map((item, index) => (
            <Card key={index}>
              <Image src={item.image} alt={item.title} />
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Card>
          ))}
        </Grid>
      </Main>
      {isAuthenticated && username !== "admin" && <ChatBot />}
      <Footer />
      <FooterEnd />
    </>
  );
};

export default WhatWeInvestigate;
