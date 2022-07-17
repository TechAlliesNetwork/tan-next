import styled from "styled-components";
import device from "./device";

export default styled.div`
  max-width: 100%;
  margin: auto;
  @media ${device.tablet} {
    max-width: 72rem;
  }
  @media ${device.laptop} {
    max-width: 96rem;
  }
  @media ${device.laptopL} {
    max-width: 114rem;
  }
  @media ${device.desktop} {
    max-width: 200rem;
  }
`;
