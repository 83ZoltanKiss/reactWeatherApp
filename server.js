const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Express server is running on 3000 port');
});
