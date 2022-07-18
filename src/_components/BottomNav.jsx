import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  width: 100%;
  height: 40px;
  background-color: #555;
  position: sticky;
  bottom: 0;
  right: 0;
`;

const NavList = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 200px;
  gap: 30px;
  font-size: 18px;
  font-weight: 600;
`;

const NavListItem = styled.li`
  cursor: pointer;
  &:hover {
    color: red;
  }
  &.active {
    color: red;
  }
`;

const BottomNav = () => {
  const [navLinkActive, setNavLinkActive] = useState('');

  const handleActive = (event) => {
    event.target.addClass('active');
  };
  return (
    <Nav>
      <NavList>
        <NavListItem className='' onClick={handleActive}>
          Home
        </NavListItem>
        <NavListItem
          className={navLinkActive}
          onClick={() => {
            setNavLinkActive('');
            setNavLinkActive('active');
          }}
        >
          About
        </NavListItem>
        <NavListItem
          className={navLinkActive}
          onClick={() => {
            setNavLinkActive('');
            setNavLinkActive('active');
          }}
        >
          Portfolio
        </NavListItem>
        <NavListItem
          className={navLinkActive}
          onClick={() => {
            setNavLinkActive('');
            setNavLinkActive('active');
          }}
        >
          Blog
        </NavListItem>
        <NavListItem
          className={navLinkActive}
          onClick={() => {
            setNavLinkActive('');
            setNavLinkActive('active');
          }}
        >
          Contact
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default BottomNav;
