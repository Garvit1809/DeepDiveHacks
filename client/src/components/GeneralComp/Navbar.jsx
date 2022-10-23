import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.div`
  width: 100vw;
  height: 4rem;
  /* border: 1px solid red; */
  -webkit-box-shadow: -2px 10px 16px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -2px 10px 16px -3px rgba(0, 0, 0, 0.75);
  box-shadow: -2px 10px 16px -3px rgba(0, 0, 0, 0.75);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: 500;
`;

const MenuList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const MenuItem = styled.li`
  list-style: none;
  margin: 0 1rem;
`;

const Navbar = () => {
  return (
    <Section>
      <Title>ScOObaDive</Title>
      <MenuList>
        <MenuItem>
          <Link to='/'>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/dive'>Scuba Dive</Link>
        </MenuItem>
        <MenuItem>
          <Link to='/encyclopedia'>Encyclopedia</Link>
        </MenuItem>
      </MenuList>
    </Section>
  );
};

export default Navbar;
