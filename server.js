import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT;
const URL = process.env.MONGO_DB_URL;

mongoose
  .connect(URL)
  .then(() => {
    console.log(`Connected to Mongo DB`);
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
