import { MongoClient } from "mongodb";

export function testdb() {
  console.log(`Database URL : ${process.env.MONGODB_URL}`);
  MongoClient.connect(process.env.MONGODB_URL, function (err, db) {
    console.log(`MongoDB connected : ${db}`);
    db.close();
  });
}
