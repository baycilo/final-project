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
import BookSession from "./BookSession";
import Confirmation from "./Confirmation";

const AppContent = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

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
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
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
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/booksession" element={<BookSession />} />
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
  max-width: 1200px;
  margin: 0 auto;
`;

const Main = styled.div`
  flex: 1;
  background-color: ;
  padding: 0rem;
  @media (max-width: 768px) {
    padding: 0;
  }
`;

export default App;
