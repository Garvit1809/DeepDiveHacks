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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iste rem quas earum dolore eius
            praesentium laborum iusto accusamus accusantium. Dignissimos hic illum consectetur sed earum provident
            perferendis libero totam atque explicabo est accusantium dolorum voluptate dolor aspernatur, eum natus!
          </p>
        </Container>
        <Container2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iure inventore reprehenderit! Officiis, labore
            hic reprehenderit, dolore natus voluptatum voluptatibus ducimus, tenetur quas iusto reiciendis odit harum
            voluptatem ea? Perspiciatis rem molestiae vero sapiente id voluptas, assumenda voluptates ipsam. Assumenda.
          </p>
          <img
            src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='rvr'
          />
        </Container2>
        <Container3>
          <img src={seaImage} alt='rvr' />
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
