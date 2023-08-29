import styled from "styled-components";
import React, { useState } from "react";
import RegisterModal from "./RegisterModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />

      <MainWrapper>
        <ImageDiv openModal={openModal}>
          <Image1 src="images/image12.jpg" alt="Fitness Activity" />
          <HeroContent>
            <HeroTitle>
              Transform Your Fitness Journey
              <br />
              with Star Fitness Club!
            </HeroTitle>
            <Button onClick={openModal}>Start Your Free Class</Button>
          </HeroContent>
        </ImageDiv>

        <BriefIntro>
          <p>
            Star Fitness Club is dedicated to transforming your fitness journey.
            <br />
            Join us and explore our wide range of services and tailored
            experiences.
          </p>
        </BriefIntro>

        <ServicesOverview>
          <ServiceItem>
            <ServiceText>
              <h2>Online Video Classes</h2>
              <p>Access our comprehensive classes anytime, anywhere. </p>
            </ServiceText>
            <ServiceImage src="images/image10.jpg" alt="Fitness Activity" />
          </ServiceItem>
          <ServiceItem>
            <ServiceText>
              <h2>Free Online Fitness Videos</h2>
              <p>
                No subscription? No problem! Register now and Dive into our
                expert-led Fitness Videos
              </p>
            </ServiceText>
            <ServiceImage src="images/image13.jpg" alt="Fitness Activity" />
          </ServiceItem>
          <ServiceItem>
            <ServiceText openModal={openModal}>
              <h2>Personal Fitness Training</h2>
              <p>
                Your personal fitness guide awaits you.
                <Button onClick={openModal}>Request a Personal Trainer</Button>
              </p>
            </ServiceText>
            <ServiceImage src="images/image15.jpg" alt="Fitness Activity" />
          </ServiceItem>
          <ServiceItem>
            <ServiceText>
              <h2>Online Fitness Counseling</h2>
              <p>
                Seek advice from fitness experts.{" "}
                <Button onClick={openModal}>Book a Session</Button>
              </p>
            </ServiceText>
            <ServiceImage src="images/image17.jpg" alt="Fitness Activity" />
          </ServiceItem>
        </ServicesOverview>

        <Testimonials>
          <h2>What Our Members Say</h2>

          <TestimonialItem>
            <TestimonialQuote>
              “Star Fitness Club has transformed my life! The online classes are
              so convenient, and the trainers are super knowledgeable.”
            </TestimonialQuote>
            <TestimonialAuthor>
              - Alex Thompson, Member since 2020
            </TestimonialAuthor>
          </TestimonialItem>

          <TestimonialItem>
            <TestimonialQuote>
              “The personal training sessions were a game-changer for me. I've
              achieved goals I never thought possible. Thank you, Star Fitness!”
            </TestimonialQuote>
            <TestimonialAuthor>
              - Mia Williams, Member since 2019
            </TestimonialAuthor>
          </TestimonialItem>

          <TestimonialItem>
            <TestimonialQuote>
              “I love the variety of free fitness videos. It keeps me motivated
              and I can workout whenever I want. Highly recommended!”
            </TestimonialQuote>
            <TestimonialAuthor>
              - Raj Patel, Member since 2021
            </TestimonialAuthor>
          </TestimonialItem>
        </Testimonials>

        <NewsletterSignUp>
          <NewsletterDescription>
            Stay updated with the latest fitness tips, videos, and more. Sign up
            for our newsletter now!
          </NewsletterDescription>
          <NewsletterForm>
            <EmailInput type="email" placeholder="Enter your email" />
            <SubscribeButton>Subscribe</SubscribeButton>
          </NewsletterForm>
        </NewsletterSignUp>
      </MainWrapper>
    </>
  );
};

// I'm defining the new styled components based on your previous definitions:

const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
};

const MainWrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #ffffff;
  width: 100%;
  padding: 0rem;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0rem;
  }
`;

const ImageDiv = styled.div`
  position: relative; // Makes it a position context for its children
  display: flex; // Enable flexbox for centering
  height: 580px;
  justify-content: center; // Center children horizontally
  align-items: center; // Center children vertically
  overflow: hidden; // Hide overflow in case Image1 goes out of bounds
`;

const Image1 = styled.img`
  width: 100%;
  height: auto; // Adjust to maintain aspect ratio
  object-fit: cover; // Cover the container without breaking aspect ratio
  position: absolute; // Position it absolute to the ImageDiv
  top: 0;
  left: 0;
  z-index: 1; // Ensure it stays below the text and button
`;

const HeroContent = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 1.5rem; // Decrease for mobile

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const BriefIntro = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #40e0d0;
  border-radius: 10px;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;

  p {
    font-size: 1.4rem; // Slightly bigger font for emphasis
    font-weight: 600; // Semi-bold for emphasis
    letter-spacing: 0.5px; // Slight letter-spacing for better clarity
    color: #000000; // Consider using a dark shade instead of pure black for a softer appearance
  }
`;

const ServicesOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr; // One column for mobile
  gap: 2rem;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e9e9e9;
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); // Adds a subtle zoom effect on hover
  }
`;

const ServiceText = styled.div`
  flex: 1; // To ensure it takes up as much space as possible before the image
  margin-bottom: 1rem;

  a {
    text-decoration: none; // Remove the underline
    color: red;

    &:hover {
      color: darkblue; // Color when the link is hovered over
      text-decoration: underline; // Optionally add the underline back on hover
    }
  }

  p {
    font-size: 1rem;
    line-height: 1.5; // Increased line height for better readability
    color: #333333; // A softer black to reduce contrast and fatigue
  }
`;

const ServiceImage = styled.img`
  max-width: 100%; // Ensures the image never goes out of the container
  max-height: 250px; // This makes the image significantly bigger. Adjust as per the actual image's aspect ratio or desired look.
  border-radius: 10px; // Same border-radius as its container for consistency
  align-self: center;
`;

const Testimonials = styled.section`
  background-color: #000000;
  color: #ffffff;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const NewsletterSignUp = styled.section`
  text-align: center;
  background-color: #e5e5e5;
  margin-top: 2rem;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const Button = styled.button`
  font-size: 1rem; // Smaller for mobile

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
  z-index: 2; // Ensure it's above the image
  padding: 1rem 2rem; // Padding for better appearance
  border: none; // No border
  border-radius: 10px; // Rounded edges
  color: white; // Text color
  background-color: #ff5733; // Some contrasting color (Change as per your theme)
  cursor: pointer; // Hand cursor on hover
  margin-top: 2rem; // Space it out from the paragraph
  transition: background-color 0.3s; // Smooth color transition on hover

  &:hover {
    background-color: #ff7849; // Slightly lighter shade on hover
  }
`;

const TestimonialItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  color: #000000;
  margin: 1rem 0;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 1rem 2rem;
  }
`;

const TestimonialQuote = styled.p`
  font-style: italic;
  color: #000000;
  font-size: 1.2rem; // Increase the size to emphasize the testimonial
  line-height: 1.4;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  text-align: right;
`;

const NewsletterDescription = styled.p`
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 500; // Make it slightly bold
  color: #555555;
`;

const NewsletterForm = styled.form`
  flex-direction: column; // Stack for mobile

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const EmailInput = styled.input`
  margin-bottom: 1rem; // Space for mobile

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
  }
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubscribeButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7849;
  }
`;

export default HomePage;

