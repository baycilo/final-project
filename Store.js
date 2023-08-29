/*Remember to also handle the logout operation, where you'd set the user data back to null or some initial state.*/

app.post("/login", async (req, res) => {
  try {
    const db = await connectToDB();

    // Find the user by email
    const user = await db
      .collection("registrations")
      .findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Compare the entered password with the hashed one in the database
    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (isMatch) {
      const userToSend = {
        _id: user._id,
        email: user.email,
        name: user.name, // and any other user fields you want to send
      };
      res.status(200).json({ message: "Login successful." });
    } else {
      res.status(401).json({ error: "Invalid credentials." });
    }
  } catch (error) {
    console.error("Error occurred while logging in:", error.message);
    res.status(500).json({ error: "Unable to login." });
  }
});
////////////////////////////////////////////////////////////////////////////////////
/*

const ServicesOverview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
`;

const ServiceItem = styled.div`
  flex: 1;
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
`;

const ServiceImage = styled.img`
  max-width: 100%; // Ensures the image never goes out of the container
  border-radius: 10px; // Same border-radius as its container for consistency
  align-self: center;
`;







*/
