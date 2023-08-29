import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Profile from "./Profile";
import UserProvider from "./UserProvider";

const AppContent = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const handleSuccessfulAuth = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
    navigate("/profile");
  };

  return (
    <>
      {isLoginOpen && (
        <Modal onClose={() => setLoginOpen(false)}>
          <LoginForm onLogin={handleSuccessfulAuth} />
        </Modal>
      )}

      {isRegisterOpen && (
        <Modal onClose={() => setRegisterOpen(false)}>
          <RegisterForm onRegister={handleSuccessfulAuth} />
        </Modal>
      )}

      <AppWrapper>
        <Header
          onLoginClick={() => {
            setLoginOpen(true);
          }}
          onRegisterClick={() => {
            setRegisterOpen(true);
          }}
        />

        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/header" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>404: Oops!</h1>} />
          </Routes>
        </Main>
        <Footer
          onRegisterClick={() => {
            setRegisterOpen(true);
          }}
        />
      </AppWrapper>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <AppContent />
      </UserProvider>
    </BrowserRouter>
  );
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px; // Max width to ensure content doesn't stretch too much on large screens.
  margin: 0 auto; // Center the app content on larger screens.
`;

const Main = styled.div`
  flex: 1;
  background-color: green;
  padding: 0rem; // Give the content inside some space.
  @media (max-width: 768px) {
    padding: 0; // Reduce padding for smaller screens.
  }
`;

export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////
/*import styled from "styled-components";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import HomePage from "./HomePage";
import Footer from "./Footer";
import Header from "./Header";
import Contact from "./Contact";
import About from "./About";
import Profile from "./Profile";

const AppContent = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  const handleSuccessfulAuth = () => {
    setLoginOpen(false);
    setRegisterOpen(false);
    navigate("/profile");
  };

  return (
    <>
      {isLoginOpen && (
        <Modal onClose={() => setLoginOpen(false)}>
          <LoginForm onLogin={handleSuccessfulAuth} />
        </Modal>
      )}

      {isRegisterOpen && (
        <Modal onClose={() => setRegisterOpen(false)}>
          <RegisterForm onRegister={handleSuccessfulAuth} />
        </Modal>
      )}

      <AppWrapper>
        <Header
          onLoginClick={() => {
            setLoginOpen(true);
          }}
          onRegisterClick={() => {
            setRegisterOpen(true);
          }}
        />

        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/header" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>404: Oops!</h1>} />
          </Routes>
        </Main>
        <Footer />
      </AppWrapper>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
  background-color: green;
`;

export default App;*/
