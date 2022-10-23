import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/GeneralComp/Navbar';
import seaImage from '../assets/sea-image.webp';

const Section = styled.div`
  cursor: url(diver-cursor-removebg-preview.png), auto;
  width: 100vw;
  min-height: 100vh;
  /* background-color: blue; */
`;

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-x: hidden;
  margin-top: 4rem;
  img {
    width: 40vw;
    border-radius: 10px;
  }
  p {
    width: 40vw;
    text-align: center;
  }
  /* background-color: blue; */
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-x: hidden;
  margin-top: 4rem;

  img {
    width: 40vw;
    border-radius: 10px;
  }
  p {
    width: 40vw;
    text-align: center;
  }
`;

const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-x: hidden;
  margin-top: 4rem;

  img {
    width: 40vw;
    border-radius: 10px;
  }
  p {
    width: 40vw;
    text-align: center;
  }
`;

const Container4 = styled.div`
  height: 2rem;
  width: 100vw;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Section>
        <Container>
          <img src={seaImage} alt='eejcb' />
          <p>
          The Idea behind Scooba Dive is to build a hassle-free web application which helps peoples and researchers to know more about marine life. We provide a virtual Scuba diving experience and a fish encyclopedia through which users can experience or get aware of marine life 🤿. We are spreading awareness through a fun activity of Scuba Diving.
          </p>
        </Container>
        <Container2>
          <p>
            We provide a cool feature of Vitual Scuba Diving for our users who never got to experience a real Scuba Dive. We have added many beautiful marine fishes which you see while making a scuba dive. Only 6 million people around the globe have experience Scuba Diving, so its a little effort from our side to give people aatleast a virtual Scuba Diving Experience.
          </p>
          <img
            src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='rvr'
          />
        </Container2>
        <Container3>
          <img
            src='https://images.unsplash.com/photo-1607746747627-8f2311dac2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZW5jeWNsb3BlZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='rvr'
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quisquam nisi commodi laborum, beatae
            nesciunt nulla quae placeat veritatis id aperiam? Ea id aut harum, quas ut similique distinctio qui possimus
            sequi! Quae eveniet exercitationem enim debitis? Cum, dignissimos autem?
          </p>
        </Container3>
        <Container4></Container4>
      </Section>
    </>
  );
};

export default Home;
