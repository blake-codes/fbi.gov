import styled from "styled-components";

const FooterStyled = styled.footer`
  background: #000;
  color: #fff;
  padding: 60px 20px;
  font-size: 0.95rem;

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 40px;

    @media (max-width: 768px) {
      text-align: center;
      gap: 30px;
    }

    @media (max-width: 480px) {
      gap: 20px;
    }
  }

  .footer-column {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  .footer-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #bbbbbb;
  }

  .footer-links a {
    color: #3988ce;
    text-decoration: none;
    transition: color 0.3s;
    line-height: 1.5;

    &:hover {
      text-decoration: underline;
    }
  }

  .social-icons {
    display: flex;
    gap: 14px;
    font-size: 1.5rem;
    margin-top: 10px;
    justify-content: flex-start;

    a {
      color: #ccc;
      transition: color 0.3s;

      &:hover {
        color: #f5a623;
      }
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  }

  .membership-logos {
    display: flex;
    gap: 15px;
    margin-top: 15px;
    flex-wrap: wrap;

    img {
      width: 100px;
      filter: grayscale(80%);
      transition: filter 0.3s, transform 0.2s;

      &:hover {
        filter: grayscale(0%);
        transform: scale(1.05);
      }

      @media (max-width: 480px) {
        width: 80px;
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 40px;
    font-size: 0.85rem;
    opacity: 0.7;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <div className="footer-container">
        {/* Navigation Links */}
        <div className="footer-column footer-links">
          <h3 className="footer-title">Most Wanted</h3>
          <a href="/">Ten Most Wanted</a>
          <a href="/">Fugitives</a>
          <a href="/">Terrorism</a>
          <a href="/">Kidnappings / Missing Persons</a>
          <a href="/">Seeking Information</a>
          <a href="/">Bank Robbers</a>
          <a href="/">ECAP</a>
          <a href="/">ViCAP</a>
        </div>
        <div className="footer-column footer-links">
          <h3 className="footer-title">News</h3>
          <a href="/">Stories</a>
          <a href="/">Videos</a>
          <a href="/">Press Releases</a>
          <a href="/">Speeches</a>
          <a href="/">Testimony</a>
          <a href="/">Podcasts and Radio</a>
          <a href="/">Photos</a>
          <a href="/">Español</a>
          <a href="/">Apps</a>
        </div>
        <div className="footer-column footer-links">
          <h3 className="footer-title">What We Investigate</h3>
          <a href="/">Terrorism</a>
          <a href="/">Counterintelligence</a>
          <a href="/">Cyber Crime</a>
          <a href="/">Public Corruption</a>
          <a href="/">Civil Rights</a>
          <a href="/">Organized Crime</a>
          <a href="/">White-Collar Crime</a>
          <a href="/">Violent Crime</a>
          <a href="/">WMD</a>
        </div>
        <div className="footer-column footer-links">
          <h3 className="footer-title">Contact Us</h3>
          <a href="/">Field Offices</a>
          <a href="/">FBI Headquarters</a>
          <a href="/">Visit the FBI Experience</a>
          <a href="/">Overseas Offices</a>
        </div>
        <div className="footer-column footer-links">
          <h3 className="footer-title">FBI Jobs</h3>
          <a href="/">Submit a Tip</a>
          <a href="/">Crime Statistics</a>
          <a href="/">History</a>
          <a href="/">FOIPA</a>
          <a href="/">Scams & Safety</a>
          <a href="/">FBI Kids</a>
        </div>
        <div className="footer-column footer-links">
          <h3 className="footer-title">How We Can Help You</h3>
          <a href="/">Law Enforcement</a>
          <a href="/">Victims</a>
          <a href="/">Parents and Caregivers</a>
          <a href="/">Students</a>
          <a href="/">Businesses</a>
          <a href="/">Safety Resources</a>
          <a href="/">Need an FBI Service or More Information?</a>
        </div>
        <div className="footer-column footer-links">
          <h3 className="footer-title">About</h3>
          <a href="/">Mission & Priorities</a>
          <a href="/">Leadership & Structure</a>
          <a href="/">Partnerships</a>
          <a href="/">Community Outreach</a>
          <a href="/">FAQs</a>
        </div>

        <div className="footer-column footer-links">
          <h3 className="footer-title">Additional Resources</h3>
          <a href="/">Accessibility</a>
          <a href="/">eRulemaking</a>
          <a href="/">Freedom of Information / Privacy Act</a>
          <a href="/">Legal Notices</a>
          <a href="/">Legal Policies & Disclaimers</a>
          <a href="/">Privacy Policy</a>
          <a href="/">USA.gov</a>
          <a href="/">White House</a>
          <a href="/">Equal Opportunity</a>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
