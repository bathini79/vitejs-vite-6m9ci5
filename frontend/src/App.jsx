import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get(
        '/api/jokes'
      )
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);
  return (
    <>
      <h1>Nipun</h1>
      <p>Jokes: {jokes?.length}</p>
      {jokes?.map((joke, index) => (
  <div key={joke.id}>
    <h3>{joke.question}</h3>
    <p>{joke.joke}</p>
  </div>
))}

    </>
  );
}

export default App;
