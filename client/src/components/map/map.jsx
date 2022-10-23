import { useEffect } from 'react';
import { mapAlreadyPresent, initMap, createCircle } from '../../utils/map';

const Map = ({ mapId, allCoordinates, styles }) => {
  console.log(allCoordinates);
  useEffect(() => {
    if (mapAlreadyPresent(mapId)) return;

    const map = initMap(mapId, allCoordinates.coordinates);

    createCircle(map, allCoordinates.coordinates);
  }, []);

  return <div id={`${mapId}`} style={styles}></div>;
};

export default Map;
