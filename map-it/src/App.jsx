import React, { useEffect, useState } from 'react';
import MapContainer from './Map';
import { Box, Heading } from '@chakra-ui/react';


const App = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // Fetch data from JSON server
    fetch('http://localhost:8080/locations')
      .then((response) => response.json())
      .then((data) => {
        console.log("data:",data)
        setLocations(data)
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Heading textAlign={"center"}>Location Map</Heading>
      <br />
      <MapContainer locations={locations} />
    </>
  );
};

export default App;
