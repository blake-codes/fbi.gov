import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
// import ChatComponent from "../components/ChatComponent"; // later you'll plug in your chat here

interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
}

const UserDashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // You might want to fetch the logged-in user instead of all users
        const response = await fetch(
          "https://fbi-server.onrender.com/api/users/me"
        );
        if (!response.ok) throw new Error("Failed to fetch user");

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        {loading && <Message>Loading your dashboard...</Message>}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!loading && !error && user && (
          <>
            <Header>Welcome back, Agent {user.name}</Header>
            <SectionTitle>Mission Updates</SectionTitle>
            <Card>
              <p>
                🔎 You currently have <strong>2 pending investigations</strong>.
                Check your assignments for details.
              </p>
              <p>📌 Remember: All communications are monitored. Stay alert.</p>
            </Card>

            <ChatSupport>
              <p>Need assistance?</p>
              <ChatButton onClick={() => navigate("/chat")}>
                Open Secure Chat
              </ChatButton>
            </ChatSupport>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default UserDashboard;

/* Styled Components */
const Container = styled.div`
  padding: 20px;
  background: #f9f9f9;
  min-height: 100vh;
  margin-top: 90px;
`;

const Header = styled.h1`
  color: #2c3e50;
`;

const SectionTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
  color: #34495e;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const ChatSupport = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ChatButton = styled.button`
  padding: 10px 20px;
  background: #34495e;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #2c3e50;
  }
`;

const Message = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
`;

const ErrorMessage = styled(Message)`
  color: red;
`;
