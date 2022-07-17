import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--dark);
  color: var(--light-text);
  padding: 0.4rem 0.4rem;
`;

const ButtonContainer = styled.button`
  display: inline-block;
  background-color: var(--dark);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  .bar1,
  .bar2,
  .bar3 {
    width: 2rem;
    height: 0.2rem;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0.5rem 0.5rem;
    transition: 0.25s;
  }
  .active.bar1 {
    transform: rotate(45deg) translate(5px, 5px);
  }
  .active.bar2 {
    opacity: 0;
  }
  .active.bar3 {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

export const HeaderContainer = styled.div`
  background-color: var(--dark);
`;
export function MenuButton({ menuActive, setMenuActive }) {
  function toggle() {
    setMenuActive(!menuActive);
  }
  return (
    <ButtonContainer onClick={toggle}>
      <div className={menuActive ? "active bar1" : "bar1"} />
      <div className={menuActive ? "active bar2" : "bar2"} />
      <div className={menuActive ? "active bar3" : "bar3"} />
    </ButtonContainer>
  );
}

MenuButton.propTypes = {
  menuActive: PropTypes.bool.isRequired,
  setMenuActive: PropTypes.func.isRequired,
};
