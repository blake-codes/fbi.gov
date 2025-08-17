import styled from "styled-components";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import { useEffect, useState } from "react";
import axios from "axios";
import FooterEnd from "../components/FooterEnd";
import ChatBot from "../components/ChatBot";
import { useAuth } from "../AuthContext";

const slides = [
  {
    title: "MOST WANTED",
    text: "Help us find fugitives and locate missing persons.",
    button: "Learn More",
    link: "/",
    background: "/assets/images/most-wanted.webp",
  },

  {
    title: "CRUSHING CARTELS VIOLENCE, TOGETHER",
    text: "FBI-DOD program enlists, equips international partners to help take the fight to cartels' home turf",
    button: "Full Story",
    link: "/",
    background: "/assets/images/toc-west-slider.webp",
  },

  {
    title: "MISSION FIRST",
    text: "To protect the American people and uphold the Constitution of the U.S.",
    button: "Learn More",
    link: "/",
    background: "/assets/images/director-background.webp",
  },

  {
    title: "TOP TEN FUGITIVE",
    text: "Help us find the former Olympian, who's accused of running a transnational criminal organization and orchestrating multiple murders",
    button: "Full Podcast",
    link: "/",
    background: "/assets/images/most-wanted-wedding-slider.webp",
  },
];

const HeroWrapper = styled.section`
  position: relative;
  height: 500px;
  overflow: hidden;
`;

const Slide = styled.div<{ background: string; active: boolean }>`
  position: absolute;
  inset: 0;
  background: ${({ background }) =>
    `url(${background}) center/cover no-repeat`};
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start; /* Align to the left */
  justify-content: center;
  padding: 2rem 4rem;
  color: white;
  text-align: left;
  transition: opacity 0.5s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }

  h1,
  p,
  button {
    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-shadow: none; /* No shadow */
    color: white;
  }

  p {
    font-size: 1.2rem;
    max-width: 700px;
    margin-bottom: 2rem;
    color: white;
  }

  button {
    background-color: transparent;
    color: white;
    border: 2px solid white;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s, color 0.3s;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;

    h1 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: #f8f8f8;
  text-align: center;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: #263f77;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-items: center;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ background: string }>`
  width: 100%;
  max-width: 250px;
  height: 300px;
  background: ${({ background }) =>
    `url(${background}) center/cover no-repeat`};
  border-radius: 12px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const CardName = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 1rem;
  color: white;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  position: absolute;
  bottom: 0;
`;

const BlueSection = styled.section`
  background-color: #204080;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const BlueSectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 3rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const BlueCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const BlueCard = styled.div`
  background: #204080;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s;
  color: white;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 60px;
  height: auto;
  object-fit: cover;
`;

const CardTitle = styled.div`
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #fddf00;
  }
`;

const leaders = [
  {
    name: "Director Kash Patel",
    image: "/assets/images/kash-patel.webp",
  },

  {
    name: "Deputy Director Dan Bongino",
    image: "/assets/images/dan-bongino.webp",
  },
  {
    name: "Leadership & Structure",
    image: "/assets/images/leadership.webp",
  },
  {
    name: "Mission & Priorities",
    image: "/assets/images/mission.webp",
  },
];

const features = [
  {
    title: "Apply for an FBI Job",
    image: "/assets/images/Apply-for-an-FBI-Job.webp",
  },
  { title: "Submit a Tip", image: "/assets/images/Submit-a-Tip.webp" },
  {
    title: "Help Find Fugitives & Missing Persons",
    image: "/assets/images/fugitives.webp",
  },

  {
    title: "Get a Rap Sheet (Identity History)",
    image: "/assets/images/Get-a-Rap-Sheet.webp",
  },
  { title: "Contact the FBI", image: "/assets/images/Contact-the-FBI.webp" },
  { title: "Find Crime Stats", image: "/assets/images/Find-Crime-Stats.webp" },
  {
    title: "Learn About Common Crimes & Scams",
    image: "/assets/images/crimes.webp",
  },
  {
    title: "Learn What the FBI Investigates",
    image: "/assets/images/fingerprint.webp",
  },
  {
    title: "Discover FBI History",
    image: "/assets/images/Discover-FBI-History.webp",
  },
];

const contents = [
  {
    name: "News",
    image: "/assets/images/fn.webp",
  },

  {
    name: "Podcasts",
    image: "/assets/images/fp.webp",
  },
  {
    name: "What We Investigate",
    image: "/assets/images/fw.webp",
  },
  {
    name: "Photos",
    image: "/assets/images/photos.webp",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isAuthenticated, username } = useAuth();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await axios.get(
          "https://fbi-server.onrender.com/api/auth/healthcheck"
        );
        console.log("Healthcheck successful:", response.data);
      } catch (error) {
        console.error("Healthcheck failed:", error);
      }
    };

    checkHealth();
  }, []);

  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />

      <HeroWrapper>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            background={slide.background}
            active={index === currentSlide}
          >
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
            <button onClick={() => (window.location.href = slide.link)}>
              {slide.button}
            </button>
          </Slide>
        ))}
      </HeroWrapper>
      <Section>
        <SectionTitle>Leadership | Mission | Priorities</SectionTitle>
        <CardGrid>
          {leaders.map((leader, index) => (
            <Card key={index} background={leader.image}>
              <CardName>{leader.name}</CardName>
            </Card>
          ))}
        </CardGrid>
      </Section>
      <BlueSection>
        <BlueSectionTitle>I Want To</BlueSectionTitle>
        <BlueCardGrid>
          {features.map((item, index) => (
            <BlueCard key={index}>
              <CardImage src={item.image} alt={item.title} />
              <CardTitle>{item.title}</CardTitle>
            </BlueCard>
          ))}
        </BlueCardGrid>
      </BlueSection>
      <Section>
        <SectionTitle>Featured Content</SectionTitle>
        <CardGrid>
          {contents.map((leader, index) => (
            <Card key={index} background={leader.image}>
              <CardName>{leader.name}</CardName>
            </Card>
          ))}
        </CardGrid>
      </Section>
      {isAuthenticated && username !== "admin" && <ChatBot />}
      <Footer />
      <FooterEnd />
    </>
  );
};

export default Home;
