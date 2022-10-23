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
import yellowtailRockfish from '../assets/Yellowtail Rockfish.png';
import atlantic  from '../assets/Atlantic-Halibut.png'
import crimson from '../assets/crimson fish.png'

const Intro = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  height: 30vh;
  /* margin-top: 2rem; */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 2rem;
    font-weight: 600;
    color: white;
  }
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
    /* border: 1px solid red */
    border-radius: 10px;
    padding: 1rem;
    z-index: 100;
    background-color: lightgray;
    -webkit-box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
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
  
  div{
    width: 150px;
    animation: ${squidAni} 10s linear infinite;
    /* border: 1px solid red; */
    position: relative;
  }
  
  img {
    width: 150px;
    height: 140px;
    
  }

  p {
    position: absolute;
    top: 10px;
    right: -200px;
    width: 200px;
    /* border: 1px solid red */
    border-radius: 10px;
    padding: 1rem;
    z-index: 100;
    background-color: lightgray;
    -webkit-box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
    text-align: center;
  }
`;

const ThirdFish = styled.div`
  /* border: 1px solid red; */
  width: 100vw;
  height: 150px;
  display: flex;
  position: relative;
  /* flex-direction: column; */
  /* align-items: center; */
  /* justify-content: center; */

  img.guppy1 {
    left: 39vw;
    position: absolute;
    margin-right: 10vw;
    width: 150px;
    z-index: 1;
    height: 150px;
  }
  
  img.guppy2 {
    z-index: 1;
    
    left: 42vw;
    top: 60px;
    position: absolute;
    margin-right: 10vw;
    width: 150px;
    height: 150px;
  }
  img.guppy3{
    left: 35vw;
    top: 10px;
    z-index: 1;
    position: absolute;
    margin-right: 10vw;
    width: 150px;
    height: 150px;
  }
`;

const CrimsonAni = keyframes`
0%{
  right: 20px;
}
25%{
  right: 320px;
}
50%{
right: 520px;
}
75%{
  right: 220px;
  
}
100%{
  right: 20px;
  transform: rotate(0) rotateX(0);
}
`
const CrimsonAni2 = keyframes`
0%{
  right: 20px;
}
25%{
  right: 320px;
}
50%{
right: 520px;
}
75%{
  right: 220px;
  
}
100%{
  right: 20px;
  transform: rotate(0) rotateX(0);
}
`

const CrimsonAni3 = keyframes`
0%{
  right: 50px;
}
25%{
  right: 350px;
}
50%{
right: 550px;
}
75%{
  right: 250px;
  
}
100%{
  right: 50px;
  transform: rotate(0) rotateX(0);
}
`

const FourthFish = styled.div`
  /* border: 1px solid blue; */
  width: 100vw;
  height: 200px;
  position: relative;

  img.seahorse{
    position: absolute;
    top: -60px;
    left: -100px;
    width: 300px;
    transform: rotate(180deg) rotateX(180deg);
  }

  img.crimson1{
    position: absolute;
    top: 0px;
    right: 20px;
    width: 200px;
    transform: rotate(180deg) rotateX(180deg);
    animation: ${CrimsonAni} 10s ease-in-out infinite;
  }

  img.crimson2{
    position: absolute;
    top: -50px;
    right: 20px;
    width: 200px;
    transform: rotate(180deg) rotateX(180deg);
    animation: ${CrimsonAni2} 10s ease-in-out infinite;
  }

  img.crimson3{
    position: absolute;
    top: 40px;
    right: 50px;
    width: 200px;
    transform: rotate(180deg) rotateX(180deg);
    animation: ${CrimsonAni3} 10s ease-in-out infinite;
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
  
  div{
    width: 200px;
    /* border: 1px solid red; */
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${yellowAni} 1s ease-in;
  }

  img{
    left: 10vw;
    width: 200px;
    height: 200px;
    animation-delay: 7s;
  }

  p {
    position: absolute;
    top: 10px;
    right: -200px;
    width: 200px;
    /* border: 1px solid red */
    border-radius: 10px;
    padding: 1rem;
    z-index: 100;
    background-color: lightgray;
    -webkit-box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
-moz-box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
box-shadow: -1px 2px 16px 7px rgba(0,0,0,0.75);
    text-align: center;
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
    left: 600px;
    transform: rotate(-40deg);
  }

  img.fish2{
    left: 660px;
    top: 5px;
  }
  img.fish3{
    left: 660px;
    top: 60px;
  }
  img.fish4{
    left: 560px;
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
  const [squidFish, setSquidFish] = useState(false)
  const [yellowTail, setYellowTail] = useState(false)
  return (
    <>
      <Navbar />
      <Section data-scroll >
        <Intro>
          <h1>🤿 Get a Virtual Experience of Skuba Diving here 🤿</h1>
        </Intro>
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
          </div>
        </FirstFish>
        <SecondFish>
        <div>
        <img src={squid} alt='' onClick={() => setSquidFish(!squidFish)} />
        {
          squidFish ? <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsum voluptates, odio expedita nisi omnis doloremque eaque sed quis earum!</p> : null
        }
        </div>
        </SecondFish>
        <ThirdFish>
          <img src={guppy} alt='' data-scroll data-scroll-speed='8' data-scroll-direction='vertical' className='guppy1' />
          <img src={guppy} alt='' data-scroll data-scroll-speed='7' data-scroll-direction='vertical' className='guppy2' />
          <img src={guppy} alt='' data-scroll data-scroll-speed='10' data-scroll-direction='vertical' className='guppy3' />
        </ThirdFish>
        <FourthFish>
          <img src={seaHorse} alt='' className='seahorse' />
          <img src={crimson} alt="" className='crimson1' />
          <img src={crimson} alt="" className='crimson2' />
          <img src={crimson} alt="" className='crimson3' />
        </FourthFish>
        <FifthFish>
          <img src={whale} alt='' />
        </FifthFish>
        <SixthFish>
        <div  onClick={() => setYellowTail(!yellowTail)} 
        data-scroll data-scroll-speed='-8' data-scroll-direction='horizontal' 
        >
        <img src={yellowtailRockfish} alt="" />
        {
          yellowTail ? <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quibusdam beatae fuga officia voluptas eaque nemo vel vitae, ducimus esse porro dignissimos vero deserunt quas?</p> : null
        }
        </div>
        </SixthFish>
        <SeventhFish>
              <img src={atlantic} alt="" className='fish1' data-scroll
              data-scroll-speed='-14'
              data-scroll-direction='horizontal' />
              <img src={atlantic} alt="" className='fish2' data-scroll
              data-scroll-speed='-14.2'
              data-scroll-direction='horizontal' />
              <img src={atlantic} alt="" className='fish3' data-scroll
              data-scroll-speed='-14.4'
              data-scroll-direction='horizontal' />
              <img src={atlantic} alt="" className='fish4' data-scroll
              data-scroll-speed='-15'
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
