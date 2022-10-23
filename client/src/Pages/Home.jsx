import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/GeneralComp/Navbar';

const Section = styled.div`
  /* cursor: url(diver-cursor.jpg), auto; */
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Section>Home</Section>
    </>
  );
};

export default Home;
