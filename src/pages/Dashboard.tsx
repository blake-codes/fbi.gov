import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import FooterEnd from "../components/FooterEnd";

interface User {
  _id: string;
  name: string;
  email: string;
  username: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://fbi-server.onrender.com/api/users"
        );
        if (!response.ok) throw new Error("Failed to fetch users");

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Delete user
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await fetch(
        `https://fbi-server.onrender.com/api/users/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete user");
      }

      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch (err) {
      alert((err as Error).message);
    }
  };

  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />
      <Container>
        <Header>Dashboard</Header>
        <SectionTitle>All Users</SectionTitle>

        {loading && <Message>Loading users...</Message>}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!loading && !error && (
          <TableWrapper>
            <Table>
              <thead>
                <tr>
                  <Th>SN</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Username</Th>
                  <Th>Actions</Th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <Td>{index + 1}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.username}</Td>
                    <Td>
                      <DeleteButton onClick={() => handleDelete(user._id)}>
                        Delete
                      </DeleteButton>
                    </Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableWrapper>
        )}
      </Container>
      <Footer />
      <FooterEnd />
    </>
  );
};

export default Dashboard;

/* Styled Components */
const Container = styled.div`
  padding: 20px;
  background: white;
  min-height: 100vh;
`;

const Header = styled.h1`
  color: #2c3e50;
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  margin-top: 15px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background: #34495e;
  color: white;
  padding: 10px;
  text-align: left;
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const Message = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
`;

const ErrorMessage = styled(Message)`
  color: red;
`;

const DeleteButton = styled.button`
  background: #e74c3c;
  border: none;
  color: white;
  padding: 6px 12px;
  font-size: 0.9rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #c0392b;
  }
`;
