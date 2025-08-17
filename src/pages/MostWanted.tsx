import styled from "styled-components";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";
import { useAuth } from "../AuthContext";
import ChatBot from "../components/ChatBot";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  color: #337ab7;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const Heading = styled.h1`
  font-size: 2.5em;
  color: #337ab7;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 2em;
    margin-bottom: 24px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const Card = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;

    @media (max-width: 480px) {
      aspect-ratio: 3 / 2;
    }
  }

  div {
    padding: 16px;

    h3 {
      font-size: 1.1em;
      font-weight: bold;
      margin-bottom: 8px;
      color: #002244;
    }

    p {
      font-size: 0.9em;
      color: #0055aa;
    }
  }
`;

const Section = styled.section`
  margin-top: 60px;

  @media (max-width: 480px) {
    margin-top: 40px;
  }
`;

const SubHeading = styled.h2`
  font-size: 2em;
  font-weight: 700;
  color: #337ab7;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const HighlightBox = styled.div`
  background-color: #f0f8ff;
  border-left: 5px solid #337ab7;
  padding: 20px;
  border-radius: 8px;

  h3 {
    font-weight: bold;
    font-size: 1.2em;
    color: #002244;
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95em;
    color: #337ab7;
    margin-bottom: 10px;
  }
`;

const InfoGrid = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;

  h4 {
    font-size: 1em;
    font-weight: 600;
    color: #002244;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      font-size: 0.9em;
      color: #0055aa;
      margin-bottom: 6px;
    }
  }
`;

const MostWanted = () => {
  const { isAuthenticated, username } = useAuth();
  const wantedList = [
    {
      name: "OMAR ALEXANDER CARDENAS",
      category: "Ten Most Wanted Fugitives",
      image: "/assets/images/w1.webp",
    },
    {
      name: "MUHAMMAD AHMED AL-MUNAWAR",
      category: "Most Wanted Terrorists",
      image: "/assets/images/w2.webp",
    },
    {
      name: "RENE F. RAMIREZ",
      category: "Crimes Against Children",
      image: "/assets/images/w3.webp",
    },
    {
      name: "DANNY LIGGETT",
      category: "Violent Crimes - Murders",
      image: "/assets/images/w4.jpeg",
    },
    {
      name: "MAYUSHI BHAGAT",
      category: "Kidnappings & Missing Persons",
      image: "/assets/images/w5.webp",
    },
    {
      name: "STEVEN EUGENE CLIFFORD",
      category: "Additional Violent Crimes",
      image: "/assets/images/w6.webp",
    },
    {
      name: "EDUARDO CARVAJAL",
      category: "Criminal Enterprise Investigations",
      image: "/assets/images/w7.jpeg",
    },
    {
      name: "ZHYKIERRA ZHANE GUY",
      category: "Seeking Information",
      image: "/assets/images/w8.webp",
    },
  ];

  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />

      <Container>
        <Heading>Most Wanted</Heading>

        <Grid>
          {wantedList.map((person, index) => (
            <Card key={index}>
              <img src={person.image} alt={person.name} />
              <div>
                <h3>{person.name}</h3>
                <p>{person.category}</p>
              </div>
            </Card>
          ))}
        </Grid>

        <Section>
          <SubHeading>Case of the Week</SubHeading>
          <HighlightBox>
            <h3>JOETTE "JOJO" MALONE</h3>
            <p>
              The FBI's Indianapolis Field Office and Hammond Police Department
              in Indiana are seeking the public’s help identifying those
              responsible for the murder of Joette "JoJo" Malone on July 29,
              2020.
            </p>
            <p>
              JoJo, just 2 years old, was in the back seat of her mother’s
              vehicle when she was tragically shot at approximately 9:30 p.m.
            </p>
          </HighlightBox>
        </Section>

        <Section>
          <SubHeading>More FBI Topics & Services</SubHeading>
          <InfoGrid>
            <div>
              <h4>Categories</h4>
              <ul>
                <li>Ten Most Wanted</li>
                <li>Fugitives</li>
                <li>Terrorism</li>
                <li>Kidnappings / Missing Persons</li>
                <li>Seeking Information</li>
                <li>Bank Robbers</li>
                <li>ECAP</li>
                <li>ViCAP</li>
              </ul>
            </div>

            <div>
              <h4>Resources</h4>
              <ul>
                <li>FBI Jobs</li>
                <li>Submit a Tip</li>
                <li>Crime Statistics</li>
                <li>History</li>
                <li>FOIPA</li>
                <li>Scams & Safety</li>
                <li>FBI Kids</li>
              </ul>
            </div>

            <div>
              <h4>News & Media</h4>
              <ul>
                <li>Stories</li>
                <li>Videos</li>
                <li>Press Releases</li>
                <li>Speeches</li>
                <li>Testimony</li>
                <li>Podcasts and Radio</li>
                <li>Photos</li>
              </ul>
            </div>

            <div>
              <h4>More Info</h4>
              <ul>
                <li>Law Enforcement</li>
                <li>Victims</li>
                <li>Parents and Caregivers</li>
                <li>Students</li>
                <li>Businesses</li>
                <li>Safety Resources</li>
              </ul>
            </div>
          </InfoGrid>
        </Section>
      </Container>
      {isAuthenticated && username !== "admin" && <ChatBot />}
      <Footer />
      <FooterEnd />
    </>
  );
};

export default MostWanted;
