import { useContext } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Please log in to see your profile</h1>;

  return (
    <Wrapper>
      <Header>
        <h1>Welcome, {user.givenName}</h1>
        <p>Email: {user.email}</p>
      </Header>

      <Main>
        <Section>
          <Title>Profile Overview</Title>
          <p>
            This is an overview of {user.givenName}'s profile. Here you can find
            details and preferences.
          </p>
        </Section>

        <Section>
          <Title>Exercise Videos</Title>
          <p>Squating exercise for leg building</p>
          <StyledVideo controls>
            <source src="images/video03.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Section>

        <Section>
          <Title>Exercise Videos</Title>
          <p>Squating exercise for Arm building</p>
          <StyledVideo controls>
            <source src="images/video01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Section>

        <Section>
          <Title>Exercise Videos</Title>
          <p>Squating exercise for Shoulder building</p>
          <StyledVideo controls>
            <source src="images/video02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Section>

        <Section>
          <Title>Exercise Videos</Title>
          <p>Squating exercise for Flat tommy</p>
          <StyledVideo controls>
            <source src="images/video05.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </StyledVideo>
        </Section>

        <Section>
          <Title>Exercise Videos</Title>
          <p>Squating exercise for chest building</p>
          <StyledVideo controls>
            <source src="images/video06.mp4" type="video/mp4" />
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
          <Title>Personal Notes</Title>
          <p>
            Focus on flexibility next week. Also, start with meditation
            practices.
          </p>
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
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 0.5rem;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 1rem;
`;

export default Profile;

/*import { useContext } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Please log in to see your profile</h1>;

  return (
    <Wrapper>
      <h1>Welcome, {user.givenName}</h1>
      <p>Email: {user.email}</p>
      <h3>this is, {user.givenName} Profile Page</h3>
      <Main>
        <Section>
        <p>Squating exercise for leg building</p>
        <StyledVideo controls>
          
          <source src="images/video03.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </StyledVideo>
        </Section>

      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
`;

const StyledVideo = styled.video`
  width: 100%; // Adjust as per your requirement
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export default Profile;*/
