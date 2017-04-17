const express = require('express')
const app = express();
const PORT = process.env.PORT || 3002;

app.listen(PORT, (err) => {
  err? console.log(err) : console.log(`Running on http://localhost${PORT}`);
});

app.get('/', (req, res) => res.sendFile(`${__dirname}/twoTop/index.html`));
