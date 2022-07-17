import React from "react";
import PropTypes, { oneOfType } from "prop-types";
import Button from "../Button";
import * as S from "./Hero.styles";
import { Headers } from "../styles";

function Hero({ title, subtitle, cta }) {
  return (
    <S.Hero>
      <Headers.H1>{title}</Headers.H1>
      {Array.isArray(subtitle) ? (
        subtitle.map((text) => <Headers.H2 key={text}>{text}</Headers.H2>)
      ) : (
        <Headers.H2>{subtitle}</Headers.H2>
      )}
      {cta &&
        cta.map((action) => (
          <Button key={action._key} link={action.link} text={action.title} />
        ))}
    </S.Hero>
  );
}

export default Hero;

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: oneOfType([
    PropTypes.arrayOf(PropTypes.string.isRequired),
    PropTypes.string.isRequired,
  ]),
  cta: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

Hero.defaultProps = {
  title: null,
  subtitle: null,
  cta: null,
};
