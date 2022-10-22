import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import goldfish from "../assets/goldfish.jpg";

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

const Section = styled.div`
  width: 100vw;
  height: 120vh;
  /* position: relative; */
  display: flex;
  cursor: url(diver-cursor.jpg), auto;
  display: flex;
    align-items: center;
    justify-content: center;

  div {
    border: 1px solid blue;
    width: 300px;
    height: 200px;
    /* position: absolute; */
    /* top: 40vh; */
    /* right: 0vw; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img.goldfish {
    width: 100px;
    height: 80px;
  }

  p.about{
    position: absolute;
    top: 10px;
    left: -200px;
    width: 200px;
    /* border: 1px solid red; */
    text-align: center;
  }

  p.cook{
    position: absolute;
    top: 210px;
    /* left: -200px; */
    width: 200px;
    /* border: 1px solid red; */
    text-align: center;
  }
`;

const FishPage = () => {
  const [goldFish, setGoldFish] = useState(false);
  return (
    <Section>
      <div
        data-scroll
        data-scroll-speed="20"
        data-scroll-direction="horizontal"
        onMouseEnter={() => setGoldFish(!goldFish)}
        onMouseLeave={() => setGoldFish(!goldFish)}
      >
        <img src={goldfish} alt="gold" className="goldfish"></img>
        {goldFish ? 
          <p className="about" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere vel consequuntur quibusdam laudantium, minima aperiam soluta repudiandae, distinctio odio beatae quasi deleniti iusto illum officiis consectetur accusamus, at expedita blanditiis.</p> :
          null}
        {
          goldFish ? <p className="cook" >Want to cook it?</p> : null
        }
      </div>
    </Section>
  );
};

export default FishPage;
