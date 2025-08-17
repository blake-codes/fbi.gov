import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  background: #000;
  padding: 12px 20px;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  z-index: 99;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Logo = styled.div`
  img {
    height: 60px;
    width: auto;
    object-fit: contain;

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;

  a {
    background-color: #fff;
    color: #111;
    font-size: 1.2em;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    transition: background 0.2s;

    &:hover {
      background-color: #ddd;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const SearchBox = styled.input`
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  height: 32px;
  font-size: 0.9em;
  outline: none;
  width: 180px;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 250px;
  }
`;

const SearchButton = styled.button`
  padding: 7px 10px;
  border: 2px solid #fff;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

const MidNav: React.FC = () => {
  return (
    <Container>
      <Inner>
        {/* Logo */}
        <Logo>
          <img src="/assets/images/fbi-logo.webp" alt="fbi-logo" />
        </Logo>

        {/* Social Icons */}
        <SocialIcons>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <FaXTwitter />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Message">
            <FaEnvelope />
          </a>
        </SocialIcons>

        {/* Search */}
        <SearchContainer>
          <SearchBox type="text" placeholder="Search FBI" />
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchContainer>
      </Inner>
    </Container>
  );
};

export default MidNav;
