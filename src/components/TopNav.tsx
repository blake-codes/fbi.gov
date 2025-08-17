import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #111;
  padding: 8px 20px;
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
  color: #fff;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 4px;
  }
`;

const TextWithLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 5px;

  img {
    height: 10px;
    width: 20px;
    object-fit: contain;
  }
`;

const Text = styled.span`
  text-decoration: underline;
  text-decoration-color: white;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    color: grey;
  }
`;

const RightInner = styled.span`
  color: grey;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: underline;
  text-decoration-color: grey;
`;

const Arrow = styled.span`
  font-size: 0.7em;
  cursor: pointer;
  color: grey;
`;

const TopNav: React.FC = () => {
  return (
    <Container>
      <Inner>
        <TextWithLogo>
          <Logo>
            <img src="/assets/images/us-flag.png" alt="us-logo" />
          </Logo>
          <Text>An official website of the United States government.</Text>
        </TextWithLogo>
        <RightInner>Here's how you know</RightInner>
        <Arrow>▼</Arrow>
      </Inner>
    </Container>
  );
};

export default TopNav;
