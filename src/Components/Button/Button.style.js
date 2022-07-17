import styled from "styled-components";

export const Button = styled.button`
  background: var(--dark-bg);
  color: ${(props) =>
    props.secondary ? "var(--dark-text)" : "var(--light-text)"};
  background: ${(props) =>
    props.secondary ? "var(--light-bg)" : "var(--dark-bg)"};

  padding: 0.75rem 1rem;
  margin: 0.8rem 0.5rem;
  font-size: 1.6rem;
  border: 0.2rem solid var(--dark-bg);
  border-radius: 0.3rem;

  &:hover {
    background: var(--dark-hover-bg);
    border-color: var(--dark-hover-bg);
    color: var(--light-text);
  }
`;
