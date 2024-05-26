import express from 'express';

const app = express();
const port = Number(process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.send('Boston 🐶 is running!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running at http://localhost:${port}`);
});