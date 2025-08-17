import styled from "styled-components";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";
import { useAuth } from "../AuthContext";
import ChatBot from "../components/ChatBot";

const PageWrapper = styled.div`
  background-color: #f9f9f9;
  padding: 2rem 1rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  color: #337ab7;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: #337ab7;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: #333;
  line-height: 1.5;
`;

const HowWeCanHelpYou = () => {
  const { isAuthenticated, username } = useAuth();
  const sections = [
    {
      title: "Scams and Safety",
      description:
        "Getting educated and taking a few basic steps may keep you from becoming a victim of crime and fraud.",
      image: "/assets/images/how1.jpeg", // example
    },
    {
      title: "Victims",
      description:
        "The FBI is committed to ensuring that victims receive the rights they are entitled to and the assistance they need to cope with crime.",
      image: "/assets/images/how2.jpeg",
    },
    {
      title: "Outreach",
      description:
        "The Community Relations Unit and outreach specialists create and strengthen relationships with communities nationwide.",
      image: "/assets/images/how3.jpeg",
    },
    {
      title: "Parents, Caregivers, Teachers",
      description:
        "Get information on online and offline dangers and learn how to report child abductions and sexual exploitation.",
      image: "/assets/images/how4.jpeg",
    },
    {
      title: "Students",
      description:
        "It’s imperative that our young people learn the ins and outs of online safety from an early age.",
      image: "/assets/images/how5.jpeg",
    },
    {
      title: "Businesses",
      description:
        "The Office of Private Sector coordinates key outreach programs and fosters dialogue with private sector partners.",
      image: "/assets/images/how6.jpeg",
    },
    {
      title: "Law Enforcement",
      description:
        "Access online resources, partnerships, and support services for law enforcement agencies.",
      image: "/assets/images/how7.jpeg",
    },
    {
      title: "Congressional Affairs",
      description:
        "The Office of Congressional Affairs is the FBI’s primary liaison to Congress.",
      image: "/assets/images/how8.jpeg",
    },
    {
      title: "Active Shooter Safety Resources",
      description:
        "Protect schools, workplaces, and other public spaces from active shooters with FBI’s safety resources.",
      image: "/assets/images/how9.jpeg",
    },
    {
      title: "Crimes Aboard Aircraft",
      description:
        "The FBI investigates crimes committed aboard aircraft and related to air travel.",
      image: "/assets/images/how10.png",
    },
    {
      title: "Crimes Onboard Cruise Ships",
      description:
        "The FBI investigates serious crimes committed within the maritime and territorial jurisdiction of the United States.",
      image: "/assets/images/how11.png",
    },
  ];

  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />
      <PageWrapper>
        <SectionTitle>How We Can Help You</SectionTitle>
        <Grid>
          {sections.map((section, index) => (
            <Card key={index}>
              <CardImage src={section.image} alt={section.title} />
              <CardTitle>{section.title}</CardTitle>
              <CardDescription>{section.description}</CardDescription>
            </Card>
          ))}
        </Grid>
      </PageWrapper>
      {isAuthenticated && username !== "admin" && <ChatBot />}
      <Footer />
      <FooterEnd />
    </>
  );
};

export default HowWeCanHelpYou;
