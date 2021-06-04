

// const express = require('express')
// const path = require('path');
// const app = express();
// const port = 8000;

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname+'/public/index.html'))
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`)
// });

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');