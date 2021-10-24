const MongoClient = require('mongodb').MongoClient;
const assert=require('assert')
const URL="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const DB_NAME="conFusion";

MongoClient.connect(URL,(err,client)=>{
  assert.equal(err,null);
  console.log("Database Connected");
  const db=client.db(DB_NAME);
  const dishes_collection=db.collection("dishes");
  dishes_collection.insertOne({
      "name":"dish1",
      "description":"description1"
  },(err,data)=>{
      assert.equal(err,null);
      console.log(data);

      dishes_collection.find({}).toArray((err,data)=>{
          assert.equal(err,null);
          console.log(data);

          db.dropCollection("dishes",(err,result)=>{
              assert.equal(err,null);
              client.close();
          })
      })
  })
})