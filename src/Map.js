import React from 'react';
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
    withGoogleMap,
    GoogleMap,
    FusionTablesLayer,
} = require("react-google-maps");

const MapWithAFusionTablesLayer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `600px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={11}
        defaultCenter={{ lat: 41.850033, lng: -87.6500523 }}
    >
        <FusionTablesLayer
          
            options={{
                query: {
                    select: `Geocodable address`,
                    from: ``
                }
            }}
        />
    </GoogleMap>
);
export default MapWithAFusionTablesLayer;
<MapWithAFusionTablesLayer />