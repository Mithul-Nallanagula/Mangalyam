import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import NavBarOnly from "./Components/Navbar";
import Footer from "./Components/Footer";
import theme from "./theme/theme";
import ScrollToTop from "./Components/ScrollTop";

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home"));
const Chat = lazy(() => import("./Pages2/Chat.js"));
const Profile = lazy(() => import("./Pages2/Profile.js"));
const Matchpage = lazy(() => import("./Pages2/Matchpage.js"));
const Nav2 = lazy(() => import("./Components2/Navbar.js"));
const Main = lazy(() => import("./Pages2/Main"));
const LoginPage = lazy(() => import("./Pages/Login"));
const ResetPassword = lazy(() => import("./Pages/ResetPassWord"));
const OTPVerification = lazy(() => import("./Pages/Otp-Verification"));
const BasicDetails = lazy(() => import("./Pages/BasicDetails"));
const SetPassword = lazy(() => import("./Pages/Set-Password"));
const PersonalDetails = lazy(() => import("./Pages/Persolnaldetails"));
const CasteReligionDetails = lazy(() => import("./Pages/Caste"));
const ProfileReady = lazy(() => import("./Pages/Welcome"));
const CareersPage = lazy(() => import("./Pages/Carrer"));
const AboutPage = lazy(() => import("./Pages/Aboutpage"));
const ProfessionalDetails = lazy(() => import("./Pages/Professional.Details"));
const PricingPage = lazy(() => import("./Pages/Plan"));
const AddPhotos = lazy(() => import("./Pages/Photos"));
const Help = lazy(() => import("./Pages/Help"));
const AddressDetails = lazy(() => import("./Pages/Address"));

const App = () => {
  const location = useLocation();
  const lowerPath = location.pathname.toLowerCase();

  const hideFooterRoutes = [
    "/login",
    "/caste-religion-details",
    "/addphotos",
    "/professional-details",
    "/reset-password",
    "/otp-verification",
    "/create-account",
    "/set-password",
    "/chat",
    "/personal-details",
    "/profile-ready",
    "/plan",
    "/address-details",
  ];

  const hideNav2Routes = [
    "/",
    "/login",
    "/caste-religion-details",
    "/addphotos",
    "/reset-password",
    "/otp-verification",
    "/careers",
    "/plan",
    "/about",
    "/professional-details",
    "/help",
    "/personal-details",
    "/address-details",
    "/create-account",
    "/profile-ready",
    "/set-password",
  ];

  const navRoutes = ["/main", "/match-page", "/chat" , "/profile"];

  const hideFooter = hideFooterRoutes.includes(lowerPath);
  const hidenav2 = hideNav2Routes.includes(lowerPath);
  const nav = navRoutes.includes(lowerPath);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />

      {!hidenav2 && <Nav2 />}
      {!nav && <NavBarOnly />}

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/caste-religion-details" element={<CasteReligionDetails />} />
          <Route path="/addphotos" element={<AddPhotos />} />
          <Route path="/match-page" element={<Matchpage />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/main" element={<Main />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/plan" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/professional-details" element={<ProfessionalDetails />} />
          <Route path="/help" element={<Help />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/address-details" element={<AddressDetails />} />
          <Route path="/create-account" element={<BasicDetails />} />
          <Route path="/set-password" element={<SetPassword />} />
          <Route path="/profile-ready" element={<ProfileReady />} />
        </Routes>
      </Suspense>

      {!hideFooter && <Footer />}
    </ThemeProvider>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
