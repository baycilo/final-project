import { useContext } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";
import YouTubeEmbed from "./YouTubeEmbed";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Please log in to see your profile</h1>;

  const videoIds = {
    leg: "imnbWGCmDTs",
    arm: "iCQ2gC4DqJw",
    shoulder: "M0uO8X3_tEA",
    knee: "gC_L9qAHVJ8",
    back: "_EldigduNbs",
  };

  return (
    <Wrapper>
      <Header>
        <h1>Welcome, {user.givenName}</h1>
        <p>Email: {user.email}</p>
      </Header>

      <Main>
        <Section>
          <Title>Profile Overview</Title>
          <ProfileText>
            <span>Full Name:</span> {user.givenName} {user.surname}
            <br />
            <span>Email:</span> {user.email}
            <br />
            <span>Age:</span> {user.age} (32)
            <br />
            <span>Fitness Level:</span> {user.fitnessLevel} (Advanced)
            <br />
            <span>Favorite Workout:</span> {user.favoriteWorkout} (Vinyasa Yoga
            and Meditation)
            <br />
            <span>Dietary Preference:</span> {user.dietaryPreference} (Vegan)
            <br />
            <span>About:</span> Yoga enthusiast aiming to achieve mental clarity
            and physical flexibility. I believe in the power of breath, balance,
            and mindfulness. Looking to deepen my practice and perhaps embark on
            a yoga teacher training.
          </ProfileText>
        </Section>

        <Section>
          <Title>Hoop in</Title>
          <StyledLink href="#">Connect to a Fitness Coach</StyledLink>
          <StyledLinks to="/booksession">
            Need Fitness counseling? Book a consultation.
          </StyledLinks>

          <StyledLink href="#">Live Online Fitness Video Sessions</StyledLink>
          <StyledLink href="#">Free Fitness Tips</StyledLink>
        </Section>

        <Section>
          <Title>Fitness Videos</Title>
          <p>Aerobatic exercise for body building</p>
          <YouTubeEmbed videoId={videoIds.leg} />
        </Section>

        <Section>
          <Title>Fitness Videos</Title>
          <p>Calisthenics exercise for Loosing Weight</p>
          <YouTubeEmbed videoId={videoIds.arm} />
        </Section>

        <Section>
          <Title>Fitness Videos</Title>
          <p>Neuromotor exercise for Shoulder building</p>
          <YouTubeEmbed videoId={videoIds.shoulder} />
        </Section>

        <Section>
          <Title>Fitness Videos</Title>
          <p>Functional exercise for Waist Training</p>
          <YouTubeEmbed videoId={videoIds.knee} />
        </Section>

        <Section>
          <Title>Fitness Videos</Title>
          <p>Balance and Stability exercise </p>
          <YouTubeEmbed videoId={videoIds.back} />
        </Section>

        <Section>
          <Title>Fitnes Videos</Title>
          <p>Flexibility exercise for Flat tommy</p>
          <StyledVideo controls>
            <source src="images/video05.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Section>

        <Section>
          <Title>Recent Activities</Title>
          <p>Logged 4 workouts this week.</p>
        </Section>

        <Section>
          <Title>Nutrition Insights</Title>
          <p>
            Calorie intake is balanced. Need to increase protein intake for
            muscle growth.
          </p>
        </Section>

        <Section>
          <Title>Badges & Achievements</Title>
          <p>
            Recently earned: "Early Riser", "10K Runner", and "Squat Master".
          </p>
        </Section>

        <Section>
          <Title>Favorite Workouts</Title>
          <p>Cardio Blast, Morning Yoga, Intense Core Workout.</p>
        </Section>

        <Section>
          <Title>Personal Notes</Title>
          <p>
            Focus on flexibility next week. Also, start with meditation
            practices.
          </p>
        </Section>

        <Section>
          <Title>Fitness Goal</Title>
          <p>To Loose 20LB every moth.</p>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #f4f4f4;
`;

const Header = styled.header`
  padding: 1rem 0;
  background-color: #333;
  color: white;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Section = styled.section`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #40e0d0;
  padding-bottom: 0.5rem;
  color: red;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
`;

const StyledLink = styled.a`
  font-size: 1rem;
  color: #3498db;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  text-decoration: none;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: #2c3e50;
    cursor: pointer;
    text-decoration: underline;
  }

  &::before {
    content: "→ ";
    color: #e74c3c;
  }
`;

const StyledLinks = styled(Link)`
  font-size: 1rem;
  color: #3498db;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  text-decoration: none;
  display: block;
  transition: color 0.3s ease;

  &:hover {
    color: #2c3e50;
    cursor: pointer;
    text-decoration: underline;
  }

  &::before {
    content: "→ ";
    color: #e74c3c;
  }
`;

const ProfileText = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;

  br {
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: bold;
    color: #222;
  }
`;

export default Profile;
