import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from '../components/GeneralComp/Navbar';
import gold from '../assets/goldfish-removebg-preview.png';
import mackrel from '../assets/mackerel.png';
import squid from '../assets/squid.png';
import guppy from '../assets/guppy.png';
import seaHorse from '../assets/sea-horse.png';
import whale from '../assets/wtyy_4yql_220505-removebg-preview.png';
import starfish from '../assets/starfish.png';
import fi from '../assets/Yellowtail Rockfish.png';
import jn  from '../assets/Atlantic-Halibut.png'

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
  background-color: lightblue;
`;

const FirstFish = styled.div`
  width: 100vw;
  height: 50px;
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

  img.goldDup{
    position: absolute;
  }

  img.gold1{
    left:120px;
    width: 120px;
    height: 100px;
  }
  img.gold2{
    left: -3px;
    top: 24px;
    /* z-index: ; */
    width: 80px;
    height: 60px;
  }
  img.gold3{
    left:180px;
    top: 80px;
    width: 120px;
    height: 100px;
  }

  img.gold4{
    left:200px;
    top: 20px;
    width: 150px;
    height: 100px;
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
`;

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
  /* border: 1px solid red; */
  width: 100vw;
  height: 150px;
  margin-left: 0vw;
  margin-top: 0vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 10vw;
    width: 150px;
    height: 150px;
  }
`;

const FourthFish = styled.div`
  /* border: 1px solid blue; */
  width: 100vw;
  height: 200px;
  position: relative;

  img {
    position: absolute;
    top: -60px;
    left: -100px;
    width: 300px;
    transform: rotate(180deg) rotateX(180deg);
  }
`;

const whaleAni = keyframes`
0%{
  margin-left: 100vw;
}
50%{
  margin-left: 40vw;
}
100%{
  margin-left: -40vw;
}
`;

const FifthFish = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  height: 100px;
  position: relative;
  /* display: flex; */
  /* justify-content: flex-end; */

  img {
    width: 600px;
    height: auto;
    position: absolute;
    animation: ${whaleAni} 12s linear infinite;
  }
`;

const yellowAni = keyframes`
from{
  top: 0;
} to {
  top: 50px
}
`

const SixthFish = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  height: 200px;
  position: relative;
  /* margin-left: 0vw; */
  /* margin-top: 0vh; */
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */

  img{
    left: 10vw;
    position: absolute;
    /* border: 1px solid red; */
    width: 200px;
    height: 200px;
    animation: ${yellowAni} 1s ease-in;
    animation-delay: 7s;
  }
`;

const SeventhFish = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img{
    position: absolute;
    width: 150px;
    height: 120px;
  }

  img.fish1{
    left: 300px;
    transform: rotate(-40deg);
  }

  img.fish2{
    left: 360px;
    top: 5px;
  }
  img.fish3{
    left: 360px;
    top: 60px;
  }
  img.fish4{
    left: 260px;
    top: 5px;
  }
`;


const EighthFish = styled.div`
/* border: 1px solid red; */
  width: 100vw;
  height: 200px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;


  img{
    width: 150px;
    height: 120px;
  }

  img.starfish1{
    position: absolute;
    bottom: -10px;
    transform: rotate(60deg);
  }
  img.starfish2{
    position: absolute;
    bottom: 10px;
    right: 100px;
    width: 100px;
    height: 70px;
    /* transform: rotate(60deg); */
  }
  img.starfish3{
    position: absolute;
    bottom: 120px;
    right: 10px;
    transform: rotate(140deg);
  }

`;

const FishPage = () => {
  const [goldFish, setGoldFish] = useState(false);
  return (
    <>
      <Navbar />
      <Section data-scroll >
        <Intro></Intro>
        <FirstFish>
          <div
            className='first'
            data-scroll
            data-scroll-speed='12'
            data-scroll-direction='horizontal'
            onClick={() => setGoldFish(!goldFish)}
          >
            <img src={gold} alt='gold' className='goldfish'></img>
            <img src={gold} alt='gold' className='goldDup gold1'></img>
            <img src={gold} alt='gold' className='goldDup gold2'></img>
            <img src={gold} alt='gold' className='goldDup gold3'></img>
            <img src={gold} alt='gold' className='goldDup gold4'></img>
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
          <img src={squid} alt='' />
        </SecondFish>
        <ThirdFish>
          <img src={guppy} alt='' data-scroll data-scroll-speed='8' data-scroll-direction='vertical' />
        </ThirdFish>
        <FourthFish>
          <img src={seaHorse} alt='' />
        </FourthFish>
        <FifthFish>
          <img src={whale} alt='' />
        </FifthFish>
        <SixthFish>
              <img src={fi} alt="" data-scroll data-scroll-speed='-8' data-scroll-direction='horizontal' />
        </SixthFish>
        <SeventhFish>
              <img src={jn} alt="" className='fish1' data-scroll
              data-scroll-speed='-5'
              data-scroll-direction='horizontal' />
              <img src={jn} alt="" className='fish2' data-scroll
              data-scroll-speed='-5.2'
              data-scroll-direction='horizontal' />
              <img src={jn} alt="" className='fish3' data-scroll
              data-scroll-speed='-5.4'
              data-scroll-direction='horizontal' />
              <img src={jn} alt="" className='fish4' data-scroll
              data-scroll-speed='-6'
              data-scroll-direction='horizontal' />
        </SeventhFish>
        <EighthFish>
        <img src={starfish} alt="" className='starfish1' />
        <img src={starfish} alt="" className='starfish2'/>
        <img src={starfish} alt="" className='starfish3' />
        <img src={starfish} alt="" className='starfish4'/>
        <img src={starfish} alt="" className='starfish5'/>
        </EighthFish>
      </Section>
    </>
  );
};

export default FishPage;
