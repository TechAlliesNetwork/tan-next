import { NavLink as Link } from "../NavLink";
import styled from "styled-components";

const activeClassName = "active";
export default styled(Link)`
  font-weight: 400;
  color: white;
  display: block;
  padding: 0.1rem 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.${activeClassName} {
    font-weight: 600;
  }
`;
