import React from 'react';

export async function getServerSideProps() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response.json());
const pokeNames = data.results.map((pokemon)=>pokemon.name)
  return {
    props: {
      pokeNames,
    },
  };
}

   

const ServerSidePage = ({ pokeNames }) => {
  return (
    <div>
      <h1>Server-Side Page</h1>
      <pre>{pokeNames.map((name,key)=>{
        return(
          <>
              <li className='list-disc' key={key}>{name}</li>

          </>
        )
      })}</pre>
    </div>
  );
};

export default ServerSidePage;
