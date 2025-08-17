import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import FooterEnd from "../components/FooterEnd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 40px 20px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 450px;
  margin: 80px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 480px) {
    padding: 20px;
    margin: 60px auto;
    width: 90%;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  text-align: center;

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 22px;
    }
  }
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
  text-align: left;

  label {
    font-size: 14px;
    font-weight: 500;
    color: #555;
    margin-bottom: 6px;
    display: block;
  }

  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    transition: all 0.3s ease;

    &:focus {
      border-color: #0a3d62;
      box-shadow: 0 0 5px rgba(10, 61, 98, 0.2);
      outline: none;
    }
  }
`;

const PasswordInputWrapper = styled.div`
  position: relative;

  input {
    padding-right: 40px;
  }

  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #888;
    font-size: 18px;
    transition: color 0.3s ease;

    &:hover {
      color: #333;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  background-color: #0a3d62;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #07406a;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  background: #ffefef;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 14px;
  background: #eaffea;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;
`;

// SignUp Component
const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://fbi-server.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email: email.trim(),
            username: username.trim(),
            password: password.trim(),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to sign up");
      }

      toast.success("Account created successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
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
      <Container>
        <FormContainer>
          <StyledForm onSubmit={handleSignUp}>
            <h2>Create Account</h2>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {success && <SuccessMessage>{success}</SuccessMessage>}

            <InputGroup>
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <label>Password</label>
              <PasswordInputWrapper>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </PasswordInputWrapper>
            </InputGroup>

            <InputGroup>
              <label>Confirm Password</label>
              <PasswordInputWrapper>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={toggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </PasswordInputWrapper>
            </InputGroup>

            <Button type="submit" disabled={loading}>
              {loading ? "Creating account..." : "Sign Up"}
            </Button>
          </StyledForm>
        </FormContainer>
      </Container>

      <Footer />
      <FooterEnd />
    </>
  );
};

export default SignUp;
