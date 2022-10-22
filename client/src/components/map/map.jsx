import { useEffect } from 'react';
import { mapAlreadyPresent, initMap, createCircle } from '../../utils/map';

const Map = ({ mapId, allCoordinates, styles }) => {
  useEffect(() => {
    if (mapAlreadyPresent(mapId)) return;

    const map = initMap(mapId, allCoordinates[0].coordinates);

    createCircle(map, allCoordinates[0].coordinates);
  }, []);

  return <div id={`${mapId}`} style={styles}></div>;
};

export default Map;
