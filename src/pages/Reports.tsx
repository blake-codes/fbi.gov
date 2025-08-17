import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopNav from "../components/TopNav";
import MidNav from "../components/MidNav";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import FooterEnd from "../components/FooterEnd";
import { useAuth } from "../AuthContext";

interface Report {
  _id: string;
  name: string;
  email: string;
  title: string;
  details: string;
}

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Gate: require login
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // Fetch all reports
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch(
          "https://fbi-server.onrender.com/api/users/reports"
        );
        if (!res.ok) throw new Error("Failed to fetch reports");
        const data: Report[] = await res.json();
        setReports(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  // Delete report
  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this report?")) return;

    try {
      const res = await fetch(
        `https://fbi-server.onrender.com/api/users/report/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete report");

      setReports((prev) => prev.filter((r) => r._id !== id));

      if (selectedReport?._id === id) {
        setSelectedReport(null);
      }
    } catch (err) {
      alert((err as Error).message);
    }
  };

  const openModal = (report: Report) => setSelectedReport(report);
  const closeModal = () => setSelectedReport(null);

  return (
    <>
      <TopNav />
      <MidNav />
      <Navbar />

      <Container>
        <Header>Reports</Header>
        <SectionTitle>All Reports</SectionTitle>

        {loading && <Message>Loading reports...</Message>}
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {!loading && !error && (
          <>
            {reports.length === 0 ? (
              <Message>No reports found.</Message>
            ) : (
              <TableWrapper>
                <Table>
                  <thead>
                    <tr>
                      <Th>SN</Th>
                      <Th>Name</Th>
                      <Th>Email</Th>
                      <Th>Title</Th>
                      <Th>Actions</Th>
                    </tr>
                  </thead>
                  <tbody>
                    {reports.map((r, index) => (
                      <tr key={r._id}>
                        <Td>{index + 1}</Td>
                        <Td>{r.name}</Td>
                        <Td>{r.email}</Td>
                        <TdTitle>{r.title}</TdTitle>
                        <Td>
                          <ButtonGroup>
                            <ViewButton onClick={() => openModal(r)}>
                              View
                            </ViewButton>
                            <DeleteButton onClick={() => handleDelete(r._id)}>
                              Delete
                            </DeleteButton>
                          </ButtonGroup>
                        </Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableWrapper>
            )}
          </>
        )}
      </Container>

      {/* Modal */}
      {selectedReport && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>Report Details</ModalTitle>
              <CloseButton onClick={closeModal} aria-label="Close modal">
                ×
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              <ModalRow>
                <LabelText>Name:</LabelText>
                <ValueText>{selectedReport.name}</ValueText>
              </ModalRow>
              <ModalRow>
                <LabelText>Email:</LabelText>
                <ValueText>{selectedReport.email}</ValueText>
              </ModalRow>
              <ModalRow>
                <LabelText>Title:</LabelText>
                <ValueText>{selectedReport.title}</ValueText>
              </ModalRow>
              <ModalRowCol>
                <LabelText>Details:</LabelText>
                <DetailsBox>{selectedReport.details}</DetailsBox>
              </ModalRowCol>
            </ModalBody>

            <ModalFooter>
              <DeleteButton onClick={() => handleDelete(selectedReport._id)}>
                Delete Report
              </DeleteButton>
              <PrimaryButton onClick={closeModal}>Close</PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}

      <Footer />
      <FooterEnd />
    </>
  );
};

export default Reports;

/* Styled Components */
const Container = styled.div`
  padding: 20px;
  background: white;
  min-height: 100vh;
`;

const Header = styled.h1`
  color: #2c3e50;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  font-size: 1.4rem;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    text-align: center;
  }
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

  thead tr {
    position: sticky;
    top: 0;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Th = styled.th`
  background: #34495e;
  color: white;
  padding: 10px;
  text-align: left;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const TdTitle = styled(Td)`
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 600px) {
    max-width: 180px;
  }
`;

const Message = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

const ErrorMessage = styled(Message)`
  color: red;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const ViewButton = styled.button`
  padding: 6px 12px;
  border: none;
  background: #3498db;
  color: white;
  font-size: 0.85rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #2980b9;
  }
`;

const DeleteButton = styled.button`
  padding: 6px 12px;
  border: none;
  background: #e74c3c;
  color: white;
  font-size: 0.85rem;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #c0392b;
  }
`;

/* Modal styles */
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 16px;
`;

const ModalContent = styled.div`
  width: 100%;
  max-width: 640px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (max-width: 480px) {
    max-width: 95%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
`;

const ModalTitle = styled.h3`
  margin: 0;
  color: #2c3e50;
  font-size: 1.25rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const CloseButton = styled.button`
  font-size: 1.5rem;
  line-height: 1;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 16px 20px;
`;

const ModalRow = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ModalRowCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
`;

const LabelText = styled.span`
  font-weight: 600;
  color: #555;
`;

const ValueText = styled.span`
  color: #222;
  word-break: break-word;
`;

const DetailsBox = styled.div`
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 12px;
  line-height: 1.45;
  color: #222;
  max-height: 300px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
`;

const ModalFooter = styled.div`
  padding: 14px 20px 18px 20px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: #0a3d62;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #07406a;
  }
`;
