import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://vitejsvite6m9ci5-arxs--3000--09144545.local-corp.webcontainer.io/api/jokes'
      )
      .then((response) => {
        setJokes(response);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <>
      <h1>Nipun</h1>
      <p>Jokes: {jokes.length}</p>
      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.question}</h3>
          <p>{joke.joke}</p>
        </div>;
      })}
    </>
  );
}

export default App;
