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
    const requestCollection = client.db('hostelhub').collection('request');

    // get all meal
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
    // get user
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


    // update user role
    app.put('/user/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updatedApply = req.body;
      const apply = {
        $set: {
          name: updatedApply.name,
          email: updatedApply.email,
          role: updatedApply.role,
          membership: updatedApply.membership,
        }
      }
      const result = await userCollection.updateOne(filter, apply, options);
      res.send(result);
    })


    // add meal
    app.post('/meal', async (req, res) => {
      const newMeal = req.body;
      const result = await mealCollection.insertOne(newMeal);
      res.send(result);
    })

    // meal update
    app.put('/meal/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) }
      const options = { upsert: true };
      const updatedApply = req.body;
      const apply = {
        $set: {
          item : updatedApply.item,
          type : updatedApply.type,
          image : updatedApply.image,
          ingredients : updatedApply.ingredients,
          price : updatedApply.price,
          description : updatedApply.description,
          post_date : updatedApply.post_date,
          rating : updatedApply.rating,
          like : updatedApply.like,
          reviews : updatedApply.reviews,
          admin : updatedApply.name,
          email : updatedApply.email,
          launch : updatedApply.launch
        }
      }
      const result = await mealCollection.updateOne(filter, apply, options);
      res.send(result);
    })
    app.get('/meal', async (req, res) => {
      const cursor = mealCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    // delete meal
    app.delete('/meal/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await mealCollection.deleteOne(query);
      res.send(result)
    });
    // get meal details
    app.get('/meal/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await mealCollection.findOne(query);
      res.send(result);
    })


    // add request
    app.post('/request', async (req, res) => {
      const updatedReqApply = req.body;
      const result = await requestCollection.insertOne(updatedReqApply);
      res.send(result);
    })
    // delete request
    app.delete('/request/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) }
      const result = await requestCollection.deleteOne(query);
      res.send(result)
    });
    // get request
    app.get('/request', async (req, res) => {
      const cursor = requestCollection.find();
      const result = await cursor.toArray();
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