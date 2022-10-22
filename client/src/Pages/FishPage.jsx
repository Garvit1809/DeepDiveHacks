import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/GeneralComp/Navbar';
import gold from '../assets/goldfish-removebg-preview.png';
import mackrel from '../assets/mackerel.png'
import squid from '../assets/squid.png'

const fishAnimate = keyframes`
0%{
  transform: rotateX(0) rotate(0);
}
25%{
  transform: rotate(20deg);
}
50%{
  transform: rotate(0);
}
75%{
  transform: rotate(-20deg);;
}
`;

const Intro = styled.div`
  border: 1px solid red;
  width: 100vw;
  height: 40vh;
`;

const Section = styled.div`
  width: 100vw;
  height: auto;
  /* position: relative; */
  display: flex;
  cursor: url(diver-cursor-removebg-preview.png), auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: lightblue;
`;

const FirstFish = styled.div`
  width: 100vw;
  height: auto;
  /* border: 1px solid red; */

  display: flex;
  /* align-items: flex-end; */
  justify-content: flex-end;

  div.first {
    /* border: 1px solid blue; */
    width: 200px;
    height: 200px;
    /* margin-left: 50vw; */
    /* margin-top: 30vh; */
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 8rem;
  }

  
  img.goldfish {
    width: 100px;
    height: 80px;
  }

  p.about {
    position: absolute;
    top: 10px;
    left: -200px;
    width: 200px;
    /* border: 1px solid red; */
    text-align: center;
  }

  p.cook {
    position: absolute;
    top: 210px;
    /* left: -200px; */
    width: 200px;
    /* border: 1px solid red; */
    text-align: center;
  }
`;

const squidAni = keyframes`
0%{
  margin-left: 500px;
}
50%{
  margin-left: 0px;
}
100%{
  margin-left: 500px;
}
`

const SecondFish = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  height: 80px;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */

  img {
    width: 150px;
    height: 140px;
    animation: ${squidAni} 10s linear infinite;
    /* transform: rotate(180deg) rotateX(180deg); */
  }
`;

const ThirdFish = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 200px;
  position: relative;
  margin-left: 0vw;
  margin-top: 0vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FourthFish = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 200px;
  position: relative;
  margin-left: 0vw;
  margin-top: 0vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FifthFish = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 200px;
  position: relative;
  margin-left: 0vw;
  margin-top: 0vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SixthFish = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 200px;
  position: relative;
  margin-left: 0vw;
  margin-top: 0vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SeventhFish = styled.div`
  border: 1px solid red;
  width: 200px;
  height: 200px;
  position: relative;
  margin-left: 0vw;
  margin-top: 0vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EighthFish = styled.div`
border: 1px solid red;
width: 200px;
height: 200px;
position: relative;
margin-left: 0vw;
margin-top: 0vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`

const NinthFish = styled.div`
border: 1px solid red;
width: 200px;
height: 200px;
position: relative;
margin-left: 0vw;
margin-top: 0vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`

const TenthFish = styled.div`  
border: 1px solid red;
width: 200px;
height: 200px;
position: relative;
margin-left: 0vw;
margin-top: 0vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`

const FishPage = () => {
  const [goldFish, setGoldFish] = useState(false);
  return (
    <>
      <Navbar />
      <Section>
        <Intro></Intro>
        <FirstFish data-scroll>
          <div
            className='first'
            data-scroll
            data-scroll-speed='12'
            data-scroll-direction='horizontal'
            onMouseEnter={() => setGoldFish(!goldFish)}
            onMouseLeave={() => setGoldFish(!goldFish)}
            >
            <img src={gold} alt='gold' className='goldfish' 
            ></img>
            {goldFish ? (
              <p className='about'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel consequuntur quibusdam laudantium,
                minima aperiam soluta repudiandae, distinctio odio beatae quasi deleniti iusto illum officiis
                consectetur accusamus, at expedita blanditiis.
              </p>
            ) : null}
            {goldFish ? <p className='cook'>Want to cook it?</p> : null}
          </div>
        </FirstFish>
        <SecondFish>
          <img src={squid} alt=''/>
        </SecondFish>
        <ThirdFish>
        </ThirdFish>
        <FourthFish>
        </FourthFish>
        <FifthFish>
        </FifthFish>
        <SixthFish>
        </SixthFish>
        <SeventhFish>
        </SeventhFish>
        <EighthFish>
        </EighthFish>
        <NinthFish>
        </NinthFish>
        <TenthFish>
        </TenthFish>
      </Section>
    </>
  );
};

export default FishPage;
