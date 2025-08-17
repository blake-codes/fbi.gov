import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";
import { AuthProvider } from "./AuthContext";
import Home from "./pages/ Home";

import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Messages from "./pages/Messages";
import MostWanted from "./pages/MostWanted";
import News from "./pages/News";
import WhatWeInvestigate from "./pages/WhatWeInvestigate";
import HowWeCanHelpYou from "./pages/HowWeCanHelpYou";
import MakeAReport from "./pages/MakeAReport";
import AboutUs from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/wanted" element={<MostWanted />} />
          <Route path="/news" element={<News />} />
          <Route path="/investigate" element={<WhatWeInvestigate />} />
          <Route path="/help" element={<HowWeCanHelpYou />} />
          <Route path="/login" element={<Login />} />
          <Route path="/report" element={<MakeAReport />} />
          <Route path="/register" element={<SignUp />} />

          <Route element={<ProtectedRoute redirectTo="/login" />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
          <Route
            element={<ProtectedRoute redirectTo="/" requireAdmin />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
