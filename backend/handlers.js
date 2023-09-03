"use strict";
const { MongoClient } = require("mongodb");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

require("dotenv").config({ path: "../.env" });

const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const client = new MongoClient(MONGO_URI, options);
let db;

const connectToDB = async () => {
  if (!db) {
    await client.connect();
    db = client.db("Star-Fitness");
  }
  return db;
};

module.exports = (app) => {
  app.get("/hello", (req, res) => {
    return res.status(200).json({ status: 200, message: "Hello there" });
  });

  // Endpoint to retrieve all users
  app.get("/users", async (req, res) => {
    try {
      const db = await connectToDB();
      const users = await db.collection("registrations").find().toArray();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Unable to retrieve users." });
    }
  });

  // Endpoint to retrieve a single user by ID
  app.get("/users/:id", async (req, res) => {
    try {
      const db = await connectToDB();
      const user = await db
        .collection("registrations")
        .findOne({ _id: req.params.id });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "User not found." });
      }
    } catch (error) {
      res.status(500).json({ error: "Unable to retrieve user." });
    }
  });

  // Endpoint to create a new user
  app.post("/register", async (req, res) => {
    try {
      const db = await connectToDB();

      // Check if the email already exists
      const existingUser = await db
        .collection("registrations")
        .findOne({ email: req.body.email });
      if (existingUser) {
        return res.status(409).json({ error: "Email already in use." });
      }

      // Hash the password before storing it
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

      const newUser = {
        _id: String(uuidv4()),
        ...req.body,
        password: hashedPassword, // Store the hashed password instead of the plain one
      };

      const result = await db.collection("registrations").insertOne(newUser);
      if (result.acknowledged) {
        res
          .status(201)
          .json({ message: "User created successfully.", user: newUser });
      } else {
        res.status(500).json({ error: "Failed to create user." });
      }
    } catch (error) {
      console.error("Error occurred while creating user:", error.message);
      res.status(500).json({ error: "Unable to create user." });
    }
  });

  //  login endpoint
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
          givenName: user.givenName, // and any other user fields you want to send
        };
        res
          .status(200)
          .json({ message: "Login successful.", user: userToSend });
      } else {
        res.status(401).json({ error: "Invalid credentials." });
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error.message);
      res.status(500).json({ error: "Unable to login." });
    }
  });

  // Endpoint to update a user by ID
  app.put("/users/:id", async (req, res) => {
    try {
      const db = await connectToDB();
      const result = await db
        .collection("registrations")
        .updateOne({ _id: req.params.id }, { $set: req.body });

      if (result.matchedCount === 0) {
        res.status(404).json({ error: "User not found." });
      } else {
        res.status(200).json({ message: "User updated successfully." });
      }
    } catch (error) {
      res.status(500).json({ error: "Unable to update user." });
    }
  });

  // Endpoint to delete a user by ID
  app.delete("/users/:id", async (req, res) => {
    try {
      const db = await connectToDB();
      const result = await db
        .collection("registrations")
        .deleteOne({ _id: req.params.id });

      if (result.deletedCount === 0) {
        res.status(404).json({ error: "User not found." });
      } else {
        res.status(200).json({ message: "User deleted successfully." });
      }
    } catch (error) {
      res.status(500).json({ error: "Unable to delete user." });
    }
  });

  // Endpoint to save a new message from the contact form
  app.post("/contact/message", async (req, res) => {
    try {
      const db = await connectToDB();
      const newMessage = {
        _id: String(uuidv4()),
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        date: new Date(),
      };

      const result = await db.collection("messages").insertOne(newMessage);
      if (result.acknowledged) {
        res.status(201).json({ message: "Message saved successfully." });
      } else {
        res.status(500).json({ error: "Failed to save message." });
      }
    } catch (error) {
      console.error("Error occurred while saving message:", error.message);
      res.status(500).json({ error: "Unable to save message." });
    }
  });

  // Endpoint to save a new booking
  app.post("/book-appointment", async (req, res) => {
    try {
      const db = await connectToDB();
      const newBooking = {
        _id: String(uuidv4()),
        nutritionist: req.body.nutritionist,
        date: req.body.date,
        userId: req.body.userId,
      };

      const result = await db.collection("bookings").insertOne(newBooking);
      if (result.acknowledged) {
        res.status(201).json({ message: "Booking saved successfully." });
      } else {
        res.status(500).json({ error: "Failed to save booking." });
      }
    } catch (error) {
      console.error("Error occurred while saving booking:", error.message);
      res.status(500).json({ error: "Unable to save booking." });
    }
  });
};
