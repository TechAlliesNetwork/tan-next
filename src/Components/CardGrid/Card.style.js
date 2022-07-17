import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props["background-color"] ?? "white"};
  color: ${(props) => props["background-color"] && "white"};
  text-align: center;
  word-break: keep-all;
  .card-contents {
    padding: 1rem 2rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  button {
    display: block;
  }
  @media screen and (min-width: 500px) {
    background-color: white;
    color: var(--dark);
  }
  @media screen and (min-width: 1024px) {
    background-color: ${(props) => props["background-color"] ?? "white"};
    color: ${(props) => props["background-color"] && "white"};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const CardGrid = styled.section`
  display: grid;
  grid-gap: 2em;
  margin: 2em 0em;
  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: ${(props) =>
      `repeat(${props.columns}, minmax(0, 1fr))`};
  }
`;
