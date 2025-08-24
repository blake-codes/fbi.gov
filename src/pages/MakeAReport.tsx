import { useEffect, useState } from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";
import { useAuth } from "../AuthContext";
import { Link } from "react-router-dom";
import ChatBot from "../components/ChatBot";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MakeAReport = () => {
  const { isAuthenticated, username } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    details: "",
  });

  useEffect(() => {
    if (!isAuthenticated) {
      setShowModal(true);
    }
  }, [isAuthenticated]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(
        "https://fbi-server.onrender.com/api/users/report",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to submit report");

      toast.success("Report submitted successfully!");
      setFormData({ name: "", email: "", title: "", details: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />
      <ToastContainer position="top-right" autoClose={3000} />
      {isAuthenticated ? (
        <Container>
          <Heading>Make a Report</Heading>
          <SubText>
            If you have been a victim of fraud or have information about a scam,
            please file your report below. Your cooperation is important for our
            investigation.
          </SubText>

          <PaymentNote>
            ⚠️ Please note: Before an investigation can begin, you will be
            required to make a payment of{" "}
            <strong>10% of the amount you were scammed</strong>. This is a
            mandatory processing fee to initiate your case.
            <br />
            💳 Payment can also be made in installments for your convenience.
            <br />
            📞 For further questions or clarifications, please contact our
            customer service team.
          </PaymentNote>

          <Form onSubmit={handleSubmit}>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={formData.name} onChange={handleChange} />

            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />

            <Label htmlFor="subject">Subject</Label>
            <Input id="title" value={formData.title} onChange={handleChange} />

            <Label htmlFor="details">Report Details</Label>
            <TextArea
              id="details"
              rows={6}
              value={formData.details}
              onChange={handleChange}
            />

            <SubmitButton type="submit" disabled={loading}>
              {loading ? " Submitting Report..." : " Submit Report"}
            </SubmitButton>
          </Form>
        </Container>
      ) : (
        showModal && (
          <ModalOverlay>
            <ModalContent>
              <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
              <h2>You must be logged in to make a report</h2>
              <p>Please log in or create an account to continue.</p>
              <div className="actions">
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/register">Sign Up</StyledLink>
              </div>
            </ModalContent>
          </ModalOverlay>
        )
      )}
      {isAuthenticated && username !== "admin" && <ChatBot />}
      <Footer />
      <FooterEnd />
    </>
  );
};

export const Container = styled.div`
  padding: 10px 20px 60px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  color: #337ab7;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #444;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1rem;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #0a3d62;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: #07406a;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 400px;
  position: relative;

  h2 {
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    margin-bottom: 1.5rem;
    color: #555;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

export const StyledLink = styled(Link)`
  padding: 0.7rem 1.2rem;
  background-color: #0a3d62;
  color: white;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #07406a;
  }
`;

export const PaymentNote = styled.div`
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  line-height: 1.5;

  strong {
    color: #000;
  }
`;

export default MakeAReport;
