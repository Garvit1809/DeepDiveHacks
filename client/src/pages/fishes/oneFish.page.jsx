import { Box, Divider, Heading, Image, ListItem, Text, UnorderedList, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getOneFish } from '../../api/fishes';
import FishAttributes from '../../components/fish/fishAttributes';
import FishImageGallery from '../../components/fish/fishImageGallery';
import FishNutrients from '../../components/fish/fishNutrients';
import Map from '../../components/map/map';
import { ERROR_TOAST_OPTIONS } from '../../constants/constants';

const OneFish = ({ match }) => {
  const [fishData, setFishData] = useState({});
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    (async () => {
      const { fishId } = match.params;
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
      <Box
        borderRadius='15px'
        bg='rgba(255, 255, 255, 0.6)'
        p='1rem'
        h='100%'
        d='flex'
        alignItems='center'
        justifyContent='center'>
        <Heading as='h2' className='heading'>
          Loading...
        </Heading>
      </Box>
    );
  }

  return (
    <Box borderRadius='15px' bg='rgba(255, 255, 255, 0.6)' p='1rem' h='100%' overflow='hidden' overflowY='scroll'>
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
            White hake, also known as mud hake, are a species of groundfish that live in the deeper northwestern parts
            of the Atlantic Ocean. They are often compared to Atlantic cod and haddock in their physical appearance and
            taste.
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
            {fishData.locations.map((location) => (
              <UnorderedList>
                <ListItem>{location}</ListItem>
              </UnorderedList>
            ))}
          </Box>

          <Box display='flex' gap='2'>
            {fishData.coordinates.map((coordinate, i) => (
              <Map key={i} mapId={`map-${i}`} allCoordinates={coordinate} styles={{ height: '25rem', width: '48vw' }} />
            ))}
          </Box>
        </Box>
      )}

      <Divider orientation='horizontal' margin='1.5rem 0' />

      <FishNutrients fishData={fishData} />
    </Box>
  );
};

export default OneFish;
