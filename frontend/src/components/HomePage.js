import styled from "styled-components";
import React, { useState } from "react";
import RegisterModal from "./RegisterModal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    alert("Thank you for subscribing!"); // Display the message
  };

  return (
    <>
      <RegisterModal isOpen={isModalOpen} onClose={closeModal} />
      <MainWrapper>
        <ImageDiv onClick={openModal}>
          <VideoWrapper>
            <VideoBackground autoPlay muted loop>
              <source src="images/video08.mp4" type="video/mp4" />
            </VideoBackground>
          </VideoWrapper>
          <HeroContent>
            <HeroTitle>
              Transform Your Fitness Journey
              <br />
              with Star Fitness Club!
            </HeroTitle>
            <Button onClick={openModal}>Join Us Today</Button>
          </HeroContent>
        </ImageDiv>

        <BriefIntro>
          <p>
            Dive into the universe of fitness with Star Fitness Club.
            <br />
            Experience a celestial range of services tailored just for you.
          </p>
        </BriefIntro>

        <ServicesOverview>
          {serviceData.map((service, idx) => (
            <ServiceItem key={idx}>
              <ServiceText>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                {service.buttonText && (
                  <Button onClick={openModal}>{service.buttonText}</Button>
                )}
              </ServiceText>
              <ServiceImage src={service.image} alt="Fitness Activity" />
            </ServiceItem>
          ))}
        </ServicesOverview>

        <Testimonials>
          <h2>Voices From the Stars</h2>
          {testimonialData.map((testimonial, idx) => (
            <TestimonialItem key={idx}>
              <TestimonialQuote>“{testimonial.quote}”</TestimonialQuote>
              <TestimonialAuthor>{testimonial.author}</TestimonialAuthor>
            </TestimonialItem>
          ))}
        </Testimonials>

        <NewsletterSignUp>
          <NewsletterDescription>
            Be a star! Get the latest from Star Fitness right into your inbox.
          </NewsletterDescription>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <EmailInput type="email" placeholder="Your Galactic Email" />
            <SubscribeButton>Beam Me Up!</SubscribeButton>
          </NewsletterForm>
        </NewsletterSignUp>
      </MainWrapper>
    </>
  );
};

// Service and Testimonial Data
const serviceData = [
  {
    title: "Live Online Fitness Sessions",
    description: "Tune in to our classes from anywhere, anytime.",
    image: "images/image10.jpg",
  },
  {
    title: "Free Online Fitness Videos",
    description:
      "No space coins? No worries! Watch our star fitness sessions anytime.",
    image: "images/image13.jpg",
    buttonText: "Access Now",
  },
  {
    title: "Personal Fitness Mentor",
    description: "Get your own private Fitness guide.",
    image: "images/image15.jpg",
    buttonText: "Hire a Mentor",
  },
  {
    title: "Need Fitness Counseling?",
    description: "Consult with fitness leaders from around the world.",
    image: "images/image17.jpg",
    buttonText: "Book a Consultation",
  },
];

const testimonialData = [
  {
    quote:
      "Star Fitness is out of this world! The online classes are a delight.",
    author: "- Andromeda Starry, Joined in 2022",
  },
  {
    quote: "The personal mentorship program took my fitness to another level.",
    author: "- Orion Nebula, Member since 2021",
  },
  {
    quote: "Diverse fitness options, feels like touring the entire universe!",
    author: "- Cassiopeia Galaxy, Subscribed since 2023",
  },
];

const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
};

const MainWrapper = styled.div`
  font-family: "Arial", sans-serif;
  background-color: #f4f4f9;
  width: 100%;
  padding: 0rem;
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0rem;
  }
`;

const ImageDiv = styled.div`
  position: relative;
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-bottom: 5px solid #3d5a80;
  z-index: 1;
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;

  background-color: rgba(61, 90, 128, 0.6);
  border-radius: 8px;
  z-index: 20;
`;

const HeroTitle = styled.h1`
  color: #e0fbfc;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const BriefIntro = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: #98c1d9;
  border-radius: 10px;

  font-size: 1.2rem;
  font-weight: bold;
  color: #3d5a80;
`;

const ServicesOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #e0fbfc;

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f4f4f9;
  border: 1px solid #3d5a80;
  border-radius: 8px;
  padding: 1rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ServiceText = styled.div`
  flex: 1;
  margin-bottom: 1rem;

  h2 {
    color: #3d5a80;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
  }
`;

const ServiceImage = styled.img`
  max-width: 100%;
  max-height: 250px;
  border-radius: 8px;
  align-self: center;
`;

const Testimonials = styled.section`
  padding: 2rem;
  background-color: #3d5a80;
`;

const TestimonialItem = styled.div`
  background-color: #98c1d9;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1rem 0;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const TestimonialQuote = styled.p`
  font-style: italic;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  text-align: right;
  color: #f4f4f9;
`;

const NewsletterSignUp = styled.section`
  text-align: center;
  background-color: #e0fbfc;
  padding: 2rem;
  border-top: 5px solid #3d5a80;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #ff0000;
  color: #e0fbfc;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a7d9a;
  }
`;

const NewsletterDescription = styled.p`
  margin-bottom: 1rem;
  font-size: 1.3rem;
  color: #3d5a80;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const EmailInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #3d5a80;
  border-radius: 8px;
`;

const SubscribeButton = styled(Button)``;

const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default HomePage;
