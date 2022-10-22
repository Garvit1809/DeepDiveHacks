import Map from '../../components/map/map';

const Home = () => {
  const allCoordinates = [
    {
      type: 'Point',
      coordinates: [46.291635, -51.451732],
    },
  ];
  return <Map mapId='map' allCoordinates={allCoordinates} styles={{ height: '80vh', width: '80vw' }} />;
};

export default Home;
