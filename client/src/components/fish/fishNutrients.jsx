import { Box, Heading, Text } from '@chakra-ui/react';

const NutrientDetails = ({ label, value }) => {
  if (!value) return <></>;

  return (
    <>
      <b className='heading'>{label}:</b> <Text>{value}</Text>
    </>
  );
};

const FishNutrients = ({ fishData }) => {
  // prettier-ignore
  const { calories, carbohydrate, cholesterol, totalFat, fiber, protein, saturatedFattyAcids, selenium, sodium, sugars } = fishData;

  return (
    <Box>
      <Heading as='h3' className='heading' mb='10'>
        Nutrient values
      </Heading>

      <Box display='grid' gridTemplateColumns='20rem 1fr'>
        <NutrientDetails label='Calories:' value={calories} />
        <NutrientDetails label='Carbohydrate' value={carbohydrate} />
        <NutrientDetails label='Cholestrol' value={cholesterol} />
        <NutrientDetails label='Total Fat' value={totalFat} />
        <NutrientDetails label='Fiber' value={fiber} />
        <NutrientDetails label='Protein' value={protein} />
        <NutrientDetails label='Saturated Fatty Acids' value={saturatedFattyAcids} />
        <NutrientDetails label='Selenium' value={selenium} />
        <NutrientDetails label='Sodium' value={sodium} />
        <NutrientDetails label='Total Sugar' value={sugars} />
      </Box>
    </Box>
  );
};

export default FishNutrients;
