import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <FlexSection>
        <Image src="images/image11.jpg" alt="Fitness Activity" />
        <Content>
          <h2>Our History</h2>
          <p>
            We embarked on our journey in the year 2019, fueled by a burning
            desire to advocate for fitness, health, and general well-being. Our
            humble beginnings were marked by passion and perseverance, enabling
            us to push through the early challenges we faced. Over the years,
            our commitment has remained unwavering. We've had the privilege of
            guiding thousands towards achieving their fitness aspirations,
            transforming lifestyles, and fostering a community of health
            enthusiasts. Today, as we reflect on our rich history, we are
            reminded of the countless success stories and the bonds formed,
            pushing us to continue our mission for years to come.
          </p>
        </Content>
      </FlexSection>

      <Section>
        <h2>Mission & Vision</h2>
        <p>
          Our mission is to provide quality fitness training and guidance to
          individuals seeking a healthier lifestyle. We envision a community
          where everyone, regardless of age or fitness level, feels empowered to
          pursue their health goals.
        </p>
      </Section>

      <Section>
        <h2>Meet the Team</h2>
        <Team>
          <Member>
            <Image src="images/image14.jpg" alt="Team Member" />
            <h3>Jane Doe</h3>
            <p>Lead Trainer</p>
          </Member>
          <Member>
            <Image src="images/image17.jpg" alt="Team Member" />
            <h3>Sara Smith</h3>
            <p>Nutrition Expert</p>
          </Member>
          <Member>
            <Image src="images/image18.jpg" alt="Team Member" />
            <h3>Emily Johnson</h3>
            <p>Yoga Instructor</p>
          </Member>
        </Team>
      </Section>

      <Section>
        <h2>Why Choose Us</h2>
        <p>
          From top-notch equipment to certified trainers, we offer everything
          you need to achieve your fitness dreams. Our inclusive community
          welcomes members from all walks of life and fitness levels. Come and
          experience the difference for yourself.
        </p>
      </Section>

      <Section>
        <h2>Testimonials</h2>
        <p>
          "The best fitness center I've ever joined! The trainers are
          knowledgeable, and the community is super supportive!" - Mark T.
        </p>
        <p>
          "I've achieved my fitness goals in just six months with the guidance
          of their expert trainers. Highly recommended!" - Lucy K.
        </p>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  padding: 1rem;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 0.5rem;
  }
`;

const Image = styled.img`
  width: 50%;
  max-width: 500px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  flex: 1;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.3rem;
    }
  }
`;

const Team = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h3 {
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FlexSection = styled(Section)`
  display: flex;
  align-items: center; // to vertically align the content in the center
  gap: 2rem; // space between the image and the content

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default About;
