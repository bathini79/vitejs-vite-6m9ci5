import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for all routes
app.use(cors({ origin: true }));
app.get('/', (req, res) => {
  res.send('Serve is ready');
});
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      question: "Why don't we ever tell secrets on a farm?",
      answer: 'Because the potatoes have eyes and the corn has ears!',
    },
    {
      id: 2,
      question: 'Why was the math book sad?',
      answer: 'Because it had too many problems.',
    },
    {
      id: 3,
      question: 'What do you call an alligator in a vest?',
      answer: 'An investigator!',
    },
    {
      id: 4,
      question: 'How do you organize a space party?',
      answer: 'You planet!',
    },
    {
      id: 5,
      question: 'Why did the scarecrow win an award?',
      answer: 'Because he was outstanding in his field!',
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`port is runninn g at ${port}`);
});
