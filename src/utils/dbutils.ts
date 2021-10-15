import { MongoClient } from "mongodb";

export function testdb() {
  MongoClient.connect(process.env.MONGODB_URL, function (err, db) {
    console.log(`MongoDB connected`);
    db.close();
  });
}
