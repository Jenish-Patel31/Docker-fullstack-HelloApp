// const express=require('express');
// const app = express();
// const cors = require('cors');

// app.use(cors());
// const PORT = 5000;
// const helloRoute = require('./routes/hello');

// app.use('/',helloRoute);

// app.listen(PORT,()=>{
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Important if frontend fetches directly

app.get('/hello', (req, res) => {
    res.set("Cache-Control","no-store");
  res.json({ message: "Hello from the backend!" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
