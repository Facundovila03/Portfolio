import mongoose from "mongoose";
import server from "./server.js";
// eslint-disable-next-line no-undef
const { PORT, MONGODB_CONN } = process.env;

mongoose.connect(MONGODB_CONN).then(() => {
  console.log("mongo database connected succesfully");
  server.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
  });
});
