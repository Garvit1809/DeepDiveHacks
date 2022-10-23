import { Box, Divider, Heading, Image, ListItem, Text, UnorderedList, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneFish } from '../../api/fishes';
import FishAttributes from '../../components/fish/fishAttributes';
import FishImageGallery from '../../components/fish/fishImageGallery';
import FishNutrients from '../../components/fish/fishNutrients';
import Navbar from '../../components/GeneralComp/Navbar';
import Map from '../../components/map/map';
import { ERROR_TOAST_OPTIONS } from '../../constants/constants';

const OneFish = () => {
  const [fishData, setFishData] = useState({});
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const { fishId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await getOneFish(fishId);

      if (Array.isArray(data) && data[0] === false) {
        return toast({ ...ERROR_TOAST_OPTIONS, title: data[1] });
      }

      setFishData(data);
      setLoading(false);
    })();
  }, []);

  if (loading === true) {
    return (
      <>
        <Navbar />
        <Box
          borderRadius='15px'
          p='1rem'
          h='100%'
          d='flex'
          alignItems='center'
          justifyContent='center'
          background='rgba(0, 0, 0, .2)'>
          <Heading as='h2' className='heading'>
            Loading...
          </Heading>
        </Box>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Box
        borderRadius='15px'
        bg='rgba(255, 255, 255, 0.6)'
        p='1rem'
        w='98%'
        m='auto'
        background='rgba(0, 0, 0, .2)'
        mt='8'>
        <Box display='flex' gap='5rem'>
          <Image
            src={fishData.speciesIllustrationPhoto[0].src}
            bg='#fff'
            borderRadius='5px'
            width='25rem'
            alignSelf='start'
          />
          <Box>
            <Heading as='h3' className='heading'>
              {fishData.speciesName}
            </Heading>
            <Text fontSize='xl' marginTop='1.2rem' className='heading'>
              {fishData.about}
            </Text>
            {fishData.population ? (
              <Text fontSize='xl' marginTop='3' className='heading'>
                POPULATION STATUS - {fishData.population}
              </Text>
            ) : (
              ''
            )}

            {fishData.population ? (
              <Text fontSize='xl' marginTop='3' className='heading'>
                FISHING RATE - {fishData.fishingRate}
              </Text>
            ) : (
              ''
            )}

            <FishAttributes fishData={fishData} />
          </Box>
        </Box>

        <Divider orientation='horizontal' margin='1.5rem 0' />

        <FishImageGallery images={fishData.imageGallery} />

        <Divider orientation='horizontal' margin='1.5rem 0' />

        {fishData.coordinates && fishData.coordinates.length !== 0 && (
          <Box>
            <Heading as='h3' className='heading'>
              PLACES Found At
            </Heading>

            <Box mt='5' mb='5'>
              {fishData.locations.map((location, i) => (
                <UnorderedList key={i}>
                  <ListItem>{location}</ListItem>
                </UnorderedList>
              ))}
            </Box>

            <Box display='flex' gap='2'>
              {fishData.coordinates.map((coordinate, i) => (
                <Map
                  key={i}
                  mapId={`map-${i}`}
                  allCoordinates={coordinate}
                  styles={{ height: '25rem', width: '48vw' }}
                />
              ))}
            </Box>
          </Box>
        )}

        <Divider orientation='horizontal' margin='1.5rem 0' />

        <FishNutrients fishData={fishData} />
      </Box>

      <br />
      <br />
    </>
  );
};

export default OneFish;
