import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { Headers as H, NavLink } from "../styles";

const NavBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: var(--dark);
  color: var(--light-text);
  overflow: hidden;
  transition: max-height 0.7s ease-in-out;
  max-height: ${(props) => (props.active ? "500px" : "0px")};
`;
const WideBox = styled.div`
  width: 50vw;
`;

const NarrowBox = styled.nav`
  width: 30vw;
`;

export function Nav({ active }) {
  return (
    <NavBox active={active}>
      <WideBox>
        <H.H3>Our Mission</H.H3>
        <H.H2>
          The home of techieCPD® - Continued Professional Development for tech
          enthusiasts! #TechAllies
        </H.H2>
        <H.H2>Develop | Connect | Maintain</H.H2>
      </WideBox>
      <NarrowBox>
        <H.H3>Site Map</H.H3>
        <NavLink href="/" exact>
          Home
        </NavLink>
        <NavLink href="/team" exact>
          Team
        </NavLink>
        <NavLink href="/summerinstitute" exact>
          Summer Institute
        </NavLink>
        <NavLink href="/crossindustryacademy" exact>
          Cross Industry Academy
        </NavLink>
        <NavLink href="/findingtruenorth" exact>
          Finding True North
        </NavLink>
      </NarrowBox>
    </NavBox>
  );
}

Nav.propTypes = { active: PropTypes.bool };
Nav.defaultProps = { active: false };
