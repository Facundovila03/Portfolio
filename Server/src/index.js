const mongoose = require("mongoose");
const server = require("./server");
const { PORT, MONGODB_CONN } = process.env;

mongoose.connect(MONGODB_CONN).then(() => {
  console.log("mongo database connected succesfully");
  server.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
  });
});
