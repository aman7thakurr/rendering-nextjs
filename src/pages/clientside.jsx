import React, { useEffect, useState } from 'react';

const ClientSidePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  const pokemonNames = data.results.map(pokemon => pokemon.name);

  return (
    <div className='flex justify-center '>
      <h1 className='text-center'>Pokemon name on Client-Side Page </h1> <br/>
      <ul className='mt-10'>
        {pokemonNames.map((name, index) => (
          <li className='list-disc' key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClientSidePage;
