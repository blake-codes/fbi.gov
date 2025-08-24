import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";
import styled from "styled-components";
import ChatBot from "../components/ChatBot";
import { useAuth } from "../AuthContext";

const AboutUs = () => {
  const { isAuthenticated, username } = useAuth();
  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />
      <PageWrapper>
        <Header>About Us</Header>
        <ContentWrapper>
          <Section>
            <SectionTitle>Who We Are</SectionTitle>
            <Paragraph>
              The Federal Bureau of Investigation (FBI) is the domestic
              intelligence and security service of the United States and its
              principal federal law enforcement agency. Our mission is to
              protect the American people and uphold the Constitution of the
              United States.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Our Mission</SectionTitle>
            <Paragraph>
              To protect and defend the United States against terrorist and
              foreign intelligence threats, to uphold and enforce the criminal
              laws of the United States, and to provide leadership and criminal
              justice services to federal, state, municipal, and international
              partners.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Our Core Values</SectionTitle>
            <StyledList>
              <li>Rigorous obedience to the Constitution</li>
              <li>Respect for the dignity of all those we protect</li>
              <li>Compassion</li>
              <li>Fairness</li>
              <li>Integrity</li>
              <li>Accountability</li>
              <li>Leadership</li>
              <li>Diversity</li>
            </StyledList>
          </Section>
          <Section>
            <SectionTitle>Contact Us</SectionTitle>
            <Paragraph>
              If you have questions, concerns, or tips, please visit our{" "}
              <strong>Contact</strong> page. <br />
              You can also reach out directly by emailing{" "}
              <a href="mailto:trackingnvestigationdept@gmail.com">
                tackingninvestigationdept@gmail.com
              </a>{" "}
              or by clicking the chat icon at the bottom right of this page.
            </Paragraph>
          </Section>
        </ContentWrapper>
      </PageWrapper>
      {isAuthenticated && username !== "admin" && <ChatBot />}
      <Footer />
      <FooterEnd />
    </>
  );
};

export default AboutUs;
const PageWrapper = styled.div`
  background-color: #f9f9f9;
  color: #000;
  padding: 10px 20px 60px 20px;
`;

const Header = styled.h1`
  font-size: 2.8rem;
  color: #337ab7;
  text-align: center;
  font-weight: bold;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Section = styled.section`
  background: #ffffff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: #337ab7;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledList = styled.ul`
  list-style: disc;
  padding-left: 1.5rem;

  li {
    font-size: 1.05rem;
    margin-bottom: 0.6rem;
    color: #333;
  }

  @media (max-width: 768px) {
    li {
      font-size: 1rem;
    }
  }
`;
