import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Box } from '@chakra-ui/react';
const MapContainer = (props) => {
    console.log(props)
    return (
        <>
          <Box h={"80vh"}>
          <Map
                    google={props.google}
                    zoom={12}
                    initialCenter={{ lat: 12.9539, lng: 77.4661 }} // Set initial center coordinates
                >
                    {/* Render markers */}
                    {props.locations.map((location, index) => (
                        <Marker
                            key={index}
                            position={{ lat: location.lat, lng: location.lng }}
                            name={location.name}
                        />
                    ))}
                </Map>
         </Box>  
        </>
    );
};

export default GoogleApiWrapper({
    apiKey: 'api_key_here',
})(MapContainer);

