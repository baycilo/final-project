const { MongoClient } = require("mongodb");
require("dotenv").config();
//const path = require("path");
//require("dotenv").config({ path: path.join(__dirname, "../.env") });
//console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

//require("dotenv").config({ path: "../.env" });

const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Import your data
const { registrations } = require("./backend/data.js");

const userImport = async () => {
  // Create a new MongoClient
  const client = new MongoClient(MONGO_URI, options);

  try {
    // Connect to MongoDB
    await client.connect();

    // Select the database
    const db = client.db("Star-Fitness");

    // Select the collection
    const registrationsCollection = db.collection("registrations");

    // Clear the existing data in the collection
    await registrationsCollection.deleteMany({}); // This removes all documents

    // Ensure unique index on email - You may want to drop any existing index and recreate to ensure fresh state.
    await registrationsCollection.dropIndex({ email: 1 });
    await registrationsCollection.createIndex({ email: 1 }, { unique: true });

    for (let user of registrations) {
      //user._id = uuidv4(); // Assign a UUID to the _id field
      try {
        // Attempt to insert the user
        await registrationsCollection.insertOne(user);
      } catch (err) {
        if (err.code === 11000) {
          // Duplicate key error
          console.log(`User with email ${user.email} already exists.`);
        } else {
          throw err; // If it's some other error, re-throw it
        }
      }
    }

    console.log("User import completed");
  } catch (err) {
    console.log("User import error: ", err);
  } finally {
    // Close the connection
    client.close();
  }
};

userImport();
