const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
// middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true
}));
app.use(express.json());
// app.use(cors());

// mongo default


const uri = `mongodb+srv://hostel-hub:OXpqw7hS002Lt1As@cluster0.schfv1q.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const mealCollection = client.db('hostelhub').collection('meal');
    const userCollection = client.db('hostelhub').collection('user');

    // get all result
    app.get('/meal', async (req, res) => {
      const cursor = mealCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    // get meal details
    app.get('/meal/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await mealCollection.findOne(query);
      res.send(result);
    })

    // add user
    app.post('/user', async (req, res) => {
      const newUser = req.body;
      const existingUser = await userCollection.findOne({ email: newUser.email });
      if (existingUser) {
        // If the user already exists, send a response indicating duplication
        res.status(400).send({ message: 'User already exists' });
      } else {
        // If the user does not exist, insert the new user
        const result = await userCollection.insertOne(newUser);
        res.send(result);
      }
    })
    app.get('/user', async (req, res) => {
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    // get user details
    app.get('/user/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await userCollection.findOne(query);
      res.send(result);
    })
    // request meal
    app.put('/user/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updatedApply = req.body;
      const apply = {
        $push: {
          food: {
            $each: [updatedApply.food_id],
            $position: 0 // This will add the new item as the last element in the array
          }
        }
      }
      const result = await userCollection.updateOne(filter, apply, options);
      res.send(result);
    })
    // update rand
    app.put('/user/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updatedApply = req.body;
      const apply = {
        $set: {
          membership : updatedApply.membership
        }
      }
      const result = await userCollection.updateOne(filter, apply, options);
      res.send(result);
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('hehhe boiiiii')
})

app.listen(port, () => {
  console.log(`server running ${port}`)
})