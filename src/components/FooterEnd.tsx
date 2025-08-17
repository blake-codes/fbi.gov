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

const Container = styled.div`
  width: 100%;
  background: #000;
  padding: 20px;
  font-size: 0.9em;
  display: flex;
  justify-content: center;
  z-index: 99;
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
    gap: 20px;
    text-align: center;
  }
`;

const Logo = styled.div`
  img {
    height: 65px;
    width: auto;
    object-fit: contain;

    @media (max-width: 480px) {
      height: 50px;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const AddressText = styled.div`
  white-space: nowrap;
  font-size: 0.85em;

  @media (max-width: 768px) {
    white-space: normal;
  }
`;

const Divider = styled.div`
  height: 24px;
  width: 1px;
  background-color: #fff;
  opacity: 0.3;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    background-color: #fff;
    color: #111;
    font-size: 1.5em;
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
`;

const FooterEnd: React.FC = () => {
  return (
    <Container>
      <Inner>
        <Logo>
          <img src="/assets/images/fbi-logo.webp" alt="fbi-logo" />
        </Logo>

        <RightSection>
          <AddressText>935 Pennsylvania Ave NW Washington DC 20535</AddressText>
          <Divider />
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
            <a href="#" aria-label="Email">
              <FaEnvelope />
            </a>
          </SocialIcons>
        </RightSection>
      </Inner>
    </Container>
  );
};

export default FooterEnd;