/*
import styled from "styled-components";

const HomePage = () => {
  return (
    <MainWrapper>
      <ImageDiv>
        <Image1 src="images/image12.jpg" alt="Fitness Activity" />
        <HeroContent>
          <HeroTitle>
            Transform Your Fitness Journey
            <br />
            with Star Fitness Club!
          </HeroTitle>
          <Button>Start Your Free Class</Button>
        </HeroContent>
      </ImageDiv>

      <BriefIntro>
        <p>
          Star Fitness Club is dedicated to transforming your fitness journey.
          <br />
          Join us and explore our wide range of services and tailored
          experiences.
        </p>
      </BriefIntro>

      <ServicesOverview>
        <ServiceItem>
          <ServiceText>
            <h2>Online Video Classes</h2>
            <p>
              Access our comprehensive classes anytime, anywhere.{" "}
              <a href="/">View Class Schedule</a>
            </p>
          </ServiceText>
          <ServiceImage src="images/image10.jpg" alt="Fitness Activity" />
        </ServiceItem>
        <ServiceItem>
          <ServiceText>
            <h2>Free Online Fitness Videos</h2>
            <p>
              No subscription? No problem! Dive into our expert-led{" "}
              <a href="/">Fitness Videos</a>.
            </p>
          </ServiceText>
          <ServiceImage src="images/image13.jpg" alt="Fitness Activity" />
        </ServiceItem>
        <ServiceItem>
          <ServiceText>
            <h2>Personal Fitness Training</h2>
            <p>
              Your personal fitness guide awaits.{" "}
              <Button>Request a Personal Trainer</Button>
            </p>
          </ServiceText>
          <ServiceImage src="images/image15.jpg" alt="Fitness Activity" />
        </ServiceItem>
        <ServiceItem>
          <ServiceText>
            <h2>Online Fitness Counseling</h2>
            <p>
              Seek advice from fitness experts. <Button>Book a Session</Button>
            </p>
          </ServiceText>
          <ServiceImage src="images/image17.jpg" alt="Fitness Activity" />
        </ServiceItem>
      </ServicesOverview>

      <Testimonials>
        <h2>What Our Members Say</h2>

        <TestimonialItem>
          <TestimonialQuote>
            “Star Fitness Club has transformed my life! The online classes are
            so convenient, and the trainers are super knowledgeable.”
          </TestimonialQuote>
          <TestimonialAuthor>
            - Alex Thompson, Member since 2020
          </TestimonialAuthor>
        </TestimonialItem>

        <TestimonialItem>
          <TestimonialQuote>
            “The personal training sessions were a game-changer for me. I've
            achieved goals I never thought possible. Thank you, Star Fitness!”
          </TestimonialQuote>
          <TestimonialAuthor>
            - Mia Williams, Member since 2019
          </TestimonialAuthor>
        </TestimonialItem>

        <TestimonialItem>
          <TestimonialQuote>
            “I love the variety of free fitness videos. It keeps me motivated
            and I can workout whenever I want. Highly recommended!”
          </TestimonialQuote>
          <TestimonialAuthor>- Raj Patel, Member since 2021</TestimonialAuthor>
        </TestimonialItem>
      </Testimonials>

      <NewsletterSignUp>
        <NewsletterDescription>
          Stay updated with the latest fitness tips, videos, and more. Sign up
          for our newsletter now!
        </NewsletterDescription>
        <NewsletterForm>
          <EmailInput type="email" placeholder="Enter your email" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </NewsletterForm>
      </NewsletterSignUp>
    </MainWrapper>
  );
};

// I'm defining the new styled components based on your previous definitions:

const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
};

const MainWrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #ffffff;
  width: 100%;
  padding: 0rem;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0rem;
  }
`;

const ImageDiv = styled.div`
  position: relative; // Makes it a position context for its children
  display: flex; // Enable flexbox for centering
  height: 580px;
  justify-content: center; // Center children horizontally
  align-items: center; // Center children vertically
  overflow: hidden; // Hide overflow in case Image1 goes out of bounds
`;

const Image1 = styled.img`
  width: 100%;
  height: auto; // Adjust to maintain aspect ratio
  object-fit: cover; // Cover the container without breaking aspect ratio
  position: absolute; // Position it absolute to the ImageDiv
  top: 0;
  left: 0;
  z-index: 1; // Ensure it stays below the text and button
`;

const HeroContent = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: 1.5rem; // Decrease for mobile

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2rem;
  }
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const BriefIntro = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #40e0d0;
  border-radius: 10px;
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #000000;
`;

const ServicesOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr; // One column for mobile
  gap: 2rem;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    padding: 2rem;
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e9e9e9;
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05); // Adds a subtle zoom effect on hover
  }
`;

const ServiceText = styled.div`
  flex: 1; // To ensure it takes up as much space as possible before the image
  margin-bottom: 1rem;

  a {
    text-decoration: none; // Remove the underline
    color: red;

    &:hover {
      color: darkblue; // Color when the link is hovered over
      text-decoration: underline; // Optionally add the underline back on hover
    }
  }
`;

const ServiceImage = styled.img`
  max-width: 100%; // Ensures the image never goes out of the container
  max-height: 250px; // This makes the image significantly bigger. Adjust as per the actual image's aspect ratio or desired look.
  border-radius: 10px; // Same border-radius as its container for consistency
  align-self: center;
`;

const Testimonials = styled.section`
  background-color: #000000;
  color: #ffffff;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const NewsletterSignUp = styled.section`
  text-align: center;
  background-color: #e5e5e5;
  margin-top: 2rem;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const Button = styled.button`
  font-size: 1rem; // Smaller for mobile

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }
  z-index: 2; // Ensure it's above the image
  padding: 1rem 2rem; // Padding for better appearance
  border: none; // No border
  border-radius: 10px; // Rounded edges
  color: white; // Text color
  background-color: #ff5733; // Some contrasting color (Change as per your theme)
  cursor: pointer; // Hand cursor on hover
  margin-top: 2rem; // Space it out from the paragraph
  transition: background-color 0.3s; // Smooth color transition on hover

  &:hover {
    background-color: #ff7849; // Slightly lighter shade on hover
  }
`;

const TestimonialItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  color: #000000;
  margin: 1rem 0;
  padding: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 1rem 2rem;
  }
`;

const TestimonialQuote = styled.p`
  font-style: italic;
  color: #000000;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  text-align: right;
`;

const NewsletterDescription = styled.p`
  text-align: center;
  margin-bottom: 1rem;
`;

const NewsletterForm = styled.form`
  flex-direction: column; // Stack for mobile

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const EmailInput = styled.input`
  margin-bottom: 1rem; // Space for mobile

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
  }
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubscribeButton = styled.button`
  padding: 0.5rem 1.5rem;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7849;
  }
`;

export default HomePage;

*/
