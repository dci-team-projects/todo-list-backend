import mongoose from "mongoose";
const { connect } = mongoose;

const URI =
  "mongodb+srv://norm123:123norm@cluster1.8zo9w.mongodb.net/todo-list_db?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log(`Connection to db established`))
  .catch((err) => {
    console.log(`We can not connect to the DB ->`, err);
  });
