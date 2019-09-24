import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  min-height: 65px;
  img {
    height: 100%;
    width: 150px;
  }
  a {
    font-size: 16px;
    transition: 0.2s ease-in;
    :hover {
      color: ${(props) => props.theme.color.red};
    }
    &.sign-in-button {
      border: 1.5px solid ${(props) => props.theme.color.black};
      border-radius: 20px;
      padding: 6px 30px;
      :hover {
        background-color: ${(props) => props.theme.color.red};
        border: 1.5px solid ${(props) => props.theme.color.red};
        color: ${(props) => props.theme.color.black};
      }
    }
  }
  > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const NavItem = styled.div`
  flex: 1;
`;

const Navbar = () => (
  <Nav>
    <Link href="/">
      <a>
        <img src="/static/Decent_com.webp" alt="" />
      </a>
    </Link>
    <NavItem>
      <Link href="">
        <a>Plans</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="">
        <a>Brokers</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="">
        <a>Providers</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="">
        <a>FAQ</a>
      </Link>
    </NavItem>
    <NavItem>
      <Link href="/login">
        <a className="sign-in-button">Sign In</a>
      </Link>
    </NavItem>
  </Nav>
);

export default Navbar;
