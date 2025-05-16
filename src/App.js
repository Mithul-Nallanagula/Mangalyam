import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import NavBarOnly from "./Components/Navbar";
import Footer from "./Components/Footer";
import theme from "./theme/theme"; // assuming you have a custom MUI theme
import ScrollToTop from "./Components/ScrollTop";


// Use lazy to load the pages only when they are needed
const Home = lazy(() => import("./Pages/Home"));
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
  const hideFooter = location.pathname === "/login" ||
    location.pathname === "/caste-religion-details" ||
    location.pathname === "/Addphotos" ||
    location.pathname === "/professional-details" ||
    location.pathname === "/reset-password" ||
    location.pathname === "/otp-verification" ||
    location.pathname === "/create-account" ||
    location.pathname === "/set-password" ||
    location.pathname === "/personal-details" ||
    location.pathname === "/profile-ready" ||
    location.pathname === "/plan" ||
    location.pathname === "/address-details";
   
    const hidenav2 = location.pathname==="/"  ||                     
location.pathname ==="/login"  ||               
location.pathname ==="/caste-religion-details"||
location.pathname ==="/Addphotos"   ||
location.pathname ==="/reset-password"  ||
location.pathname ==="/otp-verification"    ||
location.pathname ==="/careers"  ||      
location.pathname ==="/plan"||                  
location.pathname ==="/about" ||                
location.pathname ==="/professional-details"||  
location.pathname ==="/help"|| 
location.pathname ==="/personal-details"||      
location.pathname ==="/address-details"||
location.pathname ==="/create-account"||        
location.pathname ==="/profile-ready"||         
location.pathname ==="/set-password"; 


const  nav = location.pathname ==="/main"||
  location.pathname ==="/Match-page";
     
    
  return (
  
    <ThemeProvider theme={theme}>
      <ScrollToTop />
          
          {!hidenav2 && <Nav2 />}
     {!nav && <NavBarOnly />}
      <Suspense fallback={<div>Loading...</div>}> {/* Add a loading indicator */}
        <Routes>
          <Route path="/"                          element={<Home />} />
          <Route path="/login"                     element={<LoginPage />} />
          <Route path="/caste-religion-details"      element={<CasteReligionDetails />} />
          <Route path="/Addphotos"                    element={<AddPhotos />} />
          <Route path="//Match-page"                    element={<Matchpage />} />
          <Route path="/reset-password"               element={<ResetPassword />} />
          <Route path="/otp-verification"               element={<OTPVerification />} />
           <Route path="/main"               element={<Main />} />
          <Route path="/careers"                       element={<CareersPage />} />
          <Route path="/plan"                        element={<PricingPage />} />
          <Route path="/about"                       element={<AboutPage />} />
          <Route path="/professional-details"           element={<ProfessionalDetails />} />
          <Route path="/help"                          element={<Help />} />
          <Route path="/personal-details"           element={<PersonalDetails />} />
          <Route path="/address-details"          element={<AddressDetails />} />
          <Route path="/create-account"             element={<BasicDetails />} />
          <Route path="/set-password"              element={<SetPassword />} />
          <Route path="/profile-ready"            element={<ProfileReady />} />


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
                       