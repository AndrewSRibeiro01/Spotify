import { MongoClient } from "mongodb";

const URI = "mongodb+srv://andrewsouza57:G8HSlyK5kcsmBzFw@cluster0.1olql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");