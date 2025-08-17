import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";
import MidNav from "../components/MidNav";
import TopNav from "../components/TopNav";
import Navbar from "../components/NavBar";
import styled from "styled-components";
import { useAuth } from "../AuthContext";
import ChatBot from "../components/ChatBot";

const News = () => {
  const { isAuthenticated, username } = useAuth();
  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />
      <Main>
        <Header>
          <h1>FBI News & Press Releases</h1>
          <p>
            Stay informed with the latest updates from the Federal Bureau of
            Investigation.
          </p>
        </Header>

        <NewsGrid>
          {newsData.map((news, index) => (
            <Card key={index}>
              <img src={news.image} alt={news.title} />
              <div className="info">
                <span className="date">{news.date}</span>
                <h3>{news.title}</h3>
                <p>{news.summary}</p>
              </div>
            </Card>
          ))}
        </NewsGrid>

        <More>
          <button>View All News</button>
        </More>
      </Main>
      {isAuthenticated && username !== "admin" && <ChatBot />}
      <Footer />
      <FooterEnd />
    </>
  );
};

export default News;

// Styled Components

const Main = styled.main`
  padding: 4rem 5%;
  background-color: #f0f4f8;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    color: #337ab7;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: #444;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.5;
  }
`;

const NewsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const Card = styled.article`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-6px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;

    @media (max-width: 500px) {
      height: 160px;
    }
  }

  .info {
    padding: 1rem 1.2rem;

    .date {
      display: block;
      font-size: 0.85rem;
      color: #888;
      margin-bottom: 0.4rem;
    }

    h3 {
      font-size: 1.2rem;
      color: #337ab7;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.95rem;
      color: #444;
      line-height: 1.5;
    }
  }
`;

const More = styled.div`
  text-align: center;
  margin-top: 3rem;

  button {
    background-color: #003087;
    color: #ffffff;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #001d5c;
    }
  }
`;

// Sample News Data

const newsData = [
  {
    title: "FBI Releases 2024 Crime Data Report",
    summary:
      "The FBI published new crime statistics for 2024, highlighting trends in violent and property crime across the U.S.",
    image: "/assets/images/news1.webp",
    date: "July 15, 2025",
  },
  {
    title: "FBI Cracks Major Cyber Crime Network",
    summary:
      "A coordinated effort has dismantled an international group responsible for ransomware attacks targeting U.S. infrastructure.",
    image: "https://www.fbi.gov/image-repository/cyber-crime.jpg",
    date: "July 8, 2025",
  },
  {
    title: "Public Alert: Ongoing Financial Fraud Scheme",
    summary:
      "The FBI warns of a widespread financial scam targeting elderly citizens, urging the public to remain vigilant.",
    image: "/assets/images/news2.webp",
    date: "June 29, 2025",
  },
  {
    title: "Joint Task Force Arrests Organized Crime Leaders",
    summary:
      "Federal agents and local law enforcement have arrested key figures in an organized crime ring operating in major U.S. cities.",
    image: "/assets/images/news3.webp",
    date: "June 20, 2025",
  },
];
