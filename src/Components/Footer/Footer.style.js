import styled from "styled-components";
import device from "../styles/device";

export const SocialBar = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  padding: 0;
`;

export const LI = styled.li`
  & a,
  a:link,
  a:visited,
  a:active {
    text-decoration: none;
    color: var(--dark) !important;
  }
  & a:hover {
    text-decoration: underline;
    color: var(--tan-blue) !important;
  }
`;

export const Image = styled.img`
  width: 5vw;
  max-width: 5rem;

  @media ${device.maxTablet} {
    width: 3rem;
  }
`;

export const BottomBar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media ${device.maxTablet} {
    flex-flow: column wrap;
    justify-content: center;
  }
`;

export const Footer = styled.footer`
  background-color: var(--footer-bg);
  color: var(--dark);
  padding: 3rem 15rem;
  a,
  a:link,
  a:visited {
    color: var(--tan-blue);
  }

  @media ${device.maxTablet} {
    padding: 3rem 3rem;
  }
`;
